'use client'
import { ForwardIcon } from 'lucide-react';
import { queryData } from '@/components/custom/universal-search';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Heading, Search } from 'lucide-react';
import { redirect, usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { GiSelfLove } from 'react-icons/gi';
import { TiTick } from "react-icons/ti";

type Props = {
    // params
    // name?: string;
    // age?: number;
}

const questions = [
    {
        question: 'What is your name?',
        heading: 'Name',
        param: "name",
        options: [],
    },
    {
        question: 'What is your age?',
        heading: 'Age',
        param: "age",
        options: [],
    },
    {
        question: 'What type of cancer do you have?',
        heading: 'Type of Cancer',
        param: "cancer",
        options: ['Breast Cancer', 'Lung Cancer', 'Prostate Cancer', 'Colon Cancer', 'Other'],
    },
    {
        question: 'What is your cancer stage?',
        heading: 'Cancer Stage',
        param: "stage",
        options: ['Stage 0', 'Stage I', 'Stage II', 'Stage III', 'Stage IV'],
    },
    {
        question: 'What is the mutation type (if known)?',
        heading: 'Mutation Type',
        param: "mutation",
        options: ['EGFR', 'KRAS', 'HER2', 'BRAF', 'Other', 'Unknown'],
    },
    {
        question: 'What treatments have you undergone?',
        heading: 'Already Taken Treatments',
        param: "treatments",
        options: ['Chemotherapy', 'Radiation Therapy', 'Immunotherapy', 'Surgery', 'Other'],
    }
];

const variants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};

function SearchCancer({ addSearchParam }: { addSearchParam: (key: string, value: string) => void }) {
    const [query, setQuery] = useState("");

    const items = queryData(query, { cancer: true, mutation: false, treatment: false }, 9);
    const cancers = items.map((item) => item?.item);

    return (
        <div className="rounded-3xl  w-full border-2 border-red-400 bg-white transition-all flex flex-col">
            <div className="w-full bg-white rounded-full flex p-1 border-2 ">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    name=""
                    className="flex-1 bg-transparent text-slate-600 selection:placeholder:open:none py-2 px-4 placeholder:text-grey outline-none"
                    id=""
                    placeholder="Search Cancer ..."
                />
                <button
                    className="px-4 bg-[#DBE2EC] text-slate-400 rounded-full ml-2"
                >
                    Search
                </button>
            </div>
            <div className={cn(" w-full transition-all overflow-hidden p-2 duration-300 ")}>
                <div className="grid grid-cols-3">
                    {
                        cancers.length > 0 ? cancers.map((cancer, index) =>
                            <div key={index} onClick={() => {
                                addSearchParam('cancer', cancer.name);
                            }} className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-200 cursor-pointer">
                                <img src={cancer.image} alt="" className="w-12 h-12 rounded-full" />
                                <div className="flex-col">
                                    <div className="">{cancer.name}</div>
                                    <div className="text-sm">{cancer.organ}</div>
                                </div>
                            </div>
                        ) : <div className="text-center col-span-3 italic my-2">No Results Found</div>
                    }
                </div>
            </div>
        </div>)
}

function SearchTreamtments({ addSearchParam }: { addSearchParam: (key: string, value: string) => void }) {
    const [query, setQuery] = useState("");

    const items = queryData(query, { cancer: false, mutation: false, treatment: true }, 9);
    const cancers = items.map((item) => item?.item);

    return (
        <div className="rounded-3xl  w-full border-2 border-red-400 bg-white transition-all flex flex-col">
            <div className="w-full bg-white rounded-full flex p-1 border-2 ">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    name=""
                    className="flex-1 bg-transparent text-slate-600 selection:placeholder:open:none py-2 px-4 placeholder:text-grey outline-none"
                    id=""
                    placeholder="Search Treatments ..."
                />
                <button
                    className="px-4 bg-[#DBE2EC] text-slate-400 rounded-full ml-2"
                >
                    Search
                </button>
            </div>
            <div className={cn(" w-full transition-all overflow-hidden p-2 duration-300 ")}>
                <div className="grid grid-cols-3">
                    {
                        cancers.length > 0 ? cancers.map((cancer, index) =>
                            <div key={index} onClick={() => {
                                addSearchParam('treatments', treatment.name);
                            }} className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-200 cursor-pointer">
                                <img src={cancer.image} alt="" className="w-12 h-12 rounded-full" />
                                <div className="flex-col">
                                    <div className="">{cancer.name}</div>
                                    <div className="text-sm">{cancer.organ}</div>
                                </div>
                            </div>
                        ) : <div className="text-center col-span-3 italic my-2">No Results Found</div>
                    }
                </div>
            </div>
        </div>)
}

