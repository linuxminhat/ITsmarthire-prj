import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { Application, ApplicationDocument } from './schemas/application.schema';
import { CreateApplicationDto } from './dto/create-application.dto';
import { IUser } from 'src/users/users.interface';
import mongoose from 'mongoose';
import { Job, JobDocument } from 'src/jobs/schemas/job.schema';
import aqp from 'api-query-params';
import { UpdateApplicationStatusDto } from './dto/update-application-status.dto';

@Injectable()
export class ApplicationsService {
  constructor(
    @InjectModel(Application.name)
    private applicationModel: SoftDeleteModel<ApplicationDocument>
  ) {}

  async create(createApplicationDto: CreateApplicationDto, user: IUser) {
    const { jobId, cvUrl } = createApplicationDto;

    // Check if user already applied for this job with this CV
    const existingApplication = await this.applicationModel.findOne({
      userId: user._id,
      jobId: jobId,
      cvUrl: cvUrl,
    });

    if (existingApplication) {
      throw new BadRequestException('Bạn đã ứng tuyển vào công việc này với CV này rồi.');
    }

    // Create new application
    const newApp = await this.applicationModel.create({
      userId: user._id,
      jobId: jobId,
      cvUrl: cvUrl,
      status: 'pending', // Initial status
      createdBy: {
        _id: user._id,
        email: user.email
      }
    });

    return {
      _id: newApp._id,
      createdAt: newApp.createdAt,
      message: 'Nộp đơn ứng tuyển thành công!'
    };
  }

  async findByJob(jobId: string, currentPage: number, limit: number, qs: string) {
    if (!mongoose.Types.ObjectId.isValid(jobId)) {
      throw new BadRequestException('Job ID không hợp lệ.');
    }

    const { filter, sort, population, projection } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    let offset = (currentPage - 1) * limit;
    let defaultLimit = limit ? limit : 10;

    const queryFilter = { ...filter, jobId: new mongoose.Types.ObjectId(jobId) };

    const totalItems = await this.applicationModel.countDocuments(queryFilter);
    const totalPages = Math.ceil(totalItems / defaultLimit);

    // Default population to get basic user info
    let defaultPopulation = [
        { path: 'userId', select: '_id name email' } // Populate user details
        // Add job population if needed: { path: 'jobId', select: '_id name' }
    ];

    const result = await this.applicationModel.find(queryFilter)
        .skip(offset)
        .limit(defaultLimit)
        .sort(sort as any)
        .populate(population && population.length > 0 ? population : defaultPopulation)
        .select(projection as any)
        .exec();

    return {
      meta: {
        current: currentPage,
        pageSize: defaultLimit,
        pages: totalPages,
        total: totalItems
      },
      result
    };
  }

  async updateStatus(id: string, updateDto: UpdateApplicationStatusDto, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new BadRequestException('ID đơn ứng tuyển không hợp lệ.');
    }

    const updated = await this.applicationModel.updateOne(
      { _id: id },
      {
        status: updateDto.status,
        updatedBy: {
          _id: user._id,
          email: user.email
        }
      }
    );

    if (updated.matchedCount === 0) {
        throw new NotFoundException(`Không tìm thấy đơn ứng tuyển với ID: ${id}`);
    }

    // Optionally, you could return the updated document if needed
    // return this.applicationModel.findById(id);

    return { message: 'Cập nhật trạng thái ứng tuyển thành công.' };
  }

  async findByUser(userId: string, currentPage: number, limit: number, qs: string) {
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new BadRequestException('User ID không hợp lệ.');
    }

    const { filter, sort, population, projection } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    let offset = (currentPage - 1) * limit;
    let defaultLimit = limit ? limit : 10;

    // Filter by userId
    const queryFilter = { ...filter, userId: new mongoose.Types.ObjectId(userId) };

    const totalItems = await this.applicationModel.countDocuments(queryFilter);
    const totalPages = Math.ceil(totalItems / defaultLimit);

    // Default population to get Job details
    let defaultPopulation = [
        { 
            path: 'jobId', 
            select: '_id name location salary company isActive isHot', // Select needed job fields
            populate: { // Populate company within the job
                path: 'company', 
                select: '_id name logo' 
            }
        }
    ];

    const result = await this.applicationModel.find(queryFilter)
        .skip(offset)
        .limit(defaultLimit)
        .sort(sort as any) // Apply sort, default might be -createdAt
        .populate(population && population.length > 0 ? population : defaultPopulation)
        .select(projection as any) // Select specific application fields if needed
        .exec();

    return {
      meta: {
        current: currentPage,
        pageSize: defaultLimit,
        pages: totalPages,
        total: totalItems
      },
      result
    };
  }

  // Add other methods like findAll, findOne, remove if needed later
} 