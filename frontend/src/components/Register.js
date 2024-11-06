import react, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import back_icon from '../assets/arrow-back.svg';

import Cookies from "universal-cookie";



export default function Register() {
    
    const navigator = useNavigate();
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

		const cookies = new Cookies();

		function getCSRF (){
		fetch("https://dasl-fcef5d1148ef.herokuapp.com/api/get_csrf/", {
				credentials: "include",
				withCredentials: true,	
			})
			.then((res) => {
				let csrfToken = res.headers.get("X-Csrftoken");
				cookies.set('csrf', csrfToken, {path: '/', secure: true, httpOnly: false, sameSite: 'None'});
				//this.setState({csrf: csrfToken});
				//console.log(res.headers.get("X-Csrftoken"));
				//console.log(csrfToken);
			})
			.catch((err) => {
				console.log(err);
			});
		}

    async function register(e) {
        e.preventDefault();
        //data to be sent in POST
        const postData = {
            'username': name,
            'email': email,
            'password': password
        };

        //fetch request
				getCSRF();
				console.log(cookies.get());
				const csr = cookies.get("csr");
				console.log(csr);
        fetch('https://dasl-fcef5d1148ef.herokuapp.com/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
						    "X-CSRFToken": cookies.get("csrf")
            },
						credentials: "include",
            body: JSON.stringify(postData)
        }).then(response => {
            if(!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }).then(data => {
            console.log("Sign up successful!");
            //handle successful response
        }).catch(error => {
            console.error("There was a problem with the POST request:", error);
            //handle error
        });
    }

    return (
        <div>
            <div>
                <div className="flex flex-col min-w-screen min-h-screen items-center align-middle justify-center container-snap">
                    <h1 className="flex flex-row justify-center text-center text-6xl mb-20">Sign Up</h1>

                    <form className="flex flex-col items-center justify-center align-middle" onSubmit={register}>
                        <input name="Name" placeholder="Name" className="bg-gray-300 m-2 flex flex-col rounded-lg align-middle focus:ring-offset-white focus:border-offset-white justify-center w-80 h-12 p-3" value={name} onChange={e => setName(e.target.value)}/>
                        <input name="Email" placeholder="Email" className="bg-gray-300 m-2 flex flex-col rounded-lg align-middle focus:ring-offset-white focus:border-offset-white justify-center w-80 h-12 p-3" value={email} onChange={e => setEmail(e.target.value)}/>
                        <input name="Password" placeholder="Password" type="password" className="bg-gray-300 m-2 flex flex-col rounded-lg align-middle focus:ring-offset-white focus:border-offset-white justify-center w-80 h-12 p-3" value={password} onChange={e => setPassword(e.target.value)} />

                        <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center me-2 mt-20 mb-2">Sign Up</button>    
                    </form>
                </div>

                <div className="fixed bottom-0 right-0 p-20">
                    <Link to="/">
                        <button className="w-24 h-24 rounded-lg flex justify-center items-center border border-black-200 shadow-lg hover:bg-slate-200">
                            <img src={back_icon} alt="Back"/>
                        </button>
                    </Link>
                </div>
            </div>
            </div>
    );
}
