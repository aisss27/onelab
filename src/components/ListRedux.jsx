import React, { useEffect, useState } from "react";
import { Person } from "./Person";
import {useDispatch, useSelector} from "react-redux";
import {edit, remove} from "../redux/slices/listSlice";


export const ListRedux = () => {
    const items = useSelector(state => state.list.data);
    const dispatch = useDispatch();


    //edit


    //delete
    const onDeleteHandler = (id) => {
        dispatch(remove({id}))
    };



    return (
        <div>
            {items.map((person) => (
                <Person
                    key={person.id}
                    id={person.id}
                    person={person}
                    onDelete={() => onDeleteHandler(person.id)}
                />
            ))}
        </div>
    );
};
