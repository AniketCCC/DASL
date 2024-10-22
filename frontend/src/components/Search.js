import search_icon from '../assets/search.svg';
import plus_icon from '../assets/plus.svg';
import '../App.css';
import ParameterBar from "./ParameterBar.js";
import { Link } from 'react-router-dom';


import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import save_icon from '../assets/save.svg';
import back_icon from '../assets/arrow-back.svg';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function ParameterSelector({ name, active, onSelect, options}) {
  return (
    <div>
    <p className="font-semibold">{name}:</p>
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-72 h-10 justify-center rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm border border-black-200 hover:bg-gray-50">
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
                    active ? 'w-[100%] text-left bg-gray-100 text-gray-900' : ' w-[100%] text-left text-gray-700',
                    'W-[100%] text-left block px-4 py-2 text-sm'
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

export default function Search() {
  const [handshape, setHandshape] = useState(null);
  const [flexion, setFlexion] = useState(null);
  const [signType, setSignType] = useState(null);
  const [majorLocation, setMajorLocation] = useState(null);
  const [minorLocation, setMinorLocation] = useState(null);


  return (
    <html>
    <body>
			<div>
      <div className="flex flex-row align-center justify-end min-w-screen">
        <span className="inline-flex justify-center text-center text-6xl py-20 px-16">Dictionary of American Sign Language</span>
        <span className="inline-flex p-20">
          <Link to="/add">  
            <button class="w-24 h-24 rounded-lg flex justify-center items-center border border-black-200 shadow-lg hover:bg-slate-200">
              <img src={plus_icon} alt="Add Sign"/>
            </button>
          </Link>
        </span>
      </div>
      <div className="flex flex-row justify-center">
        <div className="flex flex-row px-20 pb-20 mb-80">
					<ParameterBar handshape={handshape} loc={flexion} movement={signType} setHandshape={setHandshape} setLocation={setFlexion} setMovement={setSignType}/>
        </div>
      </div>

      <div class="absolute inset-x-0 bottom-0 h-28">
        <div class="flex justify-center">
          <button class="w-48 px-4 py-2 text-sm text-black-600 font-unbold rounded-l-xl border border-black-200 hover:bg-orange-400 text-2xl shadow-lg">Parameter Search</button>
          <button class="w-48 px-4 py-2 text-sm text-black-600 font-unbold rounded-r-xl border border-black-200 hover:bg-red-400 text-2xl shadow-lg">Tag Search</button>
        </div>
      </div>
      
      <div class="fixed bottom-0 right-0 p-20 container-snap">
        	<Link to={{
		pathname: "/results", search:   "?handshape=" + handshape +
			  "&location="   + flexion +
			  "&movement="   + signType}}>

          <button class="w-24 h-24 rounded-lg flex justify-center items-center border border-black-200 shadow-lg hover:bg-slate-200">
            <img src={search_icon} alt="Search"/>
          </button>
        </Link>
      </div>
			</div>
      </body>
    </html>
  );
}
