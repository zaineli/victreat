'use client'
import { motion } from 'framer-motion';
import { ForwardIcon, Heading } from 'lucide-react';
import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";

type Props = {}

const questions = [
    {
        question: 'What is your name?',
        heading: 'Name',
        options: [],
    },
    {
        question: 'What is your age?',
        heading: 'Age',
        options: [],
    },
    {
        question: 'What is your cancer stage?',
        heading: 'Cancer Stage',
        options: ['Stage 0', 'Stage I', 'Stage II', 'Stage III', 'Stage IV'],
    },
    {
        question: 'What type of cancer do you have?',
        heading: 'Type of Cancer',
        options: ['Breast Cancer', 'Lung Cancer', 'Prostate Cancer', 'Colon Cancer', 'Other'],
    },
    {
        question: 'What is the mutation type (if known)?',
        heading: 'Mutation Type',
        options: ['EGFR', 'KRAS', 'HER2', 'BRAF', 'Other', 'Unknown'],
    },
    {
        question: 'What treatments have you undergone?',
        heading: 'Treatments',
        options: ['Chemotherapy', 'Radiation Therapy', 'Immunotherapy', 'Surgery', 'Other'],
    }
];

const variants = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
};

export default function Page({ }: Props) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<(string | null)[]>(new Array(questions.length).fill(null));

    const handleAnswer = (answer: string) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestion] = answer;
        setAnswers(updatedAnswers);
        setCurrentQuestion(currentQuestion + 1);
    };

    return (
        <main className='h-[calc(100vh-5rem)] flex flex-col items-center w-full p-8 bg-gray-100'>
            <div className="flex flex-col md:flex-row w-full gap-8 h-full">
                <div className="bg-white rounded-lg shadow-lg p-6 flex-1">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold">Questions</h2>
                    </div>
                    <div className="mb-6">
                        {questions.map((q, index) => (
                            <div key={index} className="flex items-center mb-2">
                                {/* You can adjust the size as needed */}
                                <p className={`ml-2 text-lg ${currentQuestion === index ? 'text-blue-500' : (answers[index] ? 'text-green-500' : 'text-gray-800')}`}>
                                    {q.heading}
                                    {answers[index] && <TiTick className="ml-2 inline-block text-green-500" />}
                                </p>
                            </div>
                        ))}
                    </div>
                    {currentQuestion < questions.length ? (
                        <motion.div
                            key={currentQuestion}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={variants}
                            className="mb-6"
                        >
                            <h3 className="text-4xl mt-32">{questions[currentQuestion].question}</h3>
                            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {questions[currentQuestion].options.length > 0 ? (
                                    questions[currentQuestion].options.map((option, index) => (
                                        <div
                                            key={index}
                                            className={`cursor-pointer flex items-center justify-center p-4 rounded-lg shadow-md transition-all ${answers[currentQuestion] === option ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-100'}`}
                                            onClick={() => handleAnswer(option)}
                                        >
                                            {answers[currentQuestion] === option ? <TiTick className="mr-2 text-white" /> : <div className="mr-2 w-5 h-5 rounded-full bg-gray-400" />}
                                            <div>{option}</div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex flex-col md:flex-row gap-4 items-center">
                                        <input
                                            type="text"
                                            className="border-2 border-gray-300 p-2 rounded-lg w-full"
                                            onBlur={(e) => handleAnswer(e.target.value)}
                                            placeholder={`Enter your ${questions[currentQuestion].heading.toLowerCase()}`}
                                        />
                                        <button
                                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                                            onClick={() => handleAnswer((document.querySelector('input') as HTMLInputElement).value)}
                                        >
                                            <ForwardIcon />
                                        </button>
                                    </div>
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
