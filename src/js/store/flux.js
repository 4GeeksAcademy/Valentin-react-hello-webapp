import { useState } from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: [],
			contactList: "",
			idToUpdate: "",
		},
		actions: {
			getAgenda: async () => {
				try{
					const store = getStore()
					const result = await fetch(`https://assets.breatheco.de/apis/fake/contact/agenda/${store.contactList}`)
					const data = await result.json()

					setStore({agenda: data})
					
					console.log("API respondió con la agenda: ", data)
				}catch(error){
					console.log("No se pudo recuperar la agenda: ",error)
				}
			},

			createContact: async (newContact) => {
				try{
					console.log(newContact)
					const result = await fetch("https://assets.breatheco.de/apis/fake/contact/",{
						method: "POST",
						body: JSON.stringify(newContact),
						headers:{
							'Content-type': 'application/json'
						}
					})
					const data = await result.json()
					
					if(result.ok){
						const store = getStore()
						setStore({...store, agenda: [ ...store.agenda, newContact]})
						console.log("El contacto fue actualizado en la API",data)
					}

				}catch(error){

					console.log("No se pudo subir el nuevo contactoa la API", error)

				}

			},

			changeAgenda: (agendaSlug) => {
				const store = getStore()
				setStore({...store,contactList: agendaSlug})
			},

			deleteContact: async (id) => {
				try{

					const result = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`,{
						method: "DELETE"
					})
					if(result.ok){
						const data = await result.json()
						console.log("Se pudo eliminar el contacto", data)
						const {getAgenda} = getActions()
						getAgenda()
					}
					

				}catch(error){

					console.log("Falla al eliminar contacto",error)

				}
			},

			onEdit: async (id) => {
				try{

					const result = await fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`,{
						method: "PUT",
						body: JSON.stringify()
					})
					if(result.ok){
						const data = await result.json()
						console.log("Se pudo eliminar el contacto", data)
						const {getAgenda} = getActions()
						getAgenda()
					}
					

				}catch(error){

					console.log("Falla al eliminar contacto",error)

				}
			},

			updateId: async (id) => {
				const store = getStore()
				setStore({...store, idToUpdate: id})
			},

			onEditContact : async (newContact) => {
				try{
					console.log(newContact)
					const { idToUpdate } = getStore()
					const result = await fetch(`https://assets.breatheco.de/apis/fake/contact/${idToUpdate}`,{
						method: "PUT",
						body: JSON.stringify(newContact),
						headers:{
							'Content-type': 'application/json'
						}
					})
					const data = await result.json()
					
					if(result.ok){
						const store = getStore()
						console.log("El contacto fue actualizado en la API",data)
						const { getAgenda } = getActions()
						await getAgenda()
						setStore({...store,idToUpdate: ""})
					}

				}catch(error){

					console.log("No se pudo subir el nuevo contactoa la API", error)

				}

			}
		}
	};
};

export default getState;