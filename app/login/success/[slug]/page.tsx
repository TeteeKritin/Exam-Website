"use client"

import React from "react";
import users from "@/app/data/users";
import Image from "next/image";
import { Center, Square, Circle } from '@chakra-ui/react'


export default function LoginSuccess({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const foundUsers = users.find((user) => user.id.toString() === slug);

  
function Handleacc (){
  window.location.href = '/account/'+slug
}

function Handleexams(){
  window.location.href = '/exam/[...slug]'
}


if(foundUsers){
  return (
    <>
    <div className="h-screen">
      <Center className="h-full flex-row">
        <div className=" text-center">
        <Image
          src={foundUsers.imgsrc}
          width={64}
          height={64}
          alt="pfp"
          className=" rounded-full w-[150px] h-[150px]"
        />
        <h1 className="text-2xl font-extrabold">Login As</h1>
        <h1>
          {foundUsers.fname} {foundUsers.sname}
        </h1>
        <div className=" bg-black rounded-lg text-white">
        <button onClick={Handleexams}>View Exams</button>
        <button onClick={Handleacc}>View Account</button>
        </div>
        </div>
        </Center>
        </div>
    </>
  );
}
}