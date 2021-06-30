import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const View = () => {
    const { id } = useParams();

    const [posts, setposts] = useState({})
    const [comment, setComment] = useState({})
    useEffect(() => {
        loadposts()
    }, [])
    useEffect(() => {
        loadComment()
    }, [])

    const loadposts = async () => {
        const result = await axios.get(`http://localhost:3000/posts/${id}`)
        setposts(result.data)
    }
    const loadComment = async () => {
        const data = await axios.get(`http://localhost:3000/comments/${id}`)
        setComment(data.data)
    }
    const { body, title } = posts;
    return (
        <div className="container">
            <Link className="btn btn-success mt-2" to='/'>Back Home</Link>
            <h1 className='display-4'>Post Id: {id}</h1><hr />
            <div className="shadow w-50 py-5 container">
                <ul className="list-group">
                    <li className="list-group-item"> <span style={{ color: "#6610f2", fontSize: "20px", fontWeight: "bold" }}>Body :</span> {body}</li>
                    <li className="list-group-item"> <span style={{ color: "#0d6efd", fontSize: "20px", fontWeight: "bold" }}>Title :</span> {title}</li>
                    <li className="list-group-item"> <span style={{ color: "#0d6efd", fontSize: "20px", fontWeight: "bold" }}>Comment :</span> {comment.body}</li>
                </ul>
            </div>
        </div>
    );
};

export default View;