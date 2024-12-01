import React from "react";
import styled from 'styled-components'

const SummaryChart = ({ summary }) => {
  const data = [
    { name: "Posts", count: summary.posts },
    { name: "Comments", count: summary.comments },
    { name: "Todos", count: summary.todos },
  ];


    const SummaryStyle= styled.div`


        h4{
            margin-bottom: 20px;
            color: #474546;
        }

        .summary{
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            margin-bottom: 30px;
            width: 80%;
            justify-self: center;
            margin-top: 50px;

        }

        .summary-items-container{
           
            display: flex;
            justify-content: space-evenly;
            
        }
        .summary-item{
            
            width: 220px;
            text-align: center;
            padding:50px;
            border-radius: 20px;
            font-size: 20px;
            background: #c4c5c5;
            transition: transform 0.2s;

        }
        .summary-item:hover{
            
      transform: translateY(-2px);
  
        }
        p{
      display: block;
      color: #666;
      margin-bottom: 5px;
      font-size: 0.9rem;
    }

    strong{
      display: block;
      color: #2c3e50;
      font-size: 1.8rem;
    }
    `;

  return (
    <SummaryStyle>
    <>
    <div className="summary">
      <h4>User Summary Details</h4>
      <div className="summary-items-container">
      <div className="summary-item">
        <p>Posts <strong>{summary.posts}</strong></p>
      </div>
      <div className="summary-item">
        <p>Comments <strong>{summary.comments}</strong></p>
      </div>
      <div className="summary-item">
        <p>To-Dos<strong>{summary.todos}</strong></p>
      </div>
      </div>
    </div>
    
    </>
    </SummaryStyle>
  );
};

export default SummaryChart;
