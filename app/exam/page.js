import Link from "next/link"
import exams from "../data/exams"

export default function showExam(){
    return(
        <>
        <div>
          <h1 className="p-12 font-extrabold text-3xl">Available Exam</h1>
          <div className="flex flex-row gap-4">
            {exams.map((qE, index) => (
              <div key={index} className="p-12 px-12">
                <h1 className=" font-bold"> {qE.name}</h1>
                <h1 className="mb-10"> {qE.instructor}</h1>
                <Link href={`exam/${index}`} key={index}>
                  <button className=" bg-black text-white px-6 py-2 rounded-2xl">
                    {" "}
                    See More{" "}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        </>
    )
}