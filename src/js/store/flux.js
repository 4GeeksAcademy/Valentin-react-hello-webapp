const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
      contact: {
        full_name: "",
        email: "",
        phone: "",
        address: "",
      },
    },
    actions: {
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      handleChange: (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setStore({ ...getStore().contact, [name]: value });
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
            const { contacts } = getStore();
            const updatedContacts = contacts.filter(
              (contact) => contact.id !== id
            );
            setStore({ contacts: updatedContacts });
          })
          .catch((error) => {
            console.error("Erreur lors de la suppression du contact:", error);
          });
      },
      createContact: (newContact) => {
        fetch("https://assets.breatheco.de/apis/fake/contact/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newContact),
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Erreur lors de la création du contact.");
            }
            const { contacts } = getStore();
            const { contact } = getStore();
            setStore([...contacts, { ...contact }]);
            setStore({
              full_name: "",
              email: "",
              phone: "",
              address: "",
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
