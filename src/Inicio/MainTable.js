import React, { useState, useEffect } from 'react';
import { getCiudad } from '../services/firebase';
import './MainTable.css';

function MainTable(props) {
    const [ciudad, setCiudad] = useState([]);
    useEffect(()=>{
        getCiudad(setCiudad)
    },[]) 

    return  (
        <div className="img-playa vh-100">
            <h1 className="text-center py-5 text-decoration-underline">Some countries</h1>
        <div  className="container vh-100 py-5">
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOMBRE</th>
                        <th>PAIS</th>
                        <th>POBLACION</th>
                        <th>PRESIDENTE</th>  
 
                    </tr>
                </thead>
                <tbody>
 

                    {ciudad.map((dato, index) => ( 
                    <tr >
                        <td>{index+1}</td>
                        <td>{dato.nombre}</td> 
                        <td>{dato.pais}</td>
                        <td>{dato.poblacion}</td>
                        <td>{dato.presidente}</td>
                    

                    </tr>
                    ))}
                </tbody> 
                </table>
        </div>
        </div>
    );
}

export default MainTable;