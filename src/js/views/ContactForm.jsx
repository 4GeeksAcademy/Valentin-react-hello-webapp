import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactForm = () => {
  const { actions, store } = useContext(Context);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

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
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phoneNumber"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="justify-content-center d-flex my-3 w-100">
            <button
              type="button"
              onClick={() =>
                actions.createContact({
                  full_name: fullName,
                  email: email,
                  phone: phone,
                  address: address,
                })
              }
              className=" w-100 btn btn-primary"
            >
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
