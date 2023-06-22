import React, { useEffect, useState } from "react";
import { Context } from "../store/appContext.js";
import { useContext } from "react";
import ContactCard from "../component/ContactCard.jsx";
import ContactForm from "./ContactForm.jsx";

const ContactList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getAgenda();
  }, [store.contactList]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto">
      <h1 className="">Contact List</h1>
      <h5>List name</h5>
      <input
        type="text"
        onChange={(e) => actions.changeAgenda(e.target.value)}
      />
      <h6>
        To create a directory, add a contact and it will create it
        automatically.
      </h6>
      <button
        type="button"
        className="btn btn-success mb-3 "
        onClick={openModal}
      >
        Add New Contact
      </button>

      <div className="column">
        {store.agenda.map((contact, index) => (
          <ContactCard
            photo="https://i.pinimg.com/736x/c7/4c/a6/c74ca6827eed655aa080143a0970242f.jpg"
            key={index}
            contact={contact}
            deleteContact={() => actions.deleteContact(index)}
            onEdit={openModal}
          />
        ))}
      </div>

      <ContactForm isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ContactList;
