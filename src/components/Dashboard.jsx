import React, { useEffect, useState } from "react";
import { fetchUserSummary } from "../services/api";
import PostList from "./PostList";
import Summary from "./Summary";
import styled from "styled-components";

const Dashboard = () => {
  const [data, setData] = useState(null);


  useEffect(() => {
    const loadData = async () => {
      const response = await fetchUserSummary(9); 
      setData(response);
    };
    loadData();
  }, []);

  if (!data) return <div>Loading...</div>;


  const DashStyle=styled.div`

      h3{
        margin-top: 20px;
        text-align: center;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 40px;
       font-weight: bolder;
      }

  `;
  const handleUserChange = (event) => {
    setSelectedUser(Number(event.target.value));
  };

  return (
    <DashStyle>
    <div className="dash">
      <h3>User Dashboard</h3>

  

      <Summary summary={data.summary} />
      <PostList posts={data.posts} />
    </div>
    </DashStyle>
  );
};

export default Dashboard;



