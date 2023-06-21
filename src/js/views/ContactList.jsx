import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard.jsx";

const ContactList = () => {
  const { actions, store } = useContext(Context);

  useEffect(() => {
    actions.loadSomeData();
  }, [store.contacts]);

  return (
    <div className="content mt-5 mx-auto">
      {store.contacts &&
        store.contacts.map((contact, index) => (
          <ContactCard contact={contact} key={contact.id} index={index} />
        ))}
      <div className="mt-4 d-flex justify-content-center">
        <Link to="/ContactForm">
          <button className="btn btn-success">Add New Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default ContactList;
