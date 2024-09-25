import react, {useState, useEffect} from 'react'
import {useParams, useSearchParams} from 'react-router-dom'

import {Link} from 'react-router-dom';

export default function Results() {
	const [ASLParameters, setSearchParams] = useSearchParams();
	//const ASLParameters = useSearchParams();
	//const ASLParameters = new URL(document.location).searchParameters;
	const [signs, setSigns] = useState(null);
	{/*TODO: Consistent casing*/}
	useEffect(() => {
	      fetch('http://localhost:8000/api/signs/?handshape=' + ASLParameters.get("handshape") + 
		      				   '&flexion='   + ASLParameters.get("flexion")   +
						   '&sign_type='   + ASLParameters.get("signType")   +
						   '&major_location='   + ASLParameters.get("majorLocation")   +
						   '&minor_location='   + ASLParameters.get("minorLocation")   ,
		
	    {
	      method: 'GET',
	      headers: {
		'Content-Type': 'application/json'
	      },
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
	return (<div class="flex flex-col items-center justify-center">
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
		);
}

