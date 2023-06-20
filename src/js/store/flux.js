const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      contacts: [],
    },
    actions: {
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
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

            // Mettez à jour le store après la suppression réussie
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
            const updatedContacts = [...contacts, newContact];
            setStore({ contacts: updatedContacts });
          })
          .catch((error) => {
            console.error("Erreur lors de la création du contact:", error);
          });
      },

      handleSubmit: (newContact) => {
        const { createContact } = getActions();
        createContact(newContact);
      },

      handleDelete: (id) => {
        const { deleteContact } = getActions();
        deleteContact(id);
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
