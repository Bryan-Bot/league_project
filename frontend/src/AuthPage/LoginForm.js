import React,{useState} from 'react'

function LoginForm({Login, error}) {

    const [details, setDetails] = useState({username:"", image:"",password:""})


     function handleSubmit(e) {
        e.preventDefault()
        Login(details)
    }
    //     const data = { user
    //     }
    //     fetch("http://localhost:3000/users", {
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(response => response.json())
    //         .then(data => console.log(data));
    // }

    return (
    <form onSubmit={handleSubmit}>
        <div className="form-inner">
            <h2>Login</h2>
            {(error != "")?(<div className="error">{error}</div>): ""}
            <div className="form-group">
                <label htmlFor="name">Username:</label>
                <input type="text" name="name" id="name" onChange={e=>setDetails({...details, username: e.target.value})} value={details.username}></input>
            </div>
            <div className="form-group">
                <label htmlFor="image">Image Url:</label>
                    <input type="text" name="image" id="image" onChange={e => setDetails({ ...details, image: e.target.value })} value={details.image}></input>
            </div>
            <div className="form-group">
                <label htmlFor="password">password:</label>
                    <input type="password" name="password" id="password" onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password}></input>
            </div>
            <input type="submit" value="LOGIN"/>
        </div>
    </form>
    )
}

export default LoginForm
