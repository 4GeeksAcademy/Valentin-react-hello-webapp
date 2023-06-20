import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const ContactForm = () => {
  const { actions } = useContext(Context);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [agenda, setAgenda] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      full_name: fullName,
      email,
      phone: phoneNumber,
      address,
    };

    actions.handleSubmit(newContact);

    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
  };

  return (
    <div>
      <div className="container w-75 mt-5 border border-dark">
        <form onSubmit={handleSubmit}>
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
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="adress" className="form-label">
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
          <div className="mb-3">
            <label htmlFor="adress" className="form-label">
              Agenda
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={agenda}
              onChange={(e) => setAgenda(e.target.value)}
            />
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
