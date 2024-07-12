// 'use client'
// import { ForwardIcon } from 'lucide-react';
// import { queryData } from '@/components/custom/universal-search';
// import { cn } from '@/lib/utils';
// import { motion } from 'framer-motion';
// import {  usePathname, useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react';
// import { GiSelfLove } from 'react-icons/gi';
import { ProgressTracker, type Stages } from '@atlaskit/progress-tracker';
// import { Input } from '@/components/ui/input';
// import { CancerType } from '../discover/data';
// import { CiSearch } from 'react-icons/ci';
// import { Badge } from '@/components/ui/badge';

// type QuestionType = {
//     question: string;
//     param: "name" | "age" | "cancer" | "stage" | "mutation" | "treatments";
//     heading: string;
//     options: string[];
//     name?: string;
//     age?: number;
// }

// const questions: QuestionType[] = [
//     {
//         question: 'What is your name?',
//         heading: 'Name',
//         param: "name",
//         options: [],
//     },
//     {
//         question: 'What is your age?',
//         heading: 'Age',
//         param: "age",
//         options: [],
//     },
//     {
//         question: 'What type of cancer do you have?',
//         heading: 'Type of Cancer',
//         param: "cancer",
//         options: ['Breast Cancer', 'Lung Cancer', 'Prostate Cancer', 'Colon Cancer', 'Other'],
//     },
//     {
//         question: 'What is your cancer stage?',
//         heading: 'Cancer Stage',
//         param: "stage",
//         options: ['Stage 0', 'Stage I', 'Stage II', 'Stage III', 'Stage IV'],
//     },
//     {
//         question: 'What is the mutation type?',
//         heading: 'Mutation Type',
//         param: "mutation",
//         options: ['EGFR', 'KRAS', 'HER2', 'BRAF', 'Other', 'Unknown'],
//     },
//     {
//         question: 'What treatments have you undergone?',
//         heading: 'Already Taken Treatments',
//         param: "treatments",
//         options: ['Chemotherapy', 'Radiation Therapy', 'Immunotherapy', 'Surgery', 'Other'],
//     },
// ];

// const variants = {
//     initial: { opacity: 0, x: 100 },
//     animate: { opacity: 1, x: 0 },
//     exit: { opacity: 0, x: -100 },
// };

// function SearchCancer({ addSearchParam }: { addSearchParam: (key: string, value: string) => void }) {
//     const [query, setQuery] = useState("");

//     const items = queryData(query, { cancer: true, mutation: false, treatment: false }, 9);
//     const cancers = items.map((item) => item?.item);

//     const defaultCancers = [
//         {
//             name: "Adrenal Cancer",
//             image: "https://baconmockup.com/600/400",
//             organ: "Adrenal Glands",
//         },
//         {
//             name: "Cervical Cancer",
//             image: "https://baconmockup.com/606/400",
//             organ: "Cervix",
//         },
//         {
//             name: "Colon Cancer",
//             image: "https://baconmockup.com/607/400",
//             organ: "Colon",
//         },
//         {
//             name: "Colorectal Cancer",
//             image: "https://baconmockup.com/608/400",
//             organ: "Colon and Rectum",
//         }
//     ]

//     return (

//         <div className='w-full'>
//             <h3 className="text-5xl text-center mt-32 mb-8">What is your cancer type?</h3>
//             <div className="rounded-3xl w-2/3 mx-auto border-2 bg-white transition-all flex flex-col">
//                 <motion.div
//                     className="w-full bg-white rounded-full flex p-1 items-center gap-2 pl-4"
//                     initial="hidden"
//                     animate="visible"
//                 >
//                     <CiSearch className="w-6 h-6 text-slate-600" />
//                     <input
//                         type="text"
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                         name=""
//                         className="flex-1 bg-transparent text-slate-600 selection:placeholder:open:none py-2 pr-4 placeholder:text-grey outline-none"
//                         id=""
//                         placeholder="Search Cancer ..."
//                     />
//                 </motion.div>

//                 <div className={cn(" w-full transition-all overflow-hidden duration-300 ", { 'h-0': !query })}>

//                     {/* <div className="grid grid-cols-3 p-2">
//                         {cancers.length > 0 ?
//                             cancers.map((cancer, index: number) => (
//                                 <button
//                                     // href={`/d?cancer=${cancer.name.replaceAll(" ", "+")}`}
//                                     onClick={() => {
//                                         addSearchParam('cancer', cancer!.name);
//                                     }}
//                                     key={index}
//                                     className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-200 cursor-pointer"
//                                 >
//                                     <img
//                                         src={cancer!.image as unknown as string}
//                                         alt=""
//                                         className="w-12 h-12 rounded-full"
//                                     />
//                                     <div className="flex-col">
//                                         <div>{cancer!.name}</div>
//                                         <div className="text-sm">{cancer!.organ as unknown as string}</div>
//                                     </div>
//                                 </button>
//                             ))
//                             : (
//                                 <div className="text-center col-span-3 italic my-2">
//                                     No Results Found
//                                 </div>
//                             )}
//                     </div> */}
//                 </div>
//             </div>
//             {
//                 !query &&
//                 <div className="flex gap-4 pt-4 -z-100 w-fit place-items-center align-middle mx-auto">
//                     {
//                         defaultCancers.map((cancer: CancerType, index: number) => (
//                             <button
//                                 onClick={() => {
//                                     addSearchParam('cancer', cancer.name);
//                                 }}
//                                 key={index}
//                                 className="w-max cursor-pointer "
//                             >
//                                 <Badge variant={'secondary'}>
//                                     <div>{cancer.name}</div>
//                                 </Badge>
//                             </button>
//                         ))
//                     }
//                 </div>
//             }
//         </div>)
// }

// // function SearchTreamtments({ addSearchParam }: { addSearchParam: (key: string, value: string) => void }) {
// //     const [query, setQuery] = useState("");

// //     const items = queryData(query, { cancer: false, mutation: false, treatment: true }, 9);
// //     const cancers = items.map((item) => item?.item);

// //     return (
// //         <div className="rounded-3xl  w-full border-2 border-red-400 bg-white }
// //                                 if (item?.type === "treatment") {
// //                                     const cancer = item.item as Treatment;
// //                                     return (
// //                                         <Link
// //                                             href={`/d?treatments=${cancer.name.replaceAll(" ", "+")}`}
// //                                             key={index}
// //                                             className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-200 cursor-pointer"
// //                                         >
// //                                             <GiSelfLove className="w-12 h-12 rounded-full" />
// //                                             <div className="flex-col">
// //                                                 <div>{cancer.name}</div>
// //                                                 <Badge className="text-xs" variant={"outline"}>
// //                                                     Treatment
// //                                                 </Badge>
// //                                             </div>
// //                                         </Link>
// //                                     );
// //                                 }
// //                                 if (item?.type === "mutation") {
// //                                     const cancer = item.item as Mutation;
// //                                     return (
// //                                         <Link
// //                                             href={`/d?cancer=${cancer.name.replaceAll(" ", "+")}`}
// //                                             key={index}
// //                                             className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-200 cursor-pointer"
// //                                         >
// //                                             <GiSelfLove className="w-12 h-12 rounded-full" />
// //                                             <div className="flex-col">
// //                                                 <div>{cancer.name}</div>
// //                                                 <Badge className="text-xs" variant={"outline"}>
// //                                                     Mutation
// //                                                 </Badge>
// //                                             </div>
// //                                         </Link>
// //                                     );
// //                                 }
// //                             })
// //                         ) transition-all flex flex-col">
// //             <div className="w-full bg-white rounded-full flex p-1 border-2 ">
// //                 <input
// //                     type="text"
// //                     value={query}
// //                     onChange={(e) => setQuery(e.target.value)}
// //                     name=""
// //                     className="flex-1 bg-transparent text-slate-600 selection:placeholder:open:none py-2 px-4 placeholder:text-grey outline-none"
// //                     id=""
// //                     placeholder="Search Treatments ..."
// //                 />
// //                 <button
// //                     className="px-4 bg-[#DBE2EC] text-slate-400 rounded-full ml-2"
// //                 >
// //                     Search
// //                 </button>
// //             </div>
// //             <div className={cn(" w-full transition-all overflow-hidden p-2 duration-300 ")}>
// //                 <div className="grid grid-cols-3">
// //                     {
// //                         cancers.length > 0 ? cancers.map((cancer, index) =>
// //                             <div key={index} onClick={() => {
// //                                 addSearchParam('treatments', treatment.name);
// //                             }} className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-200 cursor-pointer">
// //                                 <img src={cancer.image} alt="" className="w-12 h-12 rounded-full" />
// //                                 <div className="flex-col">
// //                                     <div className="">{cancer.name}</div>
// //                                     <div className="text-sm">{cancer.organ}</div>
// //                                 </div>
// //                             </div>
// //                         ) : <div className="text-center col-span-3 italic my-2">No Results Found</div>
// //                     }
// //                 </div>
// //             </div>
// //         </div>)
// // }

// function Question({ q, searchParams }: { q: { question: string, heading: string, param: string, options: string[] }, searchParams: Record<string, string> }) {

//     const router = useRouter();
//     const pathname = usePathname();

//     const handleAnswer = (answer: string) => {
//         const params = new URLSearchParams(searchParams);
//         params.set(q.param, answer);
//         router.push(pathname + '?' + params.toString());
//     };

//     function addSearchParam(key: string, value: string) {
//         const params = new URLSearchParams(searchParams);
//         params.set(key, value);
//         router.push(pathname + '?' + params.toString());
//     }

//     if (q.param === 'cancer') {
//         return <SearchCancer addSearchParam={addSearchParam} />
//     }

//     return (
//         <>
//             <h3 className="text-5xl mt-32">{q.question}</h3>
//             <div className="mt-2  w-2/3  gap-4">
//                 {q.options.length > 0 ? (
//                     <div className="grid gap-4 grid-cols-2">
//                         {q.options.map((option, index) => (
//                             <div
//                                 key={index}
//                                 className={`cursor-pointer flex items-center justify-center p-4 rounded-lg shadow-md transition-all ${'bg-gray-200 text-gray-700 hover:bg-blue-100'}`}
//                                 onClick={() => handleAnswer(option)}
//                             >
//                                 <div>{option}</div>
//                             </div>))}
//                     </div>
//                 ) : (
//                     <form onSubmit={(e) => {
//                         e.preventDefault();
//                         // const value = e.target[0].value;
//                         // if (value === '') return;
//                         // handleAnswer(value);
//                         // e.target[0].value = '';
//                     }} className="flex min-w-full self-start gap-4 items-center">
//                         <Input
//                             type="text"
//                             name="answer"
//                             className="w-full"
//                             placeholder={`Enter your ${q.heading.toLowerCase()}`}
//                         />
//                         <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
//                             <ForwardIcon />
//                         </button>
//                     </form>
//                 )}
//             </div>
//         </>

//     )

// }

// function SearchMutation({ addSearchParam }: { addSearchParam: (key: string, value: string) => void }) {
//     const [query, setQuery] = useState("");

//     const items = queryData(query, { cancer: false, mutation: true, treatment: false }, 9);
//     const cancers = items.map((item) => item?.item);

//     return (
//         <div className="rounded-3xl  w-full border-2 border-red-400 bg-white transition-all flex flex-col">
//             <div className="w-full bg-white rounded-full flex p-1 border-2 ">
//                 <input
//                     type="text"
//                     value={query}
//                     onChange={(e) => setQuery(e.target.value)}
//                     name=""
//                     className="flex-1 bg-transparent text-slate-600 selection:placeholder:open:none py-2 px-4 placeholder:text-grey outline-none"
//                     id=""
//                     placeholder="Search Mutation ..."
//                 />
//                 <button
//                     className="px-4 bg-[#DBE2EC] text-slate-400 rounded-full ml-2"
//                 >
//                     Search
//                 </button>
//             </div>
//             <div className={cn(" w-full transition-all overflow-hidden p-2 duration-300 ")}>
//                 <div className="grid grid-cols-3">
//                     {/* {
//                         cancers.length > 0 ? cancers.map((cancer, index) =>
//                             <div key={index} onClick={() => {
//                                 addSearchParam('mutation', cancer.name);
//                             }} className="flex items-center gap-2 p-2 rounded-lg hover:bg-neutral-200 cursor-pointer">
//                                 <GiSelfLove className="text-2xl" />
//                                 <div className="flex-col">
//                                     <div className="">{cancer.name}</div>
//                                 </div>
//                             </div>
//                         ) : <div className="text-center col-span-3 italic my-2">No Results Found</div>
//                     } */}
//                 </div>
//             </div>
//         </div>)
// }

// export default function Page({ searchParams }: {searchParams: {
//     name?: string;
//     age?: string;
//     cancer?: string;
//     mutation?: string;
//     treatments?: string;
// }}) {
//     const router = useRouter();
//     const ordererdQuestions = questions.map(q => ({ ...q, answer: searchParams[q.param], answered: searchParams.hasOwnProperty(q.param) })).sort((a, b) => (b.answered ? 1 : 0) - (a.answered ? 1 : 0))
//     const currentQuestion = ordererdQuestions.find((q) => !q.answered);

//     const items: never[] = ordererdQuestions.map((q, index) => ({
//         id: `step-${index + 1}`,
//         label: q.heading,
//         percentageComplete: q.answered ? 100 : 0,
//         status: q.answered ? 'visited' : currentQuestion === q ? 'current' : 'unvisited',
//         href: '#',
//     })).slice(0, -1).concat({
//         ...ordererdQuestions[ordererdQuestions.length - 1],
//         id: `step-${ordererdQuestions.length}`,
//         label: ordererdQuestions[ordererdQuestions.length - 1].heading,
//         status: ordererdQuestions[ordererdQuestions.length - 1].answered ? 'visited' : currentQuestion === ordererdQuestions[ordererdQuestions.length - 1] ? 'current' : 'unvisited',
//         href: '#',
//     }) as never[];


//     useEffect(() => {
//         if (!currentQuestion) {
//             router.push('/d/treatments?' + new URLSearchParams(searchParams).toString());
//         }
//     }, [currentQuestion])



//     return (
//         <main className="h-[calc(100vh-5rem)] flex flex-col items-center w-full p-8 bg-white">
//             <div className="flex flex-col md:flex-row w-full gap-8 h-full">
//                 <div className="bg-white p-6 flex-1 flex flex-col">
//                     <div className="mb-6 self-center">

//                         <ProgressTracker
//                             items={items}
//                             spacing="cozy"
//                             animated={true}
//                             render={{
//                                 link: ({ item }) => (
//                                     <a
//                                         href={item.href}
//                                         className={`block py-2 px-4 transition-all duration-300 ${item.status === 'current' ? ' text-blue-500' : item.status === 'visited' ? ' text-green-500' : ' text-gray-800'}`}
//                                     >
//                                         {item.label}
//                                     </a>
//                                 )
//                             }}
//                             label="Progress Tracker"
//                         />

//                         {/* {ordererdQuestions.map((q, index) => (
//                             <div key={index} className="flex items-center mb-2 relative">
//                                 <span className="w-2 h-2 bg-red-500 shadow shadow-red-300 rounded-full relative"></span>
//                                 <p className={cn("ml-2 text-lg transition-all origin-left duration-300", currentQuestion === q ? 'text-blue-500 scale-110' : (q.answered ? 'text-green-500' : 'text-gray-800'))}>
//                                     {q.heading}
//                                     {q.answered && <TiTick className="ml-2 inline-block text-green-500" />}
//                                 </p>
//                                 <span className="absolute top-[calc(50%+0.3rem)] w-1 left-[0.125rem] h-full bg-blue-500"></span>
//                             </div>
//                         ))} */}
//                     </div>
//                     {currentQuestion ? (
//                         <motion.div
//                             key={currentQuestion.param}
//                             initial="initial"
//                             animate="animate"
//                             exit="exit"
//                             variants={variants}
//                             className="mb-6 w-full flex flex-col gap-4 items-center"
//                         >
//                             <Question q={currentQuestion} searchParams={searchParams} />
//                         </motion.div>
//                     ) : (
//                         <p className="text-gray-600">All questions answered.</p>
//                     )}
//                 </div>
//             </div>
//         </main>
//     );
// }


import React from 'react'

function Page() {
  return (
    <div>Page</div>
  )
}

export default Page