import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactMediaRecorder } from 'react-media-recorder';

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import save_icon from '../assets/save.svg';
import back_icon from '../assets/arrow-back.svg';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function ParameterSelector({ name, active, onSelect, options}) {
  return (
    <div>
    <p className="font-semibold">{name}:</p>
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-60 h-10 justify-center rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm border border-black-200 hover:bg-gray-50">
	  {active}
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
	  {options.map(option => 
	    <Menu.Item>
              {({ active }) => {
		return (
                <button
                  onClick={() => onSelect(option)}
                  className={classNames(
                    active ? 'w-[100%] text-left bg-gray-100 text-gray-900' : 'w-[100%] text-left text-gray-700',
                    'w-[100%] text-left block px-4 py-2 text-sm'
                  )}
                >
		      {option}
                </button>
              );}}
            </Menu.Item>)}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
    </div>
  )
}

export default function Sign() {
  // English translation
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
 
  

  return (
    <div className="min-h-screen min-w-screen">
      <div className="absolute top-0 right-0 container mx-auto py-20">
        <div className="flex flex-row align-center justify-end container-snap">
          <div className="flex justify-end px-60">
            <ParameterSelector name={"Handshape"} active={handshape} onSelect={setHandshape} options={["1", "3"]}/>
            <ParameterSelector name={"Flexion"} active={flexion} onSelect={setFlexion} options={["Bent", "Crossed"]}/>
            <ParameterSelector name={"Sign Type"} active={signType} onSelect={setSignType} options={["Asymmetrical Different Handshape", "Asymmetrical Same Handshape"]}/>
            <ParameterSelector name={"Major Location"} active={majorLocation} onSelect={setMajorLocation} options={["Body", "Hand"]}/>
            <ParameterSelector name={"Minor Location"} active={minorLocation} onSelect={setMinorLocation} options={["Body Away", "Eye"]}/>
          </div>
        </div>
        
        <div className="flex justify-end px-60 py-12">
          <form class="bg-white w-96 border border-black-500 shadow-md rounded-lg px-12 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="English">
              English Translation
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={translation} onChange={e => setTranslation(e.target.value)}id="English" type="text" placeholder="English"/>
          </div> 
        </form>
        </div>
      </div>
      <div class="fixed top-0 right-0 p-20">
        <Link to="/add">
          <button class="w-24 h-24 rounded-lg flex justify-center items-center border border-black-200 shadow-lg hover:bg-slate-200" onClick={handleSave}>
            <img src={save_icon} alt="Save"/>
          </button>
        </Link>
      </div>
    <div class="inline-flex flex-col justify-center min-h-screen p-24">
      <ReactMediaRecorder
        onStop={() => {
          let tracks = navigator.mediaDevices.getUserMedia({video: true, audio: true}).getTracks();
          tracks.forEach(track => {
            track.stop();
          });
        }} 
        video render={({ status, startRecording, stopRecording, mediaBlobUrl }) => (
          <div>
            <button class="w-40 h-10 text-sm rounded-lg font-semibold flex justify-center items-center border border-black-500 hover:bg-slate-200" onClick={startRecording}>Start Recording</button>
            <button class="w-40 h-10 text-sm rounded-lg font-semibold flex justify-center items-center border border-black-500 hover:bg-slate-200" onClick={stopRecording}>Stop Recording</button>
            <video class="py-12" src={mediaBlobUrl} controls autoPlay loop />
            <p class="font-semibold">{status}</p>
          </div>
        )}
      />
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
};
