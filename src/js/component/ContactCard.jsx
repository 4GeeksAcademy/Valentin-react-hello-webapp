import React from "react";
import { Context } from "../store/appContext";
import { useContext } from "react";

const ContactCard = ({ contact, onEdit }) => {
  const { actions } = useContext(Context);

  const { full_name, email, phone, address, id } = contact;

  const handleEdit = (id) => {
    onEdit();
    actions.updateId(id);
  };

  return (
    <div className="card col-md-12 mb-12">
      <div className="row mb-2 g-0">
        <div className="col-md-4 img-contact d-flex align-items-center ps-2">
          <img
            src="https://i.pinimg.com/originals/d4/e4/42/d4e4423660d89e6947103541d119d72d.png"
            alt="Contact"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6 text-start">
          <div className="card-body">
            <h5 className="card-title">{full_name}</h5>
            <p className="card-text">
              <strong>Email:</strong> {email}
            </p>
            <p className="card-text">
              <strong>Phone:</strong> {phone}
            </p>
            <p className="card-text">
              <strong>Address:</strong> {address}
            </p>
          </div>
        </div>
        <div className="col-md-2 card-footer d-flex justify-content-center align-items-center">
          <button
            className="btn btn-primary me-2"
            onClick={() => handleEdit(id)}
          >
            &#9998;
          </button>
          <button
            className="btn btn-danger"
            onClick={() => actions.deleteContact(id)}
          >
            &#9746;
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
