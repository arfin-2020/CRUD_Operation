import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Home = () => {
    const [posts, setPosts] = useState([]);
    const [visible, setVisible] = useState(10);
    
    
    const loadPosts = async () => {
        const result = await axios.get(`http://localhost:3000/posts`);
        setPosts(result.data.reverse());
    };
    const loadMore = () => {
        setVisible(visible + 10);
        loadPosts();
    };

    useEffect(() => {
        loadPosts();
    }, []);

    const deletehandler = async (id) => {
        await axios.delete(`http://localhost:3000/posts/${id}`);
        loadPosts();
    }

    const renderFunctions = (post, index) => {
        return (
            <ul className="list-group">
                <li className="list-group-item">post Id {post.id}</li>
                <li className="list-group-item"> <span style={{ color: "#6610f2", fontSize: "20px", fontWeight: "bold" }}>Post Title :</span> {post.title}</li>
                <li className="list-group-item"> <span style={{ color: "#0d6efd", fontSize: "20px", fontWeight: "bold" }}>Post Body :</span> {post.body}</li>
                <Link to={`/post/view/${post.id}`} class="btn btn-primary mb-2">
                    View
                </Link>
                <Link to={`/post/update/${post.id}`} class="btn btn-outline-success mb-2">
                    Update
                </Link>
                <Link onClick={() => deletehandler(post.id)} class="btn btn-danger ms-2">Delete</Link>
                
                
            </ul>
             
        );
    };

    return (
        <div className="container">
            <div className="shadow w-75 py-5 mb-5">
                {posts.slice(0, visible).map(renderFunctions)}
                {visible < posts.length && (
                    <button className="btn btn-primary mt-5" onClick={loadMore}>
                        Load 10 More
                    </button>
                   
                )}
                
            </div>
        </div>
    );
};

export default Home;
