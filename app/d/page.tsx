'use client';
import { motion } from 'framer-motion';
import { Heading, Search } from 'lucide-react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
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

    return (
        <main className="min-h-screen flex flex-col items-center w-full p-8 bg-gray-100">
            <div className="flex flex-col md:flex-row w-full gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold">Questions</h2>
                    </div>
                    {currentQuestion ? (
                        <motion.div
                            key={currentQuestion.heading}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={variants}
                            className="mb-6"
                        >
                            <h3 className="text-lg mt-4">{currentQuestion.question}</h3>
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
                                    <div className="flex flex-col md:flex-row gap-4 items-center">
                                        <input
                                            type="text"
                                            className="border-2 border-gray-300 p-2 rounded-lg w-full"
                                            onBlur={(e) => handleAnswer(e.target.value)}
                                            placeholder={`Enter your ${currentQuestion.heading.toLowerCase()}`}
                                        />
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                            onClick={() => handleAnswer((document.querySelector('input') as HTMLInputElement).value)}
                                        >
                                            Submit
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ) : (
                        <p className="text-gray-600">All questions answered.</p>
                    )}
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
                    <div className="mb-6">
                        <h3 className="text-lg font-bold">Patient Report</h3>
                    </div>
                    <div>
                        {questions.map((q, index) => (
                            <div key={index} className="mb-4">
                                <p className="font-semibold text-gray-800">{q.heading}:</p>
                                <p className="ml-2 text-gray-600">{answers[index] || '-'}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
