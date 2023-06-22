import React, { useState, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useContext } from 'react';

const ContactForm = ({ isOpen, onClose }) => {

  const { store , actions } = useContext(Context)


  const [full_name, setFull_Name] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  useEffect(()=>{
    actions.changeAgenda(store.contactList)
  },[store.agenda]);

  const handleSave = () => {

    const newContact = {
      full_name,
      email,
      agenda_slug: store.contactList,
      address,
      phone,
    };

    if(!store.idToUpdate){
      actions.createContact(newContact)
    }else{
      actions.updateContact(newContact)
    };
    setFull_Name('');
    setEmail('');
    setAddress('');
    setPhone('');
    onClose()
  };

  return (
    <div
      className={`modal ${isOpen ? 'show' : ''}`}
      tabIndex="-1"
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="contactModalLabel">
              Add New Contact
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            ></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="full_name" className="form-label">
                Full Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="full_name"
                value={full_name}
                onChange={(e) => setFull_Name(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email:
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
              <label htmlFor="phone" className="form-label">
                Phone:
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
