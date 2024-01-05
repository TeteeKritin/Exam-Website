"use client"
import { Center } from "@chakra-ui/react";

function Handlelogin (){
    window.location.href = '/login'
  }
  
  function Handleexams(){
    window.location.href = '/login/success'
  }

export default function Account (){
    return (
        <>
        <div className="h-screen">
            <Center className="h-full flex-col">
                <h1>
                    Please Login First!!
                </h1>
                <div className=" flex gap-4">
                <button onClick={Handlelogin}>Back to Login</button>
                <button onClick={Handleexams}>Back to Exams</button>
                </div>
            </Center>
        </div>
        </>
    )
}