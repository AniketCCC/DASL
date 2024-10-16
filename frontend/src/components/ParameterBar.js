import { Fragment, useState } from 'react'
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

export default function ParameterBar({handshape, loc, movement, setHandshape, setLocation, setMovement}) {
   return (<div className="flex justify-end">
            <ParameterSelector name={"Handshape"} active={handshape} onSelect={setHandshape} options={["1", "3", "Bent3", "4", "5", "Claw5", "6", "7", "8", "Open8", "9", "Flat9", "A", "OpenA", "B", "BentB", "FlatB", "OpenB", "C", "FlatC", "SmallC", "D", "E", "G", "H", "I", "J", "K", "OpenK", "L", "M", "OpenM", "N", "OpenN", "O", "OpenO", "SmallO", "R", "S", "T", "U", "V", "BentV", "X", "OpenX", "Y", "ILY", "Corna"]}/>
            <ParameterSelector name={"Location"}  active={loc} onSelect={setLocation} options={["Forehead", "Chin", "Temples", "Nose", "Cheeks", "Lips", "Mouth", "Center of chest", "At shoulders", "Near shoulders", "Along arms", "Elbows", "At wrists", "Non-dominant hand", "Between hands", "Waist area", "Around legs", "Knees", "In front of torso", "To the left of torso", "To the right of torso", "Moving"]}/>
            <ParameterSelector name={"Movement"}  active={movement} onSelect={setMovement} options={["In a circle", "Up and down", "Forward", "Backward", "Tapping", "Back and forth", "Wiggle"]}/>
          </div>)
}
