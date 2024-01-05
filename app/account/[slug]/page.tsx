"use client";

import exams from "@/app/data/exams";
import users from "@/app/data/users";
import { Center } from "@chakra-ui/react";
import Image from "next/image";

export default function AccSuccess({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const foundUsers = users.find((user) => user.id.toString() === slug);

  function Handleexam (){
    return(
        window.location.href = '/exam/'+slug
    )
  }

  return (
    <>
      <div className="h-screen">
        <Center className="h-full flex-col">
          <img
            src={foundUsers?.imgsrc}
            width={200}
            height={200}
            alt="pfp"
            className="rounded-full w-[200px] h-[200px]"
          ></img>
          <div>
          <h1>Tel:{foundUsers?.tel}</h1>
          <h1>Year: {foundUsers?.year}</h1>
          <h1>Section: {foundUsers?.sec}</h1>
          </div>
          <button onClick={Handleexam} className="bg-black rounded-2xl text-white px-4"> Back to Exam </button>
        </Center>
      </div>
    </>
  );
}
