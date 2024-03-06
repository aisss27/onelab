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

    const repo = {
        updateListAndStorage(updatedList) {
            const promise = new Promise((resolve, rejected) => {
                try {
                    setData(updatedList);
                    sessionStorage.setItem('list', JSON.stringify(updatedList));
                    resolve();
                } catch (error) {
                    rejected(error)
                }
            })
            return promise;
        }
    }


    //edit
    const onEditHandler = (index, editedContent) => {
        const updatedList = [...data];
        updatedList[index] = { ...updatedList[index],name: editedContent };
        // updateListAndStorage(updatedList);
        repo.updateListAndStorage(updatedList)
        .then(() => alert('Edited name: ' + editedContent))
            .catch(error => alert('Failed' + error))
    };

    //delete
    const onDeleteHandler = (index) => {
        const updatedList = data.filter((_, i) => i !== index);
        // updateListAndStorage(updatedList);
        repo.updateListAndStorage(updatedList)
            .then(() => alert('User Deleted'))
            .catch(error => alert('Not deleted from storage ' + error))
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
