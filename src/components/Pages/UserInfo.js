import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const UserInfo = () => {
    const {id} = useParams()
    const [user, setUser] = useState({})
    useEffect(() => {
        userLoad()
    },[])
    const userLoad = async() =>{
        const result = await axios.get(`http://localhost:3000/users/${id}`)
        setUser(result.data)
    }
    const { name, username, email, phone, website } = user;
    return (
        <div className="container">
        <Link className="btn btn-success mt-2" to='/userDetails'>Back</Link>
            <h1 className="display-4">User Id {id}</h1><hr/>
            <div className = "shadow w-50 py-5 container">
                <ul className="list-group">
                    <li className="list-group-item"> <span style={{color:"#D62AD0" , fontSize: "20px", fontWeight: "bold" }}>Name: </span> {name}</li>
                    <li className="list-group-item"> <span style={{color:"#D62AD0" , fontSize: "20px", fontWeight: "bold" }}>User Name: </span> {username}</li>
                    <li className="list-group-item"> <span style={{color:"#D62AD0" , fontSize: "20px", fontWeight: "bold" }}>Email: </span> {email}</li>
                    <li className="list-group-item"> <span style={{color:"#D62AD0" , fontSize: "20px", fontWeight: "bold" }}>Phone no: </span> {phone}</li>
                    <li className="list-group-item"> <span style={{color:"#D62AD0" , fontSize: "20px", fontWeight: "bold" }}>Website: </span> {website}</li>
                </ul>
            </div>
        </div>
    );
};

export default UserInfo;