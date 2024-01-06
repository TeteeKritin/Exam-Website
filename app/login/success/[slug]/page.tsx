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
  window.location.href = '/exam/'
}


if(foundUsers){
  return (
    <>
    <div className="h-screen">
      <Center className="h-full flex-col">
      <img
          src={foundUsers.imgsrc}
          width={64}
          height={64}
          alt="pfp"
          className=" rounded-full w-[200px] h-[200px]"
        />
        <div className=" text-center items-center">
        
        <h1 className="text-2xl font-extrabold mt-6">Login As</h1>
        <h1 className="mb-6 ">
          {foundUsers.fname} {foundUsers.sname}
        </h1>
        <div className= "flex flex-row gap-4">
        <button className=" bg-black text-white px-6 py-2 rounded-2xl" onClick={Handleexams}>View Exams</button>
        <button className=" bg-black text-white px-6 py-2 rounded-2xl" onClick={Handleacc}>View Account</button>
        </div>
        </div>
        </Center>
        </div>
    </>
  );
}
}