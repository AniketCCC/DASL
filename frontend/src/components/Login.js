import react, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import back_icon from '../assets/arrow-back.svg';
import Cookies from "universal-cookie";



export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

		const cookies = new Cookies();

		function getCSRF (){
		fetch("https://dasl-fcef5d1148ef.herokuapp.com/api/get_csrf/", {
				credentials: "include",
			})
			.then((res) => {
				let csrfToken = res.headers.get("X-CSRFToken");
				//this.setState({csrf: csrfToken});
				console.log(csrfToken);
			})
			.catch((err) => {
				console.log(err);
			});
		}

    async function login(e) {
        e.preventDefault();
				getCSRF();
				fetch("https://dasl-fcef5d1148ef.herokuapp.com/api/login/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"X-CSRFToken": cookies.get("csrftoken"),
					},
					credentials: "include",
					body: JSON.stringify({username: email, password: password}),
				}).then(response => {
      	if (!response.ok) {
        	throw new Error('Network response was not ok');
      	}
      		return response.json();
    		})
				//.then(this.isResponseOk)
				.then((data) => {	
					console.log(data);
					navigate('/search');
					//this.setState({isAuthenticated: true, username: "", password: "", error: ""});
				})
				.catch((err) => {
					console.log(err);
					//this.setState({error: "Wrong username or password."});
				});
  	}   

    return (
								<div>
                <div className="flex flex-col min-w-screen min-h-screen items-center align-middle justify-center container-snap">
                    <h1 className="flex flex-row justify-center text-center text-6xl mb-20">Login</h1>

                    <form className="flex flex-col items-center justify-center align-middle" onSubmit={login}>
                        <input name="Email" placeholder="Email" className="bg-gray-300 m-2 flex flex-col rounded-lg align-middle focus:ring-offset-white focus:border-offset-white justify-center w-80 h-12 p-3" value={email} onChange = {e => setEmail(e.target.value)}/>
                        <input name="Password" placeholder="Password" type="password" className="bg-gray-300 m-2 flex flex-col rounded-lg align-middle focus:ring-offset-white focus:border-offset-white justify-center w-80 h-12 p-3" value={password} onChange = {e => setPassword(e.target.value)}/>
                    
                        <button className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center me-2 mt-20 mb-2">Login</button>    
                    </form>
                    <h3 className="m-4 ">Don't have an account? <Link to="/register" className="text-blue-300 hover:text-blue-500 focus:text-blue-700">Sign Up Here.</Link></h3>
                </div>

                <div className="fixed bottom-0 right-0 p-20">
                    <Link to="/">
                        <button className="w-24 h-24 rounded-lg flex justify-center items-center border border-black-200 shadow-lg hover:bg-slate-200">
                            <img src={back_icon} alt="Back"/>
                        </button>
                    </Link>
                </div>
								</div>
    );
}
