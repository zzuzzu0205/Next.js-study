import Image from 'next/image'
import styles from './page.module.css'
import { MongoClient } from 'mongodb'
import { connectDB } from "./util/database.js"
import Link from 'next/link';

export default async function Home() {
  
  let client = await connectDB;
  const db = client.db('forum');
  let result = await db.collection('post').find().toArray();
  console.log(result)
  

  return (
    <div>
      <Link href={"/list"}>List</Link>
    </div>
  )
}
