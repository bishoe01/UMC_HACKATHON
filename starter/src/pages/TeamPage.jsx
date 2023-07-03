import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../apis/axios";
import { JWT } from "../apis/token";

import { Link } from "react-router-dom";

export default function TeamPage() {
  const { team } = useParams();
  const [tools, setTools] = useState(["Discord", "Slack", "Kakao", "Notion", "Github"]);
  const [category, setCategory] = useState("FrontEnd", "BackEnd");
  const [FrontEnd, setFrontEnd] = useState({
    Framework: ["React", "Vue", "Angular", "Svelte", "Next"],
    "CSS Framework": ["Tailwind", "Bootstrap", "Material UI", "Ant Design", "Chakra UI"],
    "Package Manager": ["NPM", "Yarn", "Pnpm", "Bower", "Composer"],
  });
  const [BackEnd, setBackEnd] = useState({
    Framework: ["Express", "Django", "Spring", "Laravel", "Flask"],
    Database: ["MySQL", "MongoDB", "MariaDB", "PostgreSQL", "Redis"],
    Editor: ["VSCode", "Vim", "Sublime", "Atom", "IntelliJ"],
    API: ["REST", "GraphQL", "gRPC", "SOAP", "Falcor"],
    Cloud: ["AWS", "GCP", "Azure", "Firebase", "Heroku"],
    Language: ["JavaScript", "Python", "Java", "PHP", "C++"],
    DBtool: ["MySQL Workbench", "MongoDB Compass", "pgAdmin", "Redis Desktop Manager", "DBeaver"],
    Repository: ["Github", "Gitlab", "Bitbucket", "AWS CodeCommit", "Azure Repos"],
  });
  useEffect(() => {
    // api
    //   .get(`/vote`, {
    //     body: {
    //       board_id: team,
    //     },
    //     headers: {
    //       "x-access-token": JWT,
    //     },
    //   })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    api
      .get("/board")
      .then((response) => {
        // setData(response.data);
        console.log(response.data.filter((id) => console.log(id.id === 3)));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [user, setUser] = useState(["kim", "lee", "park", "choi", "jung"]);

  return (
    <div className="mx-auto flex flex-col bg-gray w-[85%] h-[1200px] rounded-xl mt-10 gap-10 py-5">
      <div className="flex justify-between items-center w-full px-4 ">
        <img className="w-[200px]" src="/images/logo.png" alt="" />
        <div className="flex items-center text-white p-2 rounded-xl gap-2 px-8 self-end">
          <img className="w-[35px]" src={`/images/Kakao.png`} alt="" />
          {user.map((user, index) => {
            return (
              <h1 key={user} className="text-xl font-extrabold px-2">
                @{user}
              </h1>
            );
          })}
        </div>
      </div>

      <h1 className="text-4xl text-primary font-bold text-center">{team}</h1>
      <div className="flex gap-4 cursor-pointer px-4 justify-around">
        {tools.map((tool, index) => {
          return (
            <button key={tool} className="flex items-center border-[4px] border-lgray text-white px-4 p-2 rounded-xl gap-2">
              <img className="w-[35px]" src={`/images/${tool}.png`} alt="" />
              <h1 className="text-xl font-extrabold">{tool}</h1>
            </button>
          );
        })}
      </div>

      <div className="w-full h-[2px] bg-lgray"></div>
      <div className="px-4 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-primary text-3xl text-center font-bold">FRONTEND</h1>
        <div className="grid grid-cols-3 justify-between gap-4">
          {Object.keys(FrontEnd).map((tool, index) => {
            return (
              <div key={tool} className="flex flex-col gap-4 px-8 justify-center">
                <h1 className="text-2xl font-bold text-emphasize">{tool}</h1>
                <button className="w-fit text-xl border-2 border-lgray p-4 px-8 rounded-xl text-white">{FrontEnd[tool][0]}</button>
              </div>
            );
          })}
        </div>
        <button className="bg-white p-4 text-xl font-bold w-1/3 rounded-xl bg-gradient-to-r  from-[#41FF76] to-[#94FF41] ">FrontEnd 결과 보기</button>
      </div>

      <div className="w-full h-[2px] p-[0.5px] bg-lgray"></div>
      <div className="px-4 flex flex-col gap-8 justify-center items-center">
        <h1 className="text-3xl font-bold text-primary text-center">BACKEND</h1>
        <div className="grid grid-cols-3 justify-between gap-4">
          {Object.keys(BackEnd).map((tool, index) => {
            return (
              <div key={tool} className="flex flex-col gap-4 px-8 justify-center">
                <h1 className="text-2xl font-bold text-emphasize">{tool}</h1>
                <button className="w-fit text-xl border-2 border-lgray p-4 px-8 rounded-xl text-white">{BackEnd[tool][0]}</button>
              </div>
            );
          })}
        </div>
      </div>
      <button className="bg-white p-4 text-xl font-bold w-1/3 rounded-xl bg-gradient-to-r  from-[#41FF76] to-[#94FF41] ">BackEnd 결과 보기</button>
    </div>
  );
}
