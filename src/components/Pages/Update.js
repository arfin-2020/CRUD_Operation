import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams()
    const [post, setpost] = useState({
        title: "",
        body: ""
    })
    const history = useHistory();
    const handleSubmit = async(e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3000/posts/${id}`,post)
            history.push('/')
    }
    const onInputChange = (e) => {
        setpost({ ...post, [e.target.name]: e.target.value })
    }
    const update = (e) => {
        alert('Post Updated Successfull.')
    }
    useEffect(() => {
        loadPost()
    }, [])
    const loadPost =  async () =>{
        const result = await axios.get(`http://localhost:3000/posts/${id}`)
        setpost(result.data)
    }
    const { title, body } = post;
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h1 className="text-center mb-4">update post</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg "
                            placeholder="Enter your title"
                            name="title"
                            value={title}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className="form-control form-control-lg "
                            placeholder="Enter your Body"
                            name="body"
                            value={body}
                            onChange={(e) => onInputChange(e)}
                        />
                    </div>
                    <button onClick={update} className="btn btn-success">Update post</button>
                </form>
            </div>
        </div>
    );
};

export default Update;