"use client"
import React, { useState } from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { IoChevronBackCircleOutline } from "react-icons/io5";
const SubMenu = () => {
    const [togle, steTogle] = useState(true)
    return (
        <div className='bg-menu'>
            <div className='flex w-full h-screen bg-sub-menu border-solid border-r-2 rounded-tl-3xl flex-col'>
                <div className={`flex w-60 h-20  content-center items-center justify-around transition-all duration-500 ${togle ? '-ml-60' : ' border-solid border-b-2'}`}>
                    <span className='flex text-teal-400'> <FaStarHalfAlt fill="var(--main)" size="2em" /></span>
                    <span className={togle ? 'text-[var(--sub-menu)]' : 'text-white'}>Filtros Salvos</span>
                    <span onClick={() => steTogle(!togle)} title={togle ? 'Mostrar filtros' : 'Esconder Filtros'} className={`-mr-9 rounded-full z-20 bg-sub-menu p-0 cursor-pointer ${togle && 'rotate-180'}`}> <IoChevronBackCircleOutline size="2em" fill="black" color="white" /></span>
                </div>
                <div className={`flex min-h-[80%] flex-col center justify-center itens-center content-center duration-700 transition-opacity  ${togle && 'hidden'}`}>
                    <div className='flex h-2/4 flex-col justify-around content-center items-center'>
                        <select name="type" id="type" className='h-8 w-48 outline-none rounded-xl border-solid border-2 border-white bg-sub-menu text-white text-center'>
                            <option value="fazer">fazer</option>
                            <option value="feito">feito</option>
                            <option value="pausado">pausado</option>
                            <option value="cancelado">fazer</option>
                            <option value="fazendo">fazer</option>
                        </select>
                        <select name="type" id="type" className='h-8 w-48 outline-none rounded-xl border-solid border-2 border-white bg-sub-menu text-white text-center'>
                            <option value="fazer">fazer</option>
                            <option value="feito">feito</option>
                            <option value="pausado">pausado</option>
                            <option value="cancelado">fazer</option>
                            <option value="fazendo">fazer</option>
                        </select>
                        <select name="type" id="type" className='h-8 w-48 outline-none rounded-xl border-solid border-2 border-white bg-sub-menu text-white text-center'>
                            <option value="fazer">fazer</option>
                            <option value="feito">feito</option>
                            <option value="pausado">pausado</option>
                            <option value="cancelado">fazer</option>
                            <option value="fazendo">fazer</option>
                        </select>
                        <select name="type" id="type" className='h-8 w-48 outline-none rounded-xl border-solid border-2 border-white bg-sub-menu text-white text-center'>
                            <option value="fazer">fazer</option>
                            <option value="feito">feito</option>
                            <option value="pausado">pausado</option>
                            <option value="cancelado">fazer</option>
                            <option value="fazendo">fazer</option>
                        </select>
                        <select name="type" id="type" className='h-8 w-48 outline-none rounded-xl border-solid border-2 border-white bg-sub-menu text-white text-center'>
                            <option value="fazer">fazer</option>
                            <option value="feito">feito</option>
                            <option value="pausado">pausado</option>
                            <option value="cancelado">fazer</option>
                            <option value="fazendo">fazer</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubMenu