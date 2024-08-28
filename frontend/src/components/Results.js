import react, {useState, useEffect} from 'react'
import {useParams, useSearchParams} from 'react-router-dom'

export default function Results() {
	//const [searchParams, setSearchParams] = useSearchParams();
	const ASLParameters = useSearchParams();
	//const ASLParameters = new URL(document.location).searchParameters;
	/*	
	const signs = [];
	useEffect(() => {
	      fetch('http://localhost:8000/api/signs?' + searchParams, {
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
	      console.log('Sign upload successful:', data);
	      // Handle successful response here
	    })
	    .catch(error => {
	      console.error('There was a problem with the POST request:', error);
	      // Handle error here
	    })}
, []);*/
	return (<div>
		<p>{ASLParameters.entries()[0]}</p>
	       </div>);
}

