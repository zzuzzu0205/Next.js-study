import { connectDB } from "@/util/database.js"
import { ObjectId  } from "mongodb";

export default async function Edit(props){
    let client = await connectDB;
    const db = client.db('forum');
    let result = await db.collection('post').findOne({_id : new ObjectId(props.params.id)})
    
    
    
    return(
        <div>
             <h4>수정페이지</h4>
            <form action="/api/editArticle" method = 'POST'>
                <input name='title' defaultValue = {result.title}type='text'/>
                <textarea name='content'defaultValue = {result.content} rows="5" cols="10"/>
                <input id = "idValue" name = "_id" defaultValue = {result._id.toString()}/>
                <button id='article_button' type="submit">글 작성하기</button>
            </form>
        </div>
    )
}