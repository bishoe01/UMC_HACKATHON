import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import api from "../apis/axios";
import { Link } from 'react-router-dom';

export default function Home() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async () => {
    try {
      const response = await api.get(`/board/search?name=${searchValue}`);
      setFiltered(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    api.get('/board')
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

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
            <input
              type="text"
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="팀 이름을 입력해주세요."
            />
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

          .input-group:hover{
            background-color: #303D2F;
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

          .grid-container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 20px;
            margin-top: 30px;
            margin-bottom: 100px;
          }

          .grid {
            color: white;
            background-color: #2A2A2A;
            border-radius: 10px;
            padding: 30px;
            border: 3px solid #14AE81;
            border-radius: 20px;
            width: 260px;
            height: 200px;
          }
          
          .grid h3{
            font-size: 25px;
            font-weight: 700;
          }

          .grid p{
            font-size: 17px;
            font-weight: 400;
            color: #B4B1B1;
          }

          .grid:hover{
            background-color: #303D2F;
          }
        `}
      </style>

      <div className="grid-container">
        {(filtered.length > 0 ? filtered : data).map((item, index) => (
          <Link to={`/signup/${item.id}`} key={index}>
            <div className="grid">
              <h3>{item.board_name}</h3>
              <p>{item.explanation}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