function SearchMutation({ addSearchParam }: { addSearchParam: (key: string, value: string) => void }) {
    const [query, setQuery] = useState("");

    const items = queryData(query, { cancer: false, mutation: true, treatment: false }, 9);
    const cancers = items.map((item) => item?.item);

    return (
        <div className="rounded-3xl  w-full border-2 border-red-400 bg-white transition-all flex flex-col">
            <div className="w-full bg-white rounded-full flex p-1 border-2 ">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    name=""
                    className="flex-1 bg-transparent text-slate-600 selection:placeholder:open:none py-2 px-4 placeholder:text-grey outline-none"
                    id=""
                    placeholder="Search Mutation ..."
                />
                <button
                    className="px-4 bg-[#DBE2EC] text-slate-400 rounded-full ml-2"
                >
                    Search
                </button>
            </div>
            <div className={cn(" w-full transition-all overflow-hidden p-2 duration-300 ")}>
                <div className="grid grid-cols-3">
                    {
                        cancers.length > 0 ? cancers.map((cancer, index) =>
                            <div key={index} onClick={() => {
                                addSearchParam('mutation', cancer.name);
                            }} className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-200 cursor-pointer">
                                {/* <img src={cancer.image} alt="" className="w-12 h-12 rounded-full" /> */}
                                <GiSelfLove className="text-2xl" />
                                <div className="flex-col">
                                    <div className="">{cancer.name}</div>
                                </div>
                            </div>
                        ) : <div className="text-center col-span-3 italic my-2">No Results Found</div>
                    }
                </div>
            </div>
        </div>)
}

export default function Page({ searchParams }: Props) {
    const { name, age, cancer, stage, mutation, treatments } = searchParams;
    console.log(searchParams)
    const router = useRouter();
    const pathname = usePathname();
    // const params = useSearchParams();

    // params.get()

    // const [currentQuestion, setCurrentQuestion] = useState(0);
    // const [answers, setAnswers] = useState<(string | null)[]>(new Array(questions.length).fill(null));
    const answers = [name, age, cancer, stage, mutation, treatments];

    const currentQuestion = questions.find((q) => !searchParams.hasOwnProperty(q.param));
    useEffect(() => {
        if (!currentQuestion) {
            router.push('/d/treatments?' + new URLSearchParams(searchParams).toString());
        }
        console.log('hello')
    }, [currentQuestion])

    const handleAnswer = (answer: string) => {
        // const updatedAnswers = [...answers];
        // updatedAnswers[currentQuestion] = answer;
        // setAnswers(updatedAnswers);
        // setCurrentQuestion(currentQuestion + 1);

        const index = questions.findIndex((q) => q === currentQuestion);
        const params = new URLSearchParams(searchParams);
        params.set(currentQuestion!.param, answer);
        router.push(pathname + '?' + params.toString());
    };

    function addSearchParam(key: string, value: string) {
        const params = new URLSearchParams(searchParams);
        params.set(key, value);
        router.push(pathname + '?' + params.toString());
    }

    let question;
    if (!cancer) {
        question = <SearchCancer {...{ addSearchParam }} />;
    }
    else if (!mutation) {
        question = <SearchMutation {...{ addSearchParam }} />;
    }
    else if (!age) {
        question = (
            <div className="flex flex-col gap-4">
                <div className="text-2xl font-semibold">What is your age?</div>
                <div className="flex gap-4">
                    <button onClick={() => handleAnswer('18-30')} className="flex-1 p-4 bg-white border-2 border-black rounded-lg">
                        18-30
                    </button>
                    <button onClick={() => handleAnswer('30-50')} className="flex-1 p-4 bg-white border-2 border-black rounded-lg">
                        30-50
                    </button>
                    <button onClick={() => handleAnswer('50-70')} className="flex-1 p-4 bg-white border-2 border-black rounded-lg">
                        50-70
                    </button>
                    <button onClick={() => handleAnswer('70+')} className="flex-1 p-4 bg-white border-2 border-black rounded-lg">
                        70+
                    </button>
                </div>
            </div>
        )
    }
    else if (!name) {
        question = <SearchMutation {...{ addSearchParam }} />;
    }
    else if (!treatments) {
        question = <SearchTreamtments {...{ addSearchParam }} />;
    }

    return (
        <main className='h-[calc(100vh-5rem)] flex flex-col items-center w-full p-8 bg-gray-100'>
            <div className="flex flex-col md:flex-row w-full gap-8 h-full">
                <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
                    <div className="mb-6">
                        {questions.map((q, index) => (
                            <div key={index} className="flex items-center mb-2">
                                {/* You can adjust the size as needed */}
                                <p className={`ml-2 text-lg transition-all origin-left duration-300 ${currentQuestion === q ? 'text-blue-500 scale-110' : (answers[index] ? 'text-green-500' : 'text-gray-800')}`}>
                                    {q.heading}
                                    {answers[index] && <TiTick className="ml-2 inline-block text-green-500" />}
                                </p>
                            </div>
                        ))}
                    </div>
                    {currentQuestion ? (
                        <motion.div
                            key={currentQuestion}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={variants}
                            className="mb-6"
                        >
                            <h3 className="text-4xl mt-32">{currentQuestion.question}</h3>
                            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {currentQuestion.options.length > 0 ? (
                                    currentQuestion.options.map((option, index) => (
                                        <div
                                            key={index}
                                            className={`cursor-pointer flex items-center justify-center p-4 rounded-lg shadow-md transition-all ${answers[currentQuestion] === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-100'}`}
                                            onClick={() => handleAnswer(option)}
                                        >
                                            {/* {answers[currentQuestion] === option ? <TiTick className="mr-2 text-white" /> : <div className="mr-2 w-5 h-5 rounded-full bg-gray-400" />} */}
                                            <div>{option}</div>
                                        </div>
                                    ))
                                ) : (
                                    <form onSubmit={
                                        (e) => {
                                            e.preventDefault();
                                            const value = e.target[0].value;
                                            console.log({ value });
                                            if (value === '') return;
                                            handleAnswer(value);
                                            e.target[0].value = '';
                                        }
                                    } className="flex flex-col md:flex-row gap-4 items-center">
                                        <input
                                            type="text"
                                            name="answer"
                                            className="border-2 border-gray-300 p-2 rounded-lg w-full"
                                            // required
                                            // onBlur={ }
                                            placeholder={`Enter your ${currentQuestion.heading.toLowerCase()}`}
                                        />
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                            // onClick={() => handleAnswer((document.querySelector('input') as HTMLInputElement).value)}
                                        >
                                            <ForwardIcon />
                                        </button>
                                    </form>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <p className="text-gray-600">All questions answered.</p>
                    )}
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 flex-1 h-full">
                    <div className="mb-6 border">
                        <h3 className="text-4xl text-center font-bold">Patient Report</h3>
                    </div>
                    <div>
                        {questions.map((q, index) => (
                            <div key={index} className="mb-12 flex border-b-2">
                                <p className="font-semibold text-gray-800">{q.heading}:</p>
                                <p className={`ml-2 ${answers[index] ? 'text-green-500 font-bold' : 'text-gray-600'}`}>
                                    {answers[index]} {answers[index] && <TiTick className="ml-2 inline-block text-green-500" />}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
