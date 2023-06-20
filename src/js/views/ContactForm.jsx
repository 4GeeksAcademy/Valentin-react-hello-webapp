import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

const ContactForm = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="container w-75 mt-5 border border-dark">
        <form>
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              aria-describedby="fullName"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone
            </label>
            <input type="text" className="form-control" id="phoneNumber" />
          </div>
          <div className="mb-3">
            <label htmlFor="adress" className="form-label">
              Adress
            </label>
            <input type="text" className="form-control" id="adress" />
          </div>
          <div className="justify-content-center d-flex my-3 w-100">
            <button type="submit" className=" w-100 btn btn-primary">
              Add contact
            </button>
          </div>
        </form>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/">
          <button className="btn btn-success">Back to Contact List</button>
        </Link>
      </div>
    </div>
  );
};
export default ContactForm;



