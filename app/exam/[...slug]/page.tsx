import { Center } from "@chakra-ui/react";
import React from "react";
import exams from "@/app/data/exams";
import Link from "next/link";

export default function Exam({ params }: { params: { slug: string[] } }) {
  const slug = params.slug;
  if (slug.length === 1) {
    const examNum = exams[Number(slug[0])];
    return (
      <div className="h-screen">
        <Center className="h-full">
          <div>
          <div className="my-4">
            <h1 className="font-extrabold text-2xl"> {examNum.name}</h1>
            <h1 className="">Instructor: {examNum.instructor} </h1>
          </div>
          <div>
            <h1 className=" "> {examNum.instruction}</h1>
          </div>
          <div className="my-4">
            <h1 className="">Open Date Time: {examNum.opendatetime} </h1>
            <h1 className="">Close Date Time: {examNum.opendatetime} </h1>
          </div>
          <Link href={`/exam/${slug[0]}/${0}/${0}`}><button className=" bg-black text-white px-6 py-2 rounded-2xl mt-4"> Start Quiz </button></Link>
          </div>
        </Center>
      </div>
    );
  } else if(slug.length === 3){
      const currExam = exams[Number(slug[0])];
      const questionNum = Number(slug[1]);
      const currScore = Number(slug[2]);
    return(
      <div className="h-screen">
        <Center className="h-full">
          <div>
            <div>
            <h1 className="font-extrabold text-2xl"> {questionNum+1}</h1>
            <h1 className=""> {currExam?.questions?.[questionNum]?.score} point(s) possible</h1>
            </div>
            <div>
            <h1 className=""> {currExam?.questions?.[questionNum]?.question}</h1>
            </div>
            <input placeholder="answer" required className="w-full"/>
            <Link href={`/exam/${slug[0]}/${Number(slug[1])+1}/${Number(slug[2])}`}><button className=" bg-black text-white px-6 py-2 rounded-2xl mt-4"> Next </button></Link>
          </div>
        </Center>
      </div>
    )
  }
}
