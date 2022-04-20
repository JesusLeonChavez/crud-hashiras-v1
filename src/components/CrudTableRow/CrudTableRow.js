import React from 'react'

//Style
import "./CrudTableRow.css"

const CrudTalbeRow = ({ el, setDataToEdit, deleteData }) => {
    let {name, typeBreathing, id} = el;

    return (
        <tr>
            <td>{name}</td>
            <td>{typeBreathing}</td>
            <td>
                <button 
                    className="button-edit"
                    onClick={() => setDataToEdit(el)}
                >EDIT</button>
                <button
                    className="button-delete" 
                    onClick={() => deleteData(id)}
                >DELETE</button>
            </td>
        </tr>
    )
}

export default CrudTalbeRow