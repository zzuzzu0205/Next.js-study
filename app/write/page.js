

export default function Write(){
   
    return(
        <div>

            <h4>글작성</h4>
            <form action="/api/createArticle" method = 'POST'>
                <input name='title' placeholder='글제목' type='text'/>
                <textarea name='content' placeholder='글내용' rows="5" cols="10"/>
                <button id='article_button' type="submit">글 작성하기</button>
            </form>


            <form action="/api/test" method = 'POST'>
                <button type="submit">POST버튼</button>
            </form>
            <form action="/api/test" method = 'GET'>
                <button type="submit">시간확인하기</button>
            </form>
            <form action="/api/list" method = 'GET'>
                <button type="submit">GET버튼</button>
            </form>
            
        </div>
    )
}