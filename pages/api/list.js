import { connectDB } from "@/util/database.js"

export default async function List(request, response){
    let client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').find().toArray();

    if(request.method == 'GET'){
        return response.status(200).json(result)
    }
}