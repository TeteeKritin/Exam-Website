import { Center } from "@chakra-ui/react";
import React from "react";
import exams from "@/app/data/exams";

export default function Exam() {
  
  return (
    <>
      <div>
      <h1 className="p-12 font-extrabold text-3xl">Available Exam</h1>
        <div  className="flex flex-row gap-4">     
            {exams.map((qE, index ) => (
          <div key={index} className="p-12 px-12">
            <h1 className=" font-bold"> {qE.name}</h1>
            <h1 className="mb-10"> {qE.instructor}</h1>
            <button className=" bg-black rounded-2xl text-white px-4"> See More </button>
          </div>
             ))}
        </div>
      </div>
    </>
  );
}
