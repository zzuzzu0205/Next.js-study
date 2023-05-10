import { MongoClient, ObjectId } from 'mongodb'
import { connectDB } from "@/util/database.js"


export default async function EditArticle(req,res){
    if(req.method == 'POST'){
        let client = await connectDB;
        const db = client.db('forum');
        let update = {
            title : req.body.title,
            content : req.body.content
        }
        let result = await db.collection('post').updateOne(
            {_id : new ObjectId(req.body._id)}, 
            {$set : update} 
          );
          console.log(req.body)
        
        res.status(200).redirect(302 ,'/list')
    }
}