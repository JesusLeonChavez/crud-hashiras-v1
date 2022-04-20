import React, { useState, useEffect } from "react";

//Style
import "./CrudForm.css"

const initialForm = {
    name: "",
    typeBreathing: "",
    id: null
}

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
    const [form, setForm] = useState(initialForm)

    useEffect(() => {
        if(dataToEdit){
            setForm(dataToEdit);
        } else{
            setForm(initialForm);
        }
    }, [dataToEdit])

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.name || !form.typeBreathing){
            alert("Incomplete data");
            return;
        }

        if(form.id === null){
            createData(form);
        } else{
            updateData(form);
        }

        handleReset();
    }

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    }

    return (
        <div>
            <h3 className="crudForm-title">{dataToEdit ? "Edit" : "Add"}</h3>
            <form 
                onSubmit={handleSubmit}
            >
                <input
                    className="input-name" 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    onChange={handleChange} 
                    value={form.name}
                />
                <input 
                    className="input-breathing"
                    type="text" 
                    name="typeBreathing" 
                    placeholder="Breathing" 
                    onChange={handleChange} 
                    value={form.typeBreathing}
                />
                <input type="submit" value="Send"/>
                <input type="reset" value="Reset" onClick={handleReset}/>
            </form>
        </div>
    )
}

export default CrudForm