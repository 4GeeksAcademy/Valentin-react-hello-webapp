const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      contact: {
        full_name: "",
        email: "",
        phone: "",
        address: "",
        agenda_slug: "DreamAgenda",
      },
    },
    actions: {
      handleChange: (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        const { contact } = getStore();
        setStore({ contact: { ...contact, [name]: value } });
      },

      loadSomeData: () => {
        fetch(
          "https://assets.breatheco.de/apis/fake/contact/agenda/DreamAgenda"
        )
          .then((res) => res.json())
          .then((data) => {
            setStore({ contacts: data });
          })
          .catch((error) => {
            console.log("Error loading contacts:", error);
          });
      },
      deleteContact: (id) => {
        fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
          method: "DELETE",
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Erreur lors de la suppression du contact.");
            }
          })
          .catch((error) => {
            console.error("Erreur lors de la suppression du contact:", error);
          });
      },
      handleDelete: (id, index) => {
        const { contacts } = getStore();
        const updatedContacts = contacts.splice(index, 1);
        console.log(contacts.splice(index, 1));
        setStore({ contacts: updatedContacts });
        // getActions().deleteContact(id);
      },
      createContact: (obj) => {
        const store = getStore();
        obj.agenda_slug = "DreamAgenda";
        console.log(obj);

        fetch("https://assets.breatheco.de/apis/fake/contact/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Erreur lors de la création du contact.");
            }
            return response.json();
          })
          .then((data) => {
            setStore({
              contacts: [...contacts, data],
              contact: obj,
            });
          })
          .catch((error) => {
            console.error("Erreur lors de la création du contact:", error);
          });
      },

      changeColor: (index, color) => {
        const store = getStore();
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
