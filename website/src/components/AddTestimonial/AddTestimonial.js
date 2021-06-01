import React from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';

const AddTestimonial = () => {
    return (
        <div>
          <div className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-9 mx-auto">
              <h1 style={{fontSize: '30px'}} className="ms-5 text-center">Review</h1>
              <form className="p-5">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name *"
                  />
                </div>
                <br />
                <div className="form-group">
                  <textarea
                    name=""
                    className="form-control"
                    cols="30"
                    rows="10"
                    placeholder="Review *"
                  ></textarea>
                </div>
              </form>
              <div className="form-group text-center">
                <button type="button" className="btn btn-primary">
                  {" "}
                  Submit{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
    );
};

export default AddTestimonial;


