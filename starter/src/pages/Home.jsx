import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <div className="image-container">
          <img src="/images/logo.png" alt="project logo" />
        </div>
        <div className="search-container">
          <div className="input-group">
            <div className="search-icon">
              <AiOutlineSearch className="text-white" />
            </div>
            <input type="text" placeholder="팀 이름을 입력해주세요." />
          </div>
        </div>
      </div>

      <style>
        {`
          body {
            background-color: black;
          }
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }

          .header {
            margin-top: 100px;
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          .image-container {
            margin-bottom: 30px;
          }

          .search-container {
            display: flex;
            align-items: center;
          }

          .input-group {
            display: flex;
            align-items: center;
            border: 3px solid #14AE81;
            border-radius: 20px;
            padding: 10px;
          }

          .search-icon {
            margin-right: 10px;
          }

          .search-container input[type="text"] {
            width: 500px;
            outline: none;
            background-color: transparent;
            color: white;
            border: none;
          }

          .grid {
            color: white;
          }
        `}
      </style>
      <div className="grid">grid1</div>
      <div className="grid">grid2</div>
      <div className="grid">grid3</div>
      <div className="grid">grid4</div>
    </div>
  );
}
