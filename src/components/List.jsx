import React, { useEffect, useState } from "react";
import { Person } from "./Person";

export const List = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let list = sessionStorage.getItem('list');
        setData(list ? JSON.parse(list) : []);
    }, []);

    const updateListAndStorage = (updatedList) => {
        setData(updatedList);
        sessionStorage.setItem('list', JSON.stringify(updatedList));
    };

    const onDeleteHandler = (index) => {
        const updatedList = data.filter((_, i) => i !== index);
        updateListAndStorage(updatedList);
    };

    const onEditHandler = (index, editedContent) => {
        const updatedList = [...data];
        updatedList[index] = { ...updatedList[index], ...editedContent };
        updateListAndStorage(updatedList);
    };

    return (
        <div>
            {data.map((person, index) => (
                <Person
                    key={index}
                    onDelete={() => onDeleteHandler(index)}
                    onEdit={(editedContent) => onEditHandler(index, editedContent)}
                    person={person}
                />
            ))}
        </div>
    );
};
