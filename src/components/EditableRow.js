import React from "react";

const EditableRow = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr >
      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter Id..."
          name="Id"
          value={editFormData.Id}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Title..."
          name="title"
          value={editFormData.title}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter Color..."
          name="color"
          value={editFormData.color}
          onChange={handleEditFormChange}
        ></input>
      </td>
     
      <td>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancelClick}>
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;