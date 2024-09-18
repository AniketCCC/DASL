import react, {useState, useEffect} from 'react'
import {useParams, useSearchParams} from 'react-router-dom'

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
	return (<div>
		{(!signs)?(<p>Empty sign list</p>):(<ul>{signs.map((sign) => <p>{sign["sign_name"]}</p>)}</ul>)} {/*Add key for list*/}
	       </div>);
}

