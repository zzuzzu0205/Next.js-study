import { MongoClient } from 'mongodb'
import { connectDB } from "@/util/database.js"

export default async function CreateArticle(request, response){
    if(request.method =="POST"){
        const { title, content } = request.body
        if (!title || !content) {
        return response.status(400).json({ message: 'Missing title or content' })
        }
        
        let client = await connectDB;
        const db = client.db('forum');
        let result = await db.collection('post').insertOne(request.body)
        return response.status(200).redirect(302 ,'/list')
    }
}