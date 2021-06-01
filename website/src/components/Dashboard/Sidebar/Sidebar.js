import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faHome, faTags, faComments, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-3 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-secondary">
                        <FontAwesomeIcon icon={faHome} /> <b>Home</b>
                    </Link>
                </li>
                <br />
                <li>
                    <Link to="/addBooking" className="text-secondary">
                        <FontAwesomeIcon icon={faTags} /> <b>Book</b>
                    </Link>
                </li>
                <br />
                <li>
                    <Link to="/addTestimonial" className="text-secondary">
                        <FontAwesomeIcon icon={faComments} /> <b>Review</b>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-secondary"><FontAwesomeIcon icon={faSignOutAlt} /> <b>Logout</b></Link>
            </div>
        </div>
    );
};

export default Sidebar;