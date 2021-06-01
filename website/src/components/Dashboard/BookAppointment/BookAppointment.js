import React from 'react';
import BookingCard from '../../Booking/BookingCard/BookingCard';
import Sidebar from '../Sidebar/Sidebar';

const BookAppointment = () => {
    return (
        <div className="row container-fluid">
                <Sidebar></Sidebar>
            <div className="col-md-9">
                <h1 style={{fontSize: '30px'}} className="text-center mb-5 ">Book Appointment</h1>
            <br/>
                <div className="mb-5">
                    <BookingCard></BookingCard>
                </div>
                <div className="form-group">
                    <button style={{float: 'right', backgroundColor: 'lightgray', height: '50px', width: '80px', borderRadius: '5px'}} type="submit">Send</button>
                </div>
            </div>
        </div>
    );
};

export default BookAppointment;