import React, { useState } from 'react';
import styled from 'styled-components';
import { edit } from '../redux/slices/listSlice';
import { useDispatch } from 'react-redux';

export const Person = ({ person, onDelete }) => {
    const [isEditingName, setEditingName] = useState(false);
    const [isEditingSurname, setEditingSurname] = useState(false);
    const [isEditingPhone, setEditingPhone] = useState(false);

    const [editedName, setEditedName] = useState(person.name);
    const [editedSurname, setEditedSurname] = useState(person.surname);
    const [editedPhone, setEditedPhone] = useState(person.phone);

    const dispatch = useDispatch();

    const handleDoubleClick = (field) => {
        switch (field) {
            case 'name':
                setEditingName(true);
                setEditedName(person.name);
                break;
            case 'surname':
                setEditingSurname(true);
                setEditedSurname(person.surname);
                break;
            case 'phone':
                setEditingPhone(true);
                setEditedPhone(person.phone);
                break;
            default:
                break;
        }
    };

    const handleBlur = (field) => {
        switch (field) {
            case 'name':
                setEditingName(false);
                dispatch(edit({ id: person.id, updates: { name: editedName } }));
                break;
            case 'surname':
                setEditingSurname(false);
                dispatch(edit({ id: person.id, updates: { surname: editedSurname } }));
                break;
            case 'phone':
                setEditingPhone(false);
                dispatch(edit({ id: person.id, updates: { phone: editedPhone } }));
                break;
            default:
                break;
        }
    };

    const handleChange = (field, e) => {
        switch (field) {
            case 'name':
                setEditedName(e.target.value);
                break;
            case 'surname':
                setEditedSurname(e.target.value);
                break;
            case 'phone':
                setEditedPhone(e.target.value);
                break;
            default:
                break;
        }
    };

    return (
        <StyledContainer vip={person.name === 'ais'}>
            {isEditingName ? (
                <input
                    type="text"
                    value={editedName}
                    onChange={(e) => handleChange('name', e)}
                    onBlur={() => handleBlur('name')}
                    autoFocus
                />
            ) : (
                <p onDoubleClick={() => handleDoubleClick('name')}>{person.name}</p>
            )}

            {isEditingSurname ? (
                <input
                    type="text"
                    value={editedSurname}
                    onChange={(e) => handleChange('surname', e)}
                    onBlur={() => handleBlur('surname')}
                />
            ) : (
                <p onDoubleClick={() => handleDoubleClick('surname')}>{person.surname}</p>
            )}

            {isEditingPhone ? (
                <input
                    type="text"
                    value={editedPhone}
                    onChange={(e) => handleChange('phone', e)}
                    onBlur={() => handleBlur('phone')}
                />
            ) : (
                <p onDoubleClick={() => handleDoubleClick('phone')}>{person.phone}</p>
            )}

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
