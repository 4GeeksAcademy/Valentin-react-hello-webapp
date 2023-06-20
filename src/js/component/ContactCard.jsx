import React, { useContext } from "react";
import { Context } from "../store/appContext";

const ContactCard = ({ contact }) => {
  const { actions } = useContext(Context);
  const handleDelete = () => {
    actions.handleDelete(contact.id);
  };
  return (
    <div key={contact.id}>
      <div className="card d-flex mx-auto w-75">
        <div className="d-flex">
          <div className="photo ms-4 align-items-center d-flex">
            <img
              src="https://i.pinimg.com/originals/00/81/bd/0081bdd28bc4730a28cceb697b213de9.png"
              className="img-fluid rounded-start"
              width={75}
              alt="personaje"
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">{contact.full_name}</h5>
            <span>Adresse: {contact.address}</span> <br />
            <span>Téléphone: {contact.phone}</span> <br />
            <span>Email: {contact.email}</span>
          </div>
          <div className="icons mt-2 me-2">
            <button className="me-2  btn-primary">&#9998;</button>
            <button
              className=" btn-danger"
              data-bs-toggle="modal"
              data-bs-target="#myModal"
            >
              &#9746;
            </button>
            <div
              className="modal"
              id="myModal"
              aria-labelledby="myModal"
              aria-hidden="true"
              tabIndex="-1"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Are you sure?</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p>
                      if you click on this button, this contact will be
                      pulverized instantly
                    </p>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Oh my god!!
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handleDelete}
                    >
                      Sure baby!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
