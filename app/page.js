import Image from 'next/image'
import styles from './page.module.css'
import { MongoClient } from 'mongodb'
import { connectDB } from "@/util/database.js"
import Link from 'next/link';

export default async function Home() {
  

  return (
    <div>
      
      <form action='/api/createUser' method='POST'> 
        <input name="id" placeholder='아이디입력'/>
        <input name="password" placeholder='비밀번호입력'/>
        <button type='submit'>회원가입하기</button>
      </form>
    </div>
  )
}
