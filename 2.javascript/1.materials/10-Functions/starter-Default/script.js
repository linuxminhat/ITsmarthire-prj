'use strict';

const bookings = [];
const createBooking = function (
    flightNumb,
    numbPassengers = 1,
    price = 199 * numbPassengers,
) {
    const booking = {
        flightNumb,
        numbPassengers,
        price,
    };
    console.log(booking);
    bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', 2, 2810);
