import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

export default function TeamPage() {
    const { team } = useParams();
    const [tools, setTools] = useState(['Discord', 'Slack', 'Kakao', 'Notion', 'Github']);
    const [category, setCategory] = useState('FrontEnd', "BackEnd");
    const [FrontEnd, setFrontEnd] = useState({
        'Framework': ['React', 'Vue', 'Angular', 'Svelte', 'Next'],
        'CSS Framework': ['Tailwind', 'Bootstrap', 'Material UI', 'Ant Design', 'Chakra UI'],
        'Package Manager': ['NPM', 'Yarn', 'Pnpm', 'Bower', 'Composer'],
    });
    const [BackEnd, setBackEnd] = useState({
        'Framework': ['Express', 'Django', 'Spring', 'Laravel', 'Flask'],
        'Database': ['MySQL', 'MongoDB', 'MariaDB', 'PostgreSQL', 'Redis'],
        'Editor': ['VSCode', 'Vim', 'Sublime', 'Atom', 'IntelliJ'],
        'API': ['REST', 'GraphQL', 'gRPC', 'SOAP', 'Falcor'],
        'Cloud': ['AWS', 'GCP', 'Azure', 'Firebase', 'Heroku'],
        'Language': ['JavaScript', 'Python', 'Java', 'PHP', 'C++'],
        'DBtool': ['MySQL Workbench', 'MongoDB Compass', 'pgAdmin', 'Redis Desktop Manager', 'DBeaver'],
        'Repository': ['Github', 'Gitlab', 'Bitbucket', 'AWS CodeCommit', 'Azure Repos'],
    });

    return (
        <div className='mx-auto flex flex-col bg-gray w-[85%] h-[1200px] rounded-xl mt-10 gap-10 py-10'>
            <h1 className='text-4xl text-primary font-bold text-center'>{team}</h1>
            <div className='flex gap-4 cursor-pointer px-4 justify-around'>
                {tools.map((tool, index) => {
                    return (
                        <a href='www' key={tool} className='flex items-center border-[4px] border-lgray text-white px-4 p-2 rounded-xl gap-2'>
                            <img className='w-[35px]' src={`/images/${tool}.png`} alt="" />
                            <h1 className='text-xl font-extrabold'>{tool}</h1>
                        </a>
                    )
                })}
            </div>
            <div className='w-full h-[2px] bg-lgray'></div>
            <div className='px-4 flex flex-col gap-4'>
                <h1 className='text-primary text-3xl font-bold'>FRONTEND</h1>
                <div className='grid grid-cols-3 gap-4' >
                    {Object.keys(FrontEnd).map((tool, index) => {
                        return (
                            <div key={tool} className='flex flex-col gap-4 px-8'>
                                <h1 className='text-2xl font-bold text-emphasize'>{tool}</h1>
                                <button className='w-fit text-xl border-2 border-lgray p-4 px-8 rounded-xl text-white'>
                                    {FrontEnd[tool][0]}
                                </button>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='w-full h-[2px] p-[0.5px] bg-lgray my-5'></div>
            <div className='px-4 flex flex-col gap-8'>
                <h1 className='text-3xl font-bold text-primary'>BACKEND</h1>
                <div className='grid grid-cols-3 gap-8' >
                    {Object.keys(BackEnd).map((tool, index) => {
                        return (
                            <div key={tool} className='flex flex-col gap-4 px-8 justify-center'>
                                <h1 className='text-2xl font-bold text-emphasize'>{tool}</h1>
                                <button className='w-fit text-xl border-2 border-lgray p-4 px-8 rounded-xl text-white'>{BackEnd[tool][0]}</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

