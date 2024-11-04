import {react, useState} from 'react'
import { Link } from 'react-router-dom';

export default function Open() {

    return(
        <div>
        <link href='https://fonts.googleapis.com/css?family=Jacques Francois' rel='stylesheet'></link>
            <div>
                <div className="flex flex-col min-w-screen min-h-screen items-center align-middle justify-center container-snap">
                    <h2 className="flex flex-row justify-center text-center text-3xl">Dictionary of</h2>
                    <h1 className="flex flex-col justify-center text-center text-5xl mb-20">American Sign Language</h1>
                    <Link to="/Login" className="bg-blue-300 m-2 flex flex-col rounded-lg align-middle justify-center w-60 h-12 p-3">
                        <p className="flex flex-col justify-center align-middle text-center text-2xl font-serif">Login</p>
                    </Link>
                    <Link to="/Register" className="bg-blue-300 m-2 flex flex-col rounded-lg align-middle justify-center w-60 h-12 p-3">
                        <p className="flex flex-col justify-center align-middle text-center text-2xl font-serif">Sign Up</p>
                    </Link>

                    <h2 className="flex flex-row justify-center text-center mt-20 text-3xl">Indiana School of the Deaf</h2>
                    
                </div>
            </div>

        </div>
    )
}
