const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      agenda: [],
      contactList: "",
      idToUpdate: "",
    },
    actions: {
      getAgenda: async () => {
        try {
          const store = getStore();
          const result = await fetch(
            `https://assets.breatheco.de/apis/fake/contact/agenda/${store.contactList}`
          );
          const data = await result.json();

          setStore({ agenda: data });

        } catch (error) {
          console.log("Could not retrieve calendar: ", error);
        }
      },

      createContact: async (newContact) => {
        try {
          console.log(newContact);
          const result = await fetch(
            "https://assets.breatheco.de/apis/fake/contact/",
            {
              method: "POST",
              body: JSON.stringify(newContact),
              headers: {
                "Content-type": "application/json",
              },
            }
          );
          const data = await result.json();

          if (result.ok) {
            const store = getStore();
            setStore({ ...store, agenda: [...store.agenda, newContact] });
            console.log("Contacts have been updated", data);
          }
        } catch (error) {
          console.log("Failed to upload new contact to API", error);
        }
      },

      changeAgenda: (agenda) => {
        const store = getStore();
        setStore({ ...store, contactList: agenda });
      },

      deleteContact: async (id) => {
        try {
          const result = await fetch(
            `https://assets.breatheco.de/apis/fake/contact/${id}`,
            {
              method: "DELETE",
            }
          );
          if (result.ok) {
            const data = await result.json();
            console.log("Contact has been deleted", data);
            const { getAgenda } = getActions();
            getAgenda();
          }
        } catch (error) {
          console.log("Failed to delete contact to API", error);
        }
      },

      onEdit: async (id) => {
        try {
          const result = await fetch(
            `https://assets.breatheco.de/apis/fake/contact/${id}`,
            {
              method: "PUT",
              body: JSON.stringify(),
            }
          );
          if (result.ok) {
            const data = await result.json();
            console.log("Contact has been deleted", data);
            const { getAgenda } = getActions();
            getAgenda();
          }
        } catch (error) {
          console.log("Failed to delete contact to API", error);
        }
      },

      updateId: async (id) => {
        const store = getStore();
        setStore({ ...store, idToUpdate: id });
      },

      updateContact: async (newContact) => {
        try {
          console.log(newContact);
          const { idToUpdate } = getStore();
          const result = await fetch(
            `https://assets.breatheco.de/apis/fake/contact/${idToUpdate}`,
            {
              method: "PUT",
              body: JSON.stringify(newContact),
              headers: {
                "Content-type": "application/json",
              },
            }
          );
          const data = await result.json();

          if (result.ok) {
            const store = getStore();
            console.log("The contact was updated in the API	", data);
            const { getAgenda } = getActions();
            await getAgenda();
            setStore({ ...store, idToUpdate: "" });
          }
        } catch (error) {
          console.log("Failed to upload new contact to API", error);
        }
      },
    },
  };
};

export default getState;
