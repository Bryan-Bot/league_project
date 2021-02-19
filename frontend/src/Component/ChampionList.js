import React, {useState, useEffect} from 'react'
import Comment from './Comment'
import Champion from './Champion';


function ChampionList(){
    const [champions, setChampions] = useState([])
    const [champion, setChampion] = useState({comments: []})
    const [comment, setComment] = useState('')
    const [updatedComment,setUpdatedComment]= useState(comment.comment)
    const [currentUser, setCurrentUser]= useState({champions: []})

    
    
    

    useEffect(() => {
        fetch('http://localhost:3000/champions')
            .then(response => response.json())
            .then(data => setChampions(data));

        fetch('http://localhost:3000/users/9')
            .then(response => response.json())
            .then(data => setCurrentUser(data));
    }, [])
    console.log(champions.map((champion)=>champion.comments))





    function revealInput(){
        console.log("hello")
    }

    function handleComment(e, key) {
       e.preventDefault()
        
        // const userId = window.localStorage.getItem("userId")
        // Hard coding user until we have a login
        
        const data = {comment: comment, user_id: 9, champion_id: key.id}

        fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(r => r.json())
            .then(resData => {
                fetch(`http://localhost:3000/champions/${key.id}`)
                    .then(response => response.json())
                    .then(data => setChampion(data));
                
            })
            console.log(data)
    }

    function handleUpdate(e , comment, updatedComment){   
        e.preventDefault()
        
        console.log('comment', comment)

        // const commentObj = {comment: comment.comment}
        const commentObj = {comment: updatedComment}
        console.log('commentOBJ', commentObj)

        fetch(`http://localhost:3000/comments/${comment.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(commentObj)
        })
            .then(response => response.json())
            .then(comment => {
                fetch(`http://localhost:3000/champions/${champion.id}`)
                .then(response => response.json())
                .then(data => setChampion(data));

            })
        
            
            // .then(data => {
            //     console.log("TEST", data)
            //     setComment(data)
            // })
       
            

        //refresh update
        //grab value from user input field
    }

    function handleDelete(e, comment){
        e.preventDefault()
        console.log(comment)
        fetch(`http://localhost:3000/comments/${comment.id}`, {
            method: "DELETE"
    })
    .then(res => res.json())
    .then(data => {
        fetch(`http://localhost:3000/champions/${data.champId}`)
        .then(response => response.json())
        .then(data => setChampion(data));
    })

    }

    function handleFavorite(e, key){
        e.preventDefault()

        
        // const userId = window.localStorage.getItem("userId")
        // Hard coding user until we have a login

        const data = { 

            user_id: 9,
            champion:{champion}  }

        fetch("http://localhost:3000/users/9", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(r => r.json())
            .then(resData => {
                fetch(`http://localhost:3000/users/9`)
                    .then(response => response.json())
                    .then(data => setChampion(data));

            })
        console.log(data)
    }















    // console.log(comment)

    const champs = champions.map ( (key) => 
        <div className="cards" key={key.id} onClick={()=>setChampion(key)}>
            <br />
            <img className='image' src={key.image} alt={key.name} />
                <br />
            <h2>{key.name}</h2>
            <img src="https://img.icons8.com/material-sharp/24/000000/like--v2.png" />
        </div>
    )
    
    const favoriteChamps = currentUser.champions.map((key) =>
        <div className="fav-cards" key={key.id} onClick={() => setChampion(key)}>
            <br />
            <img className='image fav-image' src={key.image} alt={key.name} />
            <br />
            <h2>{key.name}</h2>
        </div>
    )

    const champ = () => {
    // replace the word "key" with the current champ saved in state
        {console.log(champion)}

        return(<div className="champion-show" key={champion.id}>
            <br />
            <img className='single-image' src={champion.image} alt={champion.name} />
                <br />
            <h2>{champion.name}</h2>
            <label>Add Comment</label>
                <br />
           <input type="text" onChange={(e)=>setComment(e.target.value)}></input>
                <br />
                <br />
            <button className="comment button" onClick={(e) => handleComment(e, champion)}>Add Comment</button>
           <ul>
            {champion.comments.map((comment)=>
            <div>
                    <Comment updatedComment={updatedComment} setUpdatedComment={setUpdatedComment} handleUpdate={handleUpdate} handleDelete={handleDelete} comment={comment} />
                    
            </div>
                )}   
           </ul>
            <button className="button" onClick={(e) => handleFavorite(e, champion)}>Favorite</button>
        </div>)
    }

    return(
        <div>
        <div id="navbar">
                <ul id="navUl">
                    <li className="navList" id='right-side'><a href="http://localhost:3001/auth"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO6NtEZkrWDnFZIWifE5KoN257rCSrhy7T7A&usqp=CAU" height='15px'></img></a></li>
                    <li className="navList"><a href="http://localhost:3001/loggedin">Champions</a></li>
                    <li className="navList"><a href="http://localhost:3001/auth">Logout</a></li>
                    
                    
                </ul>
            </div>
        <div className="main-container">
            <div class="side-scroll">
                {champs}
            </div>
            {/* <div class="favorite-list">
                {favoriteChamps}
            </div> */}
            <div class="single-champ">
                {champ()}
            </div>
        </div>
        </div>
    )
}
 
export default ChampionList