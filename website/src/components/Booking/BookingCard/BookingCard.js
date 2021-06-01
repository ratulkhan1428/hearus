import React from 'react';
import TextField from '@material-ui/core/TextField';


const BookingCard = () => {
    return (
        <div>
            <form>
                <b>Name</b>
                <div className="form-group mb-2">
                    <input type="text" name="name" placeholder="Your Name" className="form-control" />
                </div>
                <b>Email</b>
                <div className="form-group mb-2">
                    <input type="text" name="email" placeholder="Email" className="form-control" />
                </div>
                <br />
                <b>Select Appointment Time</b>
                <div>
                    <form noValidate>
                        <TextField
                            id="datetime-local"
                            type="datetime-local"
                            defaultValue="2021-05-24T10:30"
                            
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />
                    </form>
                </div>
            
            </form>
        </div>
    );
};

export default BookingCard;