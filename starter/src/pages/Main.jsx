import React from 'react';
import { Link } from 'react-router-dom';
import { TfiWrite } from 'react-icons/tfi';
import { IoEarthOutline } from 'react-icons/io5';

export default function Main() {
  return (
    <div className="container">
      <div className="box">
        <div className="header">
          <h1>참가 유형을 선택하세요</h1>
        </div>

        <div className="choose_container">
          <Link to="/Register" className="pm_enroll">
            <TfiWrite className="icon"/>
                <div className="choice-title">프로젝트팀 등록하기</div>
                <div className="choice_expl">프로젝트를 등록 후 팀원에게 알려주세요</div>
           </Link>
          <Link to="/Home" className="participate">
            <IoEarthOutline className="icon" />
            <div className="choice-title">프로젝트팀 참여하기</div>
            <div className="choice_expl">프로젝트를 검색 후 팀에 합류하세요</div>
          </Link>
        </div>
      </div>

      <style>
        {`
          body {
            background-color: black;
          }
          .container {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 600px;
          }

          .box {
            width: 750px;
            height: 80%;
            background-color: #2A2A2A;
            border-radius: 20px;
          }

          .header {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 60px 100px 40px 100px;
          }

          .header h1 {
            color: white;
            font-size: 27px;
            text-align: center;
            font-weight: 700;
          }

          .choose_container {
            display: flex;
            justify-content: space-between;
            margin: 0 80px 60px 80px;
          }

          .pm_enroll,
          .participate {
            flex-basis: 48%;
            height: 100%;
            background-color: gray;
            border: 3px solid #BABABA;
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
            background-color: transparent;
            flex-direction: column;
            padding: 35px 55px;
          }

          .pm_enroll:hover,
          .participate:hover {
            border-color: #38FF6B;
            background-color: #303D2F;
            color: #38FF6B;
          }

          .icon {
            font-size: 50px; 
            margin-bottom: 40px;
          }

          .choice-title{
            font-size: 18px;
            margin-bottom: 40px;
          }

          .choice_expl{
            font-size: 14px;
            padding: 0 16px;
            text-align: center;
          }
        `}
      </style>
    </div>
  );
}
