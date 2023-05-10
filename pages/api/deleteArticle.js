import { MongoClient,ObjectId } from 'mongodb'
import { connectDB } from "@/util/database.js"

export default async function DeleteArticle(req,res){
    if(req.method == 'POST'){
        let client = await connectDB;
        const db = client.db('forum');
        let result = await db.collection('post').deleteOne(
            {_id : new ObjectId(req.body)});
        return res.status(200).json('삭제완료')
        return res.status(200).redirect(302 ,'/list')
    }
}