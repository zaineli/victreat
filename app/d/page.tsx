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
import { ProgressTracker, type Stages } from '@atlaskit/progress-tracker';
import { Input } from '@/components/ui/input';

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
    },
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
    // const answers = [name, age, cancer, stage, mutation, treatments];
    const answers = [name, age, cancer, stage, mutation, treatments];
    const ordererdQuestions = questions.map(q => ({ ...q, answer: searchParams[q.param], answered: searchParams.hasOwnProperty(q.param) })).sort((a, b) => (b.answered ? 1 : 0) - (a.answered ? 1 : 0))
    const currentQuestion = ordererdQuestions.find((q) => !q.answered);
    const getCurrentQuestionIndex = () => ordererdQuestions.indexOf(currentQuestion);
    // const currentQuestionIndex = ordererdQuestions.indexOf(currentQuestion);
    console.log(ordererdQuestions, currentQuestion, searchParams);
    // useEffect(() => {
    //     // Check if there is no question left
    //     if (currentQuestion === questions.length) {
    //         // redirect to another page
    //         router.push('/d/treatments');
    //     }
    // }, [currentQuestion]);
    const items: Stages[] = ordererdQuestions.map((q, index) => ({
        id: `step-${index + 1}`,
        label: q.heading,
        percentageComplete: q.answered ? 100 : 0,
        status: q.answered ? 'visited' : currentQuestion === q ? 'current' : 'unvisited',
        href: '#',
    })).slice(0, -1).concat({
        ...ordererdQuestions[ordererdQuestions.length - 1],
        id: `step-${ordererdQuestions.length}`,
        label: ordererdQuestions[ordererdQuestions.length - 1].heading,
        status: ordererdQuestions[ordererdQuestions.length - 1].answered ? 'visited' : currentQuestion === ordererdQuestions[ordererdQuestions.length - 1] ? 'current' : 'unvisited',
        href: '#',
    });


    useEffect(() => {
        if (!currentQuestion) {
            router.push('/d/treatments?' + new URLSearchParams(searchParams).toString());
        }
    }, [currentQuestion])

    const handleAnswer = (answer: string) => {
        const params = new URLSearchParams(searchParams);
        params.set(currentQuestion.param, answer);
        router.push(pathname + '?' + params.toString());
    };

    function addSearchParam(key: string, value: string) {
        const params = new URLSearchParams(searchParams);
        params.set(key, value);
        router.push(pathname + '?' + params.toString());
    }

    return (
        <main className="h-[calc(100vh-5rem)] flex flex-col items-center w-full p-8 bg-white">
            <div className="flex flex-col md:flex-row w-full gap-8 h-full">
                <div className="bg-white p-6 flex-1 flex flex-col">
                    <div className="mb-6 self-center">

                        <ProgressTracker
                            items={items}
                            spacing="cozy"
                            animated={true}
                            render={{
                                link: ({ item }) => (
                                    <a
                                        href={item.href}
                                        className={`block py-2 px-4 transition-all duration-300 ${item.status === 'current' ? ' text-blue-500' : item.status === 'visited' ? ' text-green-500' : ' text-gray-800'}`}
                                    >
                                        {item.label}
                                    </a>
                                )
                            }}
                            label="Progress Tracker"
                        />

                        {/* {ordererdQuestions.map((q, index) => (
                            <div key={index} className="flex items-center mb-2 relative">
                                <span className="w-2 h-2 bg-red-500 shadow shadow-red-300 rounded-full relative"></span>
                                <p className={cn("ml-2 text-lg transition-all origin-left duration-300", currentQuestion === q ? 'text-blue-500 scale-110' : (q.answered ? 'text-green-500' : 'text-gray-800'))}>
                                    {q.heading}
                                    {q.answered && <TiTick className="ml-2 inline-block text-green-500" />}
                                </p>
                                <span className="absolute top-[calc(50%+0.3rem)] w-1 left-[0.125rem] h-full bg-blue-500"></span>
                            </div>
                        ))} */}
                    </div>
                    {currentQuestion ? (
                        <motion.div
                            key={currentQuestion}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={variants}
                            className="mb-6 w-full flex flex-col gap-4 items-center"
                        >
                            <h3 className="text-5xl mt-32">{currentQuestion.question}</h3>
                            <div className="mt-2  w-2/3  gap-4">
                                {currentQuestion.options.length > 0 ? (
                                    <div className="grid gap-4 grid-cols-2">
                                        {currentQuestion.options.map((option, index) => (
                                            <div
                                                key={index}
                                                className={`cursor-pointer flex items-center justify-center p-4 rounded-lg shadow-md transition-all ${answers[currentQuestion] === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-100'}`}
                                                onClick={() => handleAnswer(option)}
                                            >
                                                <div>{option}</div>
                                            </div>))}
                                    </div>
                                ) : (
                                    <form onSubmit={(e) => {
                                        e.preventDefault();
                                        const value = e.target[0].value;
                                        if (value === '') return;
                                        handleAnswer(value);
                                        e.target[0].value = '';
                                    }} className="flex min-w-full self-start gap-4 items-center">
                                        <Input
                                            type="text"
                                            name="answer"
                                            className="w-full"
                                            placeholder={`Enter your ${currentQuestion.heading.toLowerCase()}`}
                                        />
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
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
            </div>
        </main>
    );
}
