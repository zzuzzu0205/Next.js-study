import { MongoClient } from 'mongodb'
import { connectDB } from "@/util/database.js"

export default async function CreateUser(req, res) {
  if (req.method == 'POST') {
    const { id, password } = req.body
    let client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('user').find().toArray();

    if (!id || !password) {
      return res.status(400).json({ message: 'Missing title or content' })
    }

    result.map((a, i) => {
      if (id == result[i].id) {
        return res.status(400).json('중복 된 아이디입니다')
      }
    })

    let user = await db.collection('user').insertOne(req.body)
    let userCheck = await db.collection('user').find().toArray();
    console.log(userCheck)
    return res.status(200).json('회원가입 성공하셨습니다')
  }
} 
