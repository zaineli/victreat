'use client';
import { queryData } from '@/components/custom/universal-search';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Heading, Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
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
        heading: 'Treatments',
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

    const handleAnswer = (answer: string) => {
        // const updatedAnswers = [...answers];
        // updatedAnswers[currentQuestion] = answer;
        // setAnswers(updatedAnswers);
        // setCurrentQuestion(currentQuestion + 1);

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
        <main className="min-h-screen flex flex-col items-center w-full p-8 bg-gray-100">
            <div className="flex flex-col md:flex-row w-full gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold">Questions</h2>
                    </div>
                    {question}
                </div>
                <div className=" rounded-lg p-6 px-16">
                    {/* <div className="mb-6">
                        <h3 className="text-lg font-bold">Patient Report</h3>
                    </div> */}
                    <div className=' '>
                        {questions.map((q, index) => (
                            <div key={index} className="mb-4 shadow-sm rounded-xl p-4 border-2 border-black">
                                <p className="font-semibold text-sm text-gray-800">{q.heading}</p>
                                <p className=" text-2xl">{answers[index] || '-'}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
