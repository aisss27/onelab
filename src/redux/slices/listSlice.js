import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const initialState = {
    data: [],
};

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        add: (state, action) => {
            const newItem = {
                id: uuid(),
                name: action.payload.name,
                surname: action.payload.surname,
                phone: action.payload.phone,
            };

            return {
                ...state,
                data: [...state.data, newItem],
            };
        },
        remove: (state, action) => {
            return {
                ...state,
                data: state.data.filter((item) => item.id !== action.payload.id),
            };
        },
        edit: (state, action) => {
            const { id, updates } = action.payload;
            return {
                ...state,
                data: state.data.map((item) => (item.id === id ? { ...item, ...updates } : item)),
            };
        },
    },
});

// Action creators are generated for each case reducer function
export const { add, remove, edit } = listSlice.actions;

export default listSlice.reducer;
