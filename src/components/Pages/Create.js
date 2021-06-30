import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [post, setpost] = useState({
        title: "",
        body: "",
    })

    const {title,body} = post;
    const history = useHistory()
    const handleSubmit = async(e) =>{
        e.preventDefault();
        await axios.post(`http://localhost:3000/posts`,post)
        history.push('/')
    }
    const InputData = (e) =>{
        setpost({...post,[e.target.name]:e.target.value});
    }
        const creatPost = () =>{
                alert("Your post Created successful.")
        }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h1 className="text-center mb-4">Create a post</h1>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className ="form-control form-control-lg"
                            placeholder="Enter your title"
                            name="title"
                            value={title}
                            onChange = {(e) =>InputData(e)}
                        />
                    </div>
                    <div className="form-group mb-3">
                        <input
                            type="text"
                            className ="form-control form-control-lg"
                            placeholder="Enter your body"
                            name="body"
                            value={body}
                            onChange = {(e) =>InputData(e)}
                        />
                    </div>
                    <button onClick={creatPost} className="btn btn-success">Create post</button>
                </form>
            </div>
        </div>
    );
};

export default Create;