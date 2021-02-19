import React,{useState}  from 'react'
import LoginForm from './LoginForm'

function Auth(){
    const [user, setUser] = useState({username:"",image:"",password:""})
    const [error, setError] = useState("")

    const adminUser={
        username: 'brunoLie',
        image: 'https://media.comicbook.com/2020/05/bucciarati-lego-golden-wind-1221300-1280x0.jpeg',
        password: '12345'
    }

    function Login (details){
        console.log(details)
        if (details.username == adminUser.username && details.password == adminUser.password) { 
            console.log("logged in");
            window.localStorage.setItem("userId", 2)

            setUser({
                username: details.username,
                image: details.image,
            }
            )
        }else{
            
            setError("Details Do Not Match!")
        }
        
    }

    function Logout () {
        setUser({ username: "", image: "", password: ""})
    }

    return (

        <div>
            <div id="navbar">
                <ul id="navUl">
                    <li className="navList"><a href="http://localhost:3001/loggedin">Champions</a></li>
                    <li className="navList"><a href="#">Login</a></li>
                    
                </ul>
            </div>
            {(user.username != "") ? (
                <div className="welcome">
                    <h2>Welcome, <span>{user.username}</span></h2>
                    <button onClick={Logout}>Logout</button>
                </div>
            ):(<LoginForm Login={Login} error={error}/>)}

        </div>
        
        )
        {/* <form className="new-user" onSubmit={handleSubmit}>
            <label for="name">username:</label>
            <input type="text" name="body" autoComplete="off" id="name" value={username} onChange={username => setUsername(username.target.value)} />

            <label for="text">user image link:</label>
            <input type="text" name="body" autoComplete="off" value={userImg} onChange={img => setUserImg(img.target.value)} />

            <label for="password">password:</label>
            <input type="password" name="body" autoComplete="off" value={password} onChange={password => setPassword(password.target.value)} />

            <input type="submit" value="Sign-Up"></input>
            
            
        </form>
        <button><a href="#">Sign Up</a></button>
        <p>or</p>
        <button><a href="#">Login</a></button> */}
        
    
    

  
}

export default Auth;