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
        window.location.href = '/exam/'
    )
  }

  function HandleAcc (){
    return(
      window.location.href = '/login/success/'+slug
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
          <div className="mt-4 mb-4">
          <h1>Tel:{foundUsers?.tel}</h1>
          <h1>Year: {foundUsers?.year}</h1>
          <h1>Section: {foundUsers?.sec}</h1>
          </div>
          <div className="flex flex-row gap-4">
          <button onClick={Handleexam} className=" bg-black text-white px-6 py-2 rounded-2xl"> Back to Exams </button>
          <button onClick={HandleAcc} className=" bg-black text-white px-6 py-2 rounded-2xl"> Back to Account </button>
          </div>
        </Center>
      </div>
    </>
  );
}
