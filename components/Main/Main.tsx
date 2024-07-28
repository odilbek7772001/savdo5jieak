"use client"; 

import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

import ConstructionProducts from "@/database/constructionsTools";
import Link from "next/link";

export default function Main() {

    const [schoolData , setSchoolData] = useState(["Hello"])

    useEffect(()=> {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => setSchoolData(data))
    },[])

    return(
        <section>
            <div className="container">
                <main className="mt-5">
                    <div className="">
                        <div className="">
                            <h1 className="font-bold text-[35px] text-center">Qurilish maxsulotlari</h1>
                            <ul className="flex justify-between flex-wrap">
                                {
                                    ConstructionProducts?.map(item => {
                                        return(
                                            // <Link href={'/description'}>
                                                <li id="cars" key={item.id} className="p-5 border-solid border-2 rounded mt-5 hover:shadow-lg ">
                                                <Image className="mb-4 w-[100%] h-auto" src={item.image} width={250} alt=""/>
                                                <h2 className="mb-2 font-bold">{item.name}</h2>
                                                <div className="mb-2">{item.massa}</div>
                                                <span className="text-blue-600 block mb-1 line-through">{item.price}</span>
                                                <span className="text-blue-600">{item.discount}</span>
                                                <Link className="w-40 p-2 rounded-lg block mt-4 bg-cyan-700 text-white font-bold" href={'/description'}>Buyurtma berish</Link>
                                                </li>
                                            // </Link>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <div className="">
                            <h1 className="font-bold text-[35px] text-center mt-5">Maktab jixozlari</h1>
                            <ul className="flex justify-between flex-wrap">
                                {
                                    ConstructionProducts?.map(item => {
                                        return(
                                            <li id="cars" key={item.id} className="p-5 border-solid border-2 rounded mt-5">
                                                <Image className="mb-4" src={item.image} width={250} height={200} alt=""/>
                                                <h2 className="mb-2 font-bold">{item.name}</h2>
                                                <div className="mb-2">{item.massa}</div>
                                                <span className="text-blue-600">{item.price}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}