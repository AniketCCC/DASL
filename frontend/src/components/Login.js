import react, { useState } from 'react';


export default function Login() {


    return (
        <html>
            <div className="flex flex-col min-w-screen min-h-screen items-center align-middle container-snap">
                <h1 className="flex flex-row justify-center text-center text-6xl py-20 font-bold">Login</h1>

                <form>
                    <input name="Email" placeholder="Email" className="bg-gray-300 m-2 flex flex-col rounded-lg align-middle focus:ring-offset-white focus:border-offset-white justify-center w-80 h-12 p-3"/>
                    <input name="Password" placeholder="Password" className="bg-gray-300 m-2 flex flex-col rounded-lg align-middle focus:ring-offset-white focus:border-offset-white justify-center w-80 h-12 p-3"/>
                
                    <button></button>
                </form>
            </div>
        </html>
    );
}