import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPost, updatePost } from "../services/api";
import styled from "styled-components";


const DetailStyle=styled.div`
     width: 100%;

    .post-details{
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin: 50px 0px;
            min-width: 70%;
            height: 21em;
            justify-self: center;
    }
    .header{
      display: flex;
    }
    h4{
      margin-left:30px;
    }
    .text{
      margin: 20px 0px;
      justify-self: center;
      min-width: 80%;
      min-height: 10em;
    }
    textarea{
      justify-self: center;
      margin: 5px 60px;
      min-width: 80%;
      min-height: 10em;
    }
    

    .sv-btn{
      border: none;
      background-color: #0dd80dcc;
      padding: 8px 16px;
      color:white;
      border-radius: 10px;
      display: flex;
      justify-self: center;

      &:hover{
        background-color: #00ff00;
      }

    }

    .bck-btn{
      border: none;
      background-color: #202920cc;
      padding: 8px 16px;
      color:white;
      border-radius: 10px;


      &:hover{
        background-color: #202920;
      }
    }

`;


const PostDetails = () => {
  const { id } = useParams();
  const navigate=useNavigate();
  const [post, setPost] = useState(null);
  const [editBody, setEditBody] = useState("");

  useEffect(() => {
    const loadPost = async () => {
      const response = await fetchPost(id);
      setPost(response);
      setEditBody(response.body);
    };
    loadPost();
  }, [id]);

  const handleSave = async () => {
    const success = await updatePost(id, { body: editBody });
    if (success) alert("Post updated!");
    else alert("Failed to update.");
  };

  if (!post) return <div>Loading...</div>;

  return (
    <DetailStyle>
    <div className="post-details">
      <div className="header">
        <button onClick={()=>navigate('/')} className="bck-btn"> ← Back</button>
      <h4>{post?.title}</h4>
      </div>
      <div className="text">
      <textarea value={editBody} onChange={(e) => setEditBody(e.target.value)} />
      </div>
    
        <button onClick={handleSave} className="sv-btn">Save</button>
    </div>
    </DetailStyle>
  );
};

export default PostDetails;
