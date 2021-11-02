import React, { useState, Fragment, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import data from "./data.json";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow.js";
import Sidebar from "./components/Sidebar";

//get data from localstorage

const getLocalItems=()=>{
  let list=localStorage.getItem("list");
  if (list){
    return JSON.parse( localStorage.getItem("list"));
  }
}
const App = () => {
  const [contacts, setContacts] = useState(getLocalItems());
  const [addFormData, setAddFormData] = useState({
    Id: "",
    title: "",
    color: ""
    
  });

  const [editFormData, setEditFormData] = useState({
    Id: "",
    title: "",
    color: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      Id: addFormData.Id,
      title: addFormData.title,
      color: addFormData.color
    
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      Id: editFormData.Id,
      title: editFormData.title,
      color: editFormData.color
   
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      Id: contact.Id,
      title: contact.title,
      color: contact.color
  
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  //storing data on localstorage
  useEffect(() => {
    localStorage.setItem("list",JSON.stringify(contacts))
  }, [contacts])
  console.log(contacts)
  return (
   <div className="App">
      
    <div className="sidebar"><Sidebar contacts={contacts}/></div>
    <div className="mainarea">
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr style={{textAlign:"center"}}>
              <th>Id</th>
              <th>Title</th>
              <th>Color</th> 
              <th>Actions</th>  
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add New Data</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="number"
          name="Id"
          required="required"
          placeholder="Enter Id..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="title"
          required="required"
          placeholder="Enter Title..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="color"
          required="required"
          placeholder="Enter Color..."
          onChange={handleAddFormChange}
        />
      
        <button type="submit">Add</button>
      </form>
    </div>
    
    </div>
    
    </div>
   
  );
};

export default App;
 