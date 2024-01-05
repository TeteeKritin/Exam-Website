import Image from 'next/image'
import Login from './login/page'
import LoginSuccess from './login/success/[slug]/page'
import Exam from './exam/[...slug]/page'

export default function Home() {
  return (
    <main>
      <div>
        <Exam></Exam>
      </div>
    </main>
  )
}
