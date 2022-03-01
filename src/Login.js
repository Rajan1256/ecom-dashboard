import Header from './Header'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            history('/add');
        }
    }, [])

    async function userlogin() {

        let item = { email, password }

        let result = await fetch("http://127.0.0.1:8000/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        })

        result = await result.json();
        console.log(result)
        localStorage.setItem('user-info', JSON.stringify(result));
        if (result == "1") {
            alert("Username or password is not matched");
        }
        else {
            history('/add')
        }

    }
    return (
        <>
            <Header />
            <div className='col-sm-6 offset-sm-3'>
                <h1>Login</h1>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' />
                <br />
                <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' />
                <br />
                <button onClick={userlogin} className='btn btn-primary'>Login</button>
            </div>
        </>
    )
}

export default Login;