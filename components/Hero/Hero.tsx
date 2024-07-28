import Link from "next/link";


export default function Hero() {
    return(
        <section className="bg-car bg-cover bg-no-repeat bg-center w-[100%] h-[600px] bg-slate-500 pt-5">
            <div className="container">
                <div className="hero">
                        <h1 className="text-[50px] font-bold text-white text-center mt-40">Koloniya qurilish maxsulotlari</h1>

                        <Link className="border-solid border-2 border-white p-4 font-bold rounded-lg flex justify-center text-center mt-24 m-auto w-56 text-white" href="/order">Online buyurtma berish</Link>
                    </div>
                </div>
        </section>
    )
}