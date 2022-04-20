import React from 'react'

//Components
import CrudForm from './CrudForm/CrudForm';
import CrudTable from './CrudTable/CrudTable';

//Style
import "./CrudApp.css"

//Hooks
import { useState } from "react";

//Data
import initialDB from "../data/hashiras.json"; 

const CrudApp = () => {
    const [db, setDb] = useState(initialDB);
    const [dataToEdit, setDataToEdit] = useState(null);

    const createData = (data) => {
        data.id = Date.now();
        setDb([...db, data]);
    };

    const updateData = (data) => {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
    };

    const deleteData = (id) => {
        let isDelete = window.confirm(
            `Are you sure you want to delete the record with id '${id}}'?`
        )

        if(isDelete){
            let newData = db.filter((el) => el.id !== id);
            setDb(newData);
        } else{
            return;
        }
    };

    return (
        <div className="CrudApp">
            <h1 className="CrudApp-title">CRUD HASHIRAS APP</h1>
            <article className="grid-1-2">
                <CrudForm 
                    createData={createData}
                    updateData={updateData}
                    dataToEdit={dataToEdit}
                    setDataToEdit={setDataToEdit}
                />
                <CrudTable 
                    data={db}
                    setDataToEdit={setDataToEdit}
                    deleteData={deleteData}
                />
            </article>
        </div>
    )
}

export default CrudApp