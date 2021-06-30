import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
const UserDetails = () => {
    const [users,setusers] = useState([])

    useEffect(() =>{
        loadUsers();
    },[])
    const loadUsers = async() =>{
        const result = await axios.get(`http://localhost:3000/users`) 
        setusers(result.data)
    }
    return (
        <div className="py-4">
            <h1>This is user Profile</h1>
            <table className ="table table-dark table-hover container">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Website</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index)=>(
                            <tr>
                                <th scope="row">{index+1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                                <td>
                                <Link to={`/userinfo/${user.id}`} class="btn btn-primary ms-2">User Info</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserDetails;