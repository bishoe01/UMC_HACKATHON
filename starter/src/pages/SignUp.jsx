import React, { useState } from "react";
import api from "../apis/axios";
import { useParams, useNavigate } from "react-router-dom";

export default function SignUp({}) {
  const [name, setName] = useState("");
  const [pw, setPw] = useState("");
  const [git, setGit] = useState("");
  const [part, setPart] = useState("front");
  const params = useParams();
  const navigate = useNavigate();
  const onSelected = () => {
    api
      .post("/user/signup", {
        name: name,
        password: pw,
        github_id: git,
        part: part,
        board_id: params.id,
      })
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("part", part);
        sessionStorage.setItem("board_id", params.id);
        alert("등록 완료!");
        navigate(`/vote/${part}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const InputTitle = ({ title }) => {
    return <div className="m-4 font-extrabold mt-20">{title}</div>;
  };

  return (
    <div>
      <img className="mt-10" src="/images/logo.png" alt="none" />
      <div className="text-primary flex justify-center items-center text-4xl flex-col bg-gray rounded-3xl p-10 my-10">
        <div className="w-2/3">
          <InputTitle title="이름" />
          <div className="border-2 border-lgray rounded-3xl bg-input text-lgray ">
            <div className="m-5 border-3 flex">
              <div className="mx-3 flex">
                <input
                  className="bg-input text-xl w-max"
                  type="text"
                  placeholder="이름을 입력해주세요."
                  onChange={(e) => setName(e.target.value)}
                  style={{ width: "500px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <InputTitle title="비밀번호" />
          <div className="border-2 border-lgray rounded-3xl bg-input text-lgray ">
            <div className="m-5 border-3 flex">
              <div className="mx-3 flex">
                <input
                  className="bg-input text-xl w-max"
                  type="password"
                  placeholder="비밀번호를 입력해주세요."
                  onChange={(e) => setPw(e.target.value)}
                  style={{ width: "500px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <InputTitle title="Github 아이디" />
          <div className="border-2 border-lgray rounded-3xl bg-input text-lgray ">
            <div className="m-5 border-3 flex">
              <div className="mx-3 flex">
                <input
                  className="bg-input text-xl"
                  type="text"
                  placeholder="Github 아이디를 입력해주세요."
                  onChange={(e) => setGit(e.target.value)}
                  style={{ width: "500px" }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-2/3">
          <InputTitle title="파트 선택" />
          <div className="border-2 border-lgray rounded-3xl bg-input text-lgray ">
            <div className="m-5 border-3 flex">
              <div className="mx-3 flex">
                <select className="bg-input text-xl" onChange={(e) => setPart(e.target.value)}>
                  <option id="front">front</option>
                  <option id="backend">back</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button className="text-2xl text-black font-extrabold  mt-20 rounded-3xl px-10 py-5 bg-gradient-to-r  from-[#41FF76] to-[#94FF41]" onClick={onSelected}>
          선택 완료
        </button>
      </div>
    </div>
  );
}
