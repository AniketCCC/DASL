import react, {useState, useEffect} from 'react'
import {useParams, useSearchParams} from 'react-router-dom'
import back_icon from '../assets/arrow-back.svg';
import Cookies from "universal-cookie";


import {Link} from 'react-router-dom';

export default function Results() {
	const [ASLParameters, setSearchParams] = useSearchParams();
	//const ASLParameters = useSearchParams();
	//const ASLParameters = new URL(document.location).searchParameters;
	const [signs, setSigns] = useState(null);
	{/*TODO: Consistent casing*/}

	const cookies = new Cookies();

	useEffect(() => {
	      fetch('https://dasl-fcef5d1148ef.herokuapp.com/api/signs/?handshape=' + ASLParameters.get("handshape") + 
		      		 '&location='   + ASLParameters.get("location")   +
						   '&movement='   + ASLParameters.get("movement"),
		
	    {
	      method: 'GET',
				
	      headers: {
          'Content-Type': 'application/json',
          "X-CSRFToken": cookies.get("csrftoken"),
				},
				credentials: "include",

	    })
	    .then(response => {
	      if (!response.ok) {
		throw new Error('Network response was not ok');
	      }
	      return response.json();
	    })
	    .then(data => {
		setSigns(data);
	        console.log('Sign request successful:', data);
	      // Handle successful response here
	    })
	    .catch(error => {
	      console.error('There was a problem with the GET request:', error);
	      // Handle error here
	    })}
, [ASLParameters]);
	return (
	<div>
	<div class="flex flex-col items-center justify-center">
		<h1 class="font-semibold font-16">Matching Signs:</h1>
		<div>
		{(!signs)
			?(<p>Empty sign list</p>)
			:(	<ul class="list-none">
				{signs.map((sign) => <li><Link to={"/sign/" + sign["id"]} state={sign}>
					<button class = "w-48 px-4 py-2 text-sm text-black-600 rounded-xl border border-black-200 hover:bg-slate-200 text-2xl">
						{sign["sign_name"]}
					</button></Link>
					</li>)}
			 	</ul>
			)
		} {/*Add key for list*/}
	 	</div>
	       </div>

		<div class="fixed bottom-0 right-0 p-20">
                    <Link to="/search">
                        <button class="w-24 h-24 rounded-lg flex justify-center items-center border border-black-200 shadow-lg hover:bg-slate-200">
                            <img src={back_icon} alt="Back"/>
                        </button>
                    </Link>
        </div>
		</div>
		);
}

