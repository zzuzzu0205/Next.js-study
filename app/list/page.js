import { connectDB } from "@/util/database.js"
import Link from 'next/link';
import DetailLink from "./DetailLink.js";
import Listitem from "./Listitem.js";

export const dynamic = 'force-dynamic'
export default async function List() {
    let client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').find().toArray();
    
    return(
      <div>
      <Listitem result={result}/>
      <Link href={`/write`}>글 작성하기</Link>
      </div>
  )
  } 