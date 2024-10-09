import react, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'



export default function Login() {
    const navigator = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function Login(e) {
        e.preventDefault();

        
    }

    return (
        <html>
            <body>
                <div className="flex flex-col min-w-screen min-h-screen items-center align-middle justify-center container-snap">
                    <h1 className="flex flex-row justify-center text-center text-6xl mb-20">Login</h1>

                    <form className="flex flex-col items-center justify-center align-middle">
                        <input name="Email" placeholder="Email" className="bg-gray-300 m-2 flex flex-col rounded-lg align-middle focus:ring-offset-white focus:border-offset-white justify-center w-80 h-12 p-3"/>
                        <input name="Password" placeholder="Password" type="password" className="bg-gray-300 m-2 flex flex-col rounded-lg align-middle focus:ring-offset-white focus:border-offset-white justify-center w-80 h-12 p-3"/>
                    
                        <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-8 py-2.5 text-center me-2 mt-20 mb-2">Login</button>    
                    </form>
                    <h3 className="m-4 ">Don't have an account? <Link to="/register" className="text-blue-300 hover:text-blue-500 focus:text-blue-700">Sign Up Here.</Link></h3>
                </div>
            </body>
        </html>
    );
}