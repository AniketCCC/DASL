import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import save_icon from '../assets/save.svg';
import back_icon from '../assets/arrow-back.svg';
import jpg1 from '../images/1.jpg'
import jpg2 from '../images/2.jpg'
import jpg3 from '../images/3.jpg'
import bent3 from '../images/Bent3.jpg'
import jpg4 from '../images/4.jpg'
import jpg5 from '../images/5.jpg'
import claw5 from '../images/Claw5.jpg'
import jpg6 from '../images/6.jpg'
import jpg7 from '../images/7.jpg'
import jpg8 from '../images/8.jpg'
import open8 from '../images/Open8.jpg'
import jpg9 from '../images/9.jpg'
import flat9 from '../images/Flat9.jpg'
import A from '../images/A.jpg'
import openA from '../images/OpenA.jpg'
import B from '../images/B.jpg'
import bentB from '../images/BentB.jpg'
import flatB from '../images/FlatB.jpg'
import openB from '../images/OpenB.jpg'
import C from '../images/C.jpg'
import flatC from '../images/FlatC.jpg'
import smallC from '../images/SmallC.jpg'
import D from '../images/D.jpg'
import E from '../images/E.jpg'
import F from '../images/F.jpg'
import G from '../images/G.jpg'
import H from '../images/H.jpg'
import J from '../images/J.jpg'
import I from '../images/I.jpg'
import openK from '../images/OpenK.jpg'
import L from '../images/L.jpg'
import M from '../images/M.jpg'
import openM from '../images/OpenM.jpg'
import N from '../images/N.jpg'
import openN from '../images/OpenN.jpg'
import O from '../images/O.jpg'
import flatO from '../images/FlatO.jpg'
import smallO from '../images/SmallO.jpg'
import P from '../images/P.jpg'
import Q from '../images/Q.jpg'
import R from '../images/R.jpg'
import S from '../images/S.jpg'
import T from '../images/T.jpg'
import U from '../images/U.jpg'
import V from '../images/V.jpg'
import bentV from '../images/BentV.jpg'
import W from '../images/W.jpg'
import X from '../images/X.jpg'
import openX from '../images/OpenX.jpg'
import Y from '../images/Y.jpg'
import ILY from '../images/ILY.jpg'
import Z from '../images/Z.jpg'
import Corna from '../images/Corna.jpg'

import inACircle from '../images/InACircle.jpg'
import upAndDown from '../images/UpAndDown.jpg'
import forward from '../images/Forward.jpg'
import backward from '../images/Backward.jpg'
import tapping from '../images/Tapping.jpg'
import backAndForth from '../images/BackAndForth.jpg'
import wiggle from '../images/Wiggle.jpg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
export function ParameterSelector({ name, active, onSelect, options}) {
  let pathname = "jpg" + options;
  return (
    <div>
    <p className="font-semibold">{name}:</p>
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-60 h-20 justify-center items-center rounded-md bg-white px-3 py-2 text-sm text-gray-900 shadow-sm border border-black-200 hover:bg-gray-50">
	        {active}
          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
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
        <Menu.Items className="absolute overflow-y-scroll h-80 right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
	        {options.map(option => 
	        <Menu.Item>
              {({ active }) => {
                var pathname = 'D:\\School Files\\Purdue\\DASL\\frontend\\src\\images\\1.jpg';
		            return (
                <button
                  onClick={() => onSelect(<img src={option[1]} alt={option[0]} width="50px" height="50px"/>)}
                  className={classNames(
                    active ? 'w-[100%] text-left bg-gray-100 text-gray-900' : 'w-[100%] text-left text-gray-700',
                    'w-[100%] text-left block px-4 py-2 text-sm'
                  )}
                >
		            <img src={option[1]} alt={option}></img>
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
            <ParameterSelector name={"Handshape"} active={handshape} onSelect={setHandshape} options={[["1", jpg1], ["2", jpg2], ["3", jpg3], ["Bent3", bent3], ["4", jpg4], ["5", jpg5], ["Claw5", claw5], ["6", jpg6], ["7", jpg7], ["8", jpg8], ["Open8", open8], ["9", jpg9], ["Flat9", flat9], ["A", A], ["OpenA", openA], ["B", B], ["BentB", bentB], ["FlatB", flatB], ["OpenB", openB], ["C", C], ["FlatC", flatC], ["SmallC", smallC], ["D", D], ["E", E], ["F", F], ["G", G], ["H", H], ["I", I], ["J", J], ["OpenK", openK], ["L", L], ["M", M], ["OpenM", openM], ["N", N], ["OpenN", openN], ["O", O], ["FlatO", flatO], ["SmallO", smallO], ["P", P], ["Q", Q], ["R", R], ["S", S], ["T", T], ["U", U], ["V", V], ["BentV", bentV], ["X", X], ["OpenX", openX], ["Y", Y], ["ILY", ILY], ["Z", Z], ["Corna", Corna]]}/>
            <ParameterSelector name={"Location"}  active={loc} onSelect={setLocation} options={["Forehead", "Chin", "Temples", "Nose", "Cheeks", "Lips", "Mouth", "Center of chest", "At shoulders", "Near shoulders", "Along arms", "Elbows", "At wrists", "Non-dominant hand", "Between hands", "Waist area", "Around legs", "Knees", "In front of torso", "To the left of torso", "To the right of torso", "Moving"]}/>
            <ParameterSelector name={"Movement"}  active={movement} onSelect={setMovement} options={[["In a circle", inACircle], ["Up and down", upAndDown], ["Forward", forward], ["Backward", backward], ["Tapping", tapping], ["Back and forth", backAndForth], ["Wiggle", wiggle]]}/>
          </div>)
}
