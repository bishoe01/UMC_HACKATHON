import React from "react";
import api from "../apis/axios";

export default function Vote() {
  const frontDatas = [
    ["Framework", ["React", "Vue", "Next", "Angular", "기타"]],
    ["CSSFramework", ["tailwind", "bootstrap", "material-ui", "chakra-ui", "기타"]],
    ["PackageManager", ["npm", "yarn", "pnpm", "bower", "기타"]],
  ];
  const backDatas = [
    ["Framework", ["Node.js", "SpringBoot", "Django", "Laravel", "기타"]],
    ["DB", ["Mysql", "MongoDB", "MariaDB", "Oracle", "기타"]],
    ["DBTool", ["QuickDBD", "AqueryTool", "Draw.io", "SqlDBM", "기타"]],
    ["APISpecification", ["swagger", "postman", "gitbook", "excel", "기타"]],
    ["RemoteRepository", ["github", "gitlab", "bitbucket", "기타"]],
    ["Editor", ["intelliJ", "vscode", "eclipse", "기타"]],
    ["Clouding", ["aws", "googleCloud", "naverCloud", "기타"]],
  ];

  const temp = "ㄹ";
  const title = temp === "frontend" ? "FrontEnd" : "BackEnd";
  const datas = temp === "frontend" ? frontDatas : backDatas;
  const sendDatas = [];
  for (let i = 0; i < datas.length; i++) {
    sendDatas.push([datas[i][0], ""]);
  }
  const onClick = (e) => {
    sendDatas.filter((name) => name[0] === e.target.name)[0][1] = e.target.id.includes("기타") ? "기타" : e.target.id;
  };
  const onSelected = () => {
    console.log(sendDatas);
    alert(sendDatas);
  };
  const OptionTitle = ({ title }) => {
    return <div className="m-4 font-extrabold mt-20">{title}</div>;
  };
  const SelectOption = ({ option, title }) => {
    const options = option === "기타" ? `${title}기타` : option;
    return (
      <div className="mx-3 flex items-center">
        <input type="radio" onClick={onClick} id={options} name={title} />
        <label htmlFor={options} className="text-2xl	mx-2 cursor-pointer">
          {option}
        </label>
      </div>
    );
  };

  return (
    <div>
      <img className="mt-10" src="images/logo.png" alt="none" />
      <div className="text-primary flex justify-center items-center text-4xl flex-col bg-gray rounded-3xl p-10 my-10">
        {title}
        {datas.map((data, index) => {
          return (
            <div key={`outer${index}`} className="w-2/3">
              <OptionTitle key={`optionTitle${index}`} title={data[0]} />
              <div
                key={`container${index}`}
                className="border-2 border-lgray rounded-3xl bg-input text-lgray hover:border-outlined hover:text-primary hover:bg-inputbg"
              >
                <div key={`optionContainer${index}`} className="m-5 border-3 flex justify-center">
                  {data[1].map((option, num) => {
                    return <SelectOption key={`option${num}`} option={option} title={data[0]} />;
                  })}
                </div>
              </div>
            </div>
          );
        })}
        <button className="text-2xl text-black font-extrabold  mt-20 rounded-3xl px-10 py-5 bg-gradient-to-r  from-[#41FF76] to-[#94FF41]" onClick={onSelected}>
          선택 완료
        </button>
      </div>
    </div>
  );
}
