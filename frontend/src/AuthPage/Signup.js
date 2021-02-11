import React,{useState} from 'react'

function Signup(){


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userImg, setUserImg] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        const data = {
            username: { username },
            image: { userImg },
            password: { password }
        }
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => console.log(data));
    }
    
    return(

        <form className="new-user" onSubmit={handleSubmit}>
            <label for="name">username:</label>
            <input type="text" name="body" autoComplete="off" id="name" value={username} onChange={username => setUsername(username.target.value)} />

            <label for="text">user image link:</label>
            <input type="text" name="body" autoComplete="off" value={userImg} onChange={img => setUserImg(img.target.value)} />

            <label for="password">password:</label>
            <input type="password" name="body" autoComplete="off" value={password} onChange={password => setPassword(password.target.value)} />

            <input type="submit" value="Sign-Up"></input>
        </form>
    )
}

export default Signup