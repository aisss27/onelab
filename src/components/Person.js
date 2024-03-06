import React, { useState } from "react";
import styled from "styled-components";


export const Person = ({ person, onDelete, onEdit }) => {
    const [isEditing, setEditing] = useState(false);
    const [editedName, setEditedName] = useState(person.name);

    const handleDoubleClick = () => {
        setEditing(true);
    };

    const handleNameChange = (e) => {
        setEditedName(e.target.value);
    };

    const handleBlur = () => {
        setEditing(false);
        onEdit(editedName);
    };

    return (
        <StyledContainer vip={person.name === 'ais'}>
            {isEditing ? (
                <input
                    type="text"
                    value={editedName}
                    onChange={handleNameChange}
                    onBlur={handleBlur}
                    autoFocus
                />
            ) : (
                <>
                    <p onDoubleClick={handleDoubleClick}>{editedName}</p>
                </>
            )}
            <p>{person.surname}</p>
            <p>{person.phone}</p>
            <button onClick={onDelete}>delete</button>
        </StyledContainer>
    );
};


const StyledContainer = styled.div`
  background: ${(props) => (props.vip ? 'linear-gradient(135deg, #3498db, #8e44ad)' : '#f39c12')};
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  input {
    margin: 8px 0;
  }
`;
