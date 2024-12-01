import React from "react";
import { useNavigate } from "react-router-dom";
import { deletePost } from "../services/api";
import styled from "styled-components";


const PostList = ({ posts }) => {
  const navigate = useNavigate();

const handleDelete = async (postId) => {
    const success = await deletePost(postId);
        if (success) alert("Post deleted!");
        else alert("Failed to delete post.");
  };


    const PostStyle=styled.div`

        .post-list{
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin-bottom: 30px;
            width: 80%;
            justify-self: center;
        }
        h2{
            color: #474546;
            margin-bottom: 20px;
        }
        .btn-v{
                border: none;
                background-color: #002fffd5;
                color: white;
                border-radius: 10px;
                padding: 8px 16px;

        }
        .btn-v:hover{
            background-color: #372dc9;
        }
        .btn-d{
                border: none;
                background-color: #ee0101d5;
                color: white;
                border-radius: 10px;
                padding: 8px 16px;
                margin-left: 10px;
        }
        .btn-d:hover{
            background-color: #ff0303;
        }

    `;


  return (
    <PostStyle>
        <>
    <div className="post-list">
      <h2>Posts</h2>
      <table className="table table-hover">
        <thead>
          <tr className="table-tr">
            <th scope="col">Title</th>
            <th scope="col" >Actions</th>
          </tr>
        </thead>
        <tbody>
         {posts.map((post)=>(
           <tr key={post.id}>
            <td> {post.title}</td>
            <td> <button className="btn-v" onClick={() => navigate(`/post/${post.id}`)} >View</button>
            <button className="btn-d" onClick={()=>handleDelete(post.id)}>Delete</button>
            </td>
           </tr>
         ))}
        </tbody>
      </table>

    </div>
    </>
    </PostStyle>
  );
};

export default PostList;
