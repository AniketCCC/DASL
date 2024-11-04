import React, { useState, useEffect } from 'react';
import { Link, useParams} from 'react-router-dom';
import { ReactMediaRecorder } from 'react-media-recorder';

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import save_icon from '../assets/save.svg';
import back_icon from '../assets/arrow-back.svg';

import Cookies from "universal-cookie";


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function ParameterDisplay({ name, value}) {
  return (
    <div>
    <p className="font-semibold">{name}:</p>
    <div className="relative inline-block text-left">
      <div>
        <div className="inline-flex w-60 h-14 items-center justify-center rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm border border-black-200 hover:bg-gray-50">
	  {value}
        </div>
      </div>
    </div>
    </div>
  )
}

export default function Sign() {
  // English translation
	//const [ASLParameters, setSearchParams] = useSearchParams();
	let { sign } = useParams();

	//const ASLParameters = useSearchParams();
	//const ASLParameters = new URL(document.location).searchParameters;
	const [signs, setSigns] = useState(null);

	const cookies = new Cookies();

	{/*TODO: Consistent casing*/}
	useEffect(() => {
	      fetch('http://localhost:8000/api/sign/?id=' + sign,
		
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
, [sign]);


  const [translation, setTranslation] = useState('');
  // Recorded video URL
  const [videoUrl, setVideoUrl] = useState(null);
  const [handshape, setHandshape] = useState(null);
  const [flexion, setFlexion] = useState(null);
  const [signType, setSignType] = useState(null);
  const [majorLocation, setMajorLocation] = useState(null);
  const [minorLocation, setMinorLocation] = useState(null);


  const handleSave = () => {
    // Data to be sent in the POST request
    const postData = {
	'sign_name': translation,
    	'handshape': handshape,
	'flexion': flexion,
	'sign_type': signType,
	'major_location': majorLocation,
	'minor_location': minorLocation
    };

    // Fetch POST request
    fetch('http://localhost:8000/api/signs/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
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
    });
  };
  if(signs === null) {
    return (<html></html>);
  }
  return (
	  <div className="display:flex">
		<div className = "flex justify-start px-40 py-20">
			<video src={signs[0].video} type="video/mp4" controls/>
		</div>
   <div className="absolute display:flex top-0 right-0 container mx-auto py-20">
	  <div className="flex justify-end px-60">
		 <ParameterDisplay name={"Handshape"}      value={signs[0].handshape}/>
	   <ParameterDisplay name={"Location"}        value={signs[0].location}  />
		 <ParameterDisplay name={"Movement"}      value={signs[0].movement}    />
	  </div>
    <div className="flex justify-end px-60 py-12">
     <form class="bg-white w-96 border border-black-500 shadow-md rounded-lg px-12 pt-6 pb-8 mb-4">
     <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="English">
        English Translation
      </label>
      <div class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{signs[0].sign_name}</div>
     </div> 
     </form>
    </div>
    <div class="absolute top-0 left-0 p-20">
  </div>
    <div class="fixed bottom-0 right-0 p-20">
	<Link to="/">
	<button class="w-24 h-24 rounded-lg flex justify-center items-center border border-black-200 shadow-lg hover:bg-slate-200">
	<img src={back_icon} alt="Back"/>
	</button>
    </Link>

    </div>
    <div class="fixed bottom-0 right-0 p-20">
      <Link to="/search">
        <button class="w-24 h-24 rounded-lg flex justify-center items-center border border-black-200 shadow-lg hover:bg-slate-200">
          <img src={back_icon} alt="Back"/>
        </button>
      </Link>
    </div>
	</div>
  </div>
  );
};
