import React from 'react'

//Components
import CrudTalbeRow from '../CrudTableRow/CrudTableRow'

//Styles
import "./CrudTable.css"

const CrudTable = ({ data, setDataToEdit, deleteData }) => {
    return (
        <div>
            <h3 className="crudTable-title">Data Tables</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Breathing</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan="3">No data</td>
                        </tr>
                        ) : (
                            data.map(el => (
                                <CrudTalbeRow 
                                    key={el.id} 
                                    el={el}
                                    setDataToEdit={setDataToEdit}
                                    deleteData={deleteData}
                                />
                        ))
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable