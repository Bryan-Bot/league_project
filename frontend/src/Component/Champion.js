import React,{useState} from 'react'

function Champion({key}) {
    const [comment, setComment] = useState('')

    function handleComment(e) {
        e.preventDefault()

        const data = { comments: comment }

        fetch("http://localhost:3000/champions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(r => r.json())
            .then(data => console.log(data))
    }
    
    
    return (
            <div className="col-3" key={key.id}>
                <img src={key.image} alt={key.name} height='100px' />
                <br />
                <h2>{key.name}</h2>
                <label>Add Comment</label>
                <br />
                <input type="text" onChange={(e) => setComment(e.target.value)}></input>
                <br />
                <button onClick={handleComment}>Add Comment</button>
                <ul>
                    {key.comments.map((comment) => 
                        <li>{comment}</li>)
                    }
                </ul>
                <hr />
            </div>
    )
}

export default Champion
