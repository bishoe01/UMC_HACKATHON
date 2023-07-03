import './css/Register.css'
import styled from 'styled-components';
import { useState } from 'react';
import api from "../apis/axios"
import axios from '../apis/axios';
import { Link } from 'react-router-dom';
import TeamPage from './TeamPage';

const BgDiv = styled.div`
    border-radius: 50px;
    background-color: #2A2A2A;
    width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 30px;
    margin-bottom: 100px;
    justify-content : center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1250px;

`
const Label = styled.h1`
    color: #14AE81;
    font-family:  'Nanum Barun Gothic';
    font-weight: bold;
    font-size: 20px;

`
const Input = styled.input`
    width: 500px;
    height: 50px;
    border: 1px solid #BABABA;
    border-radius: 10px;
    border-color: ${props => (props.filled ? '#64FF4E' : '#BABABA')};
    color: ${props => (props.filled ? '#64FF4E' : '#BABABA')};
    margin-top: 12px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 10px;
    background-color:${props => (props.filled ? '#303D2F' : '#272727')};
`
const InputDiv = styled.div`
    margin-top:30px;
`
const Button = styled.button`
    margin-top: 30px;
    margin-bottom: 50px;
    width: 200px;
    color: black;
    height: 65px;
    font-weight: bold;
    font-size: 20px;
    border-radius: 16px;
`
const Register = () => {
    const [teamInfo, setTeamInfo] = useState({
        'name': '',
        'desc': '',
        'password': '',
        'notion': '',
        'slack': '',
        'discord':'',
        'git': '',
        'kakao':''
    })

    const submitRegister = () => {
        axios.post(
            '/board',
             {"title": teamInfo.name, "content": teamInfo.desc, "password": teamInfo.password, "link": [{"linkName": "notion", "link": teamInfo.notion},{"linkName": "slack", "link": teamInfo.slack}, {"linkName": "discord", "link": teamInfo.discord}, {"linkName": "git", "link":teamInfo.git}, {"linkName": "kakao","link": teamInfo.kakao}]},
            {}
        ).then((res)=>{
            console.log(res);
            

        })
        .catch((err) =>{
            console.log(err);
        })
    }

    const handleChange = (e) => {
        const id = e.target.id;
        id
            ? setTeamInfo({ ...teamInfo, [id]: e.target.value })
            : console.log("no id");
    };
    const labelList = ['팀 이름', '한 줄 소개', '비밀번호', '노션', '슬랙', '디스코드','깃허브','카카오톡']
    const placeHolderList = ['팀이름을 입력해주세요', '한줄 소개를 입력해주세요', '입장하기 위한 비밀번호를 입력해주세요', 'https://www.notion.so/...', 'https://www.notion.so/...', 'https://www.notion.so/...', 'https://www.notion.so/...', 'https://www.notion.so/...']
    return(
        <div>
            <img className="mt-10" src="/images/logo.png" alt="none" />
            <BgDiv>
                <Label style={{marginTop:"100px", fontSize: "40px"}}>프로젝트 팀 등록</Label>
                
            {Object.keys(teamInfo).map((info, index) => {
                return (
                    <InputDiv key={index}>
                        <Label>{labelList[index]}</Label>
                        <Input
                type="text"
                id={info}
                onChange={handleChange}
                placeholder={placeHolderList[index]}
                value={teamInfo[info]}
                filled={teamInfo[info] !== ''}
              />
                    </InputDiv>
                )
            })}
           <Link to="/team/:team">
                <Button className='bg-gradient-to-r  from-[#41FF76] to-[#94FF41]' onClick={submitRegister}>선택 완료</Button>
            </Link>
            </BgDiv>
        </div>
    )
}
export default Register;