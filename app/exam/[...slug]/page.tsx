"use client";
import {
  Center,
  Radio,
  RadioGroup,
  Select,
  Stack,
  Checkbox,
  CheckboxGroup,
  Input
} from "@chakra-ui/react";
import React from "react";
import exams from "@/app/data/exams";
import Link from "next/link";
import { useState } from "react";


export default function Exam({ params }: { params: { slug: string[] } }) {
  const [value, setValue] = React.useState("1");
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
            <Link href={`/exam/${slug[0]}/${0}/${0}`}>
              <button className=" bg-black text-white px-6 py-2 rounded-2xl mt-4">
                {" "}
                Start Quiz{" "}
              </button>
            </Link>
          </div>
        </Center>
      </div>
    );
  } else if (slug.length === 3) {
    if (Number(slug[1]) < exams[Number(slug[0])].questions.length) {

      const currExam = exams[Number(slug[0])];
      const questionNum = Number(slug[1]);
      const Qtype = currExam.questions[questionNum].type;
      const currA = currExam.questions[questionNum].answer;
      const qScore = currExam.questions[questionNum].score;



      const clickHandlerType0 = () => {
        let currScore = Number(slug[2]);
        if(Number(value) == Number(currA[0])){
         currScore = Number(slug[2]) + Number(qScore);
        }
        window.location.href = `/exam/${slug[0]}/${Number(slug[1]) + 1}/${currScore}`
      } 
      return (
        <div className="h-screen">
          <Center className="h-full">
            <div>
              <div className="mb-4">
                <h1 className="font-extrabold text-2xl">
                  Question {questionNum + 1}
                </h1>
                <h1 className="">
                  {" "}
                  {currExam?.questions?.[questionNum]?.score} point(s) possible
                </h1>
              </div>
              <div>
                <h1 className="">
                  {" "}
                  {currExam?.questions?.[questionNum]?.question}
                </h1>
              </div>
              {Qtype == 0 ? (
                <Input placeholder="answer" required className="w-full my-4" value={value} onChange={(event) => setValue(event.target.value)}/>
              ) : Qtype == 1 ? (
                currExam.questions[questionNum].options.map((item, index) => (
                  <div className="mt-4" key={index}>
                    <RadioGroup  onChange={setValue} value={value}>
                      <Radio value={String(index)}>{item}</Radio>
                    </RadioGroup>
                  </div>
                ))
              ) : Qtype == 2 ? (
                <RadioGroup onChange={setValue} value={value}>
                  <Stack direction="column">
                    <Radio value="1">True</Radio>
                    <Radio value="0">False</Radio>
                  </Stack>
                </RadioGroup>
              ) : Qtype == 3 ? (
                <div className="w-full">
                  <Select placeholder="Select option" value={value} onChange={(event) => setValue(event.target.value)}>
                    {currExam.questions[questionNum].options.map(
                      (item, index) => (
                        <option key={index} value={String(index)}>{item}</option>
                      )
                    )}
                  </Select>
                  <h1>{}</h1>
                </div>
              ) : Qtype == 4 ? (
                <Stack direction="column">
                  {currExam.questions[questionNum].options.map(
                    (item, index) => (
                      <Checkbox key={index}>{item}</Checkbox>
                    )
                  )}
                </Stack>
              ) : (
                <></>
              )}

                <button onClick={clickHandlerType0} className=" bg-black text-white px-6 py-2 rounded-2xl mt-4">
                  {" "}
                  Next{" "}
                </button>
            </div>
          </Center>
        </div>
      );
    } else {
      const examNum = exams[Number(slug[0])];
      let fullScore = 0;
      
      for (let index = 0; index < examNum.questions.length; index++) {
        const item = examNum.questions[index];
        fullScore = fullScore + item.score;
      }
      
      return (
        <div className="h-screen">
        <Center className="h-full">
          <div>
            <div className="my-4">
              <h1 className="font-extrabold text-2xl"> {examNum.name}</h1>
              <h1 className="">Instructor: {examNum.instructor} </h1>
            </div>
            <div className="flex flex-row">
              <h1 className="mr-4"> Result</h1>
              <h1 className="text-2xl "> {slug[2]}/{fullScore}</h1>
            </div>
            <div className="my-4">
              <h1 className="">Open Date Time: {examNum.opendatetime} </h1>
              <h1 className="">Close Date Time: {examNum.opendatetime} </h1>
            </div>
            <Link href={`/exam/`}>
              <button className=" bg-black text-white px-6 py-2 rounded-2xl mt-4">
                {" "}
                Go to Exams{" "}
              </button>
            </Link>
          </div>
        </Center>
      </div>
      );
    }
  }
}
