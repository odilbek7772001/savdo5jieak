import Image from "next/image";
import Link from "next/link";

// images
import Logo from "../../public/logo.jpg";
import Img1 from "../../public/UzAuto-01.png";
import Phone from "../../public/telephone.png";
import mail from "../../public/mail.png";
import adress from "../../public/adress.png";


export default function Footer() {
    return(
        <section className="bg-slate-200 mt-10">
            <div className="container">
                <footer className="flex justify-between ">
                    <div className="mt-10">
                        <Image className="rounded-lg block " src={Logo} width={200}  alt="logo"/>
                        <p className="w-96 mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa ut, voluptatem qui voluptate pariatur quia error laboriosam reiciendis omnis tempora?</p>
                    </div>
                    <ul className="flex mt-10">
                        <li className="mr-10"><Link className=" text-black font-bold  " href="#cars">Avtomobillar</Link></li>
                        <li className="mr-10"><Link className="text-black font-bold" href="/dilers">Dillerlar</Link></li>
                        <li className=""><Link className="text-black font-bold" href="/vehicles">Mavjud avtomobil</Link></li>
                    </ul>
                    <div className="mt-10">
                        <h4 className="text-[20px] mb-4">Kontaktlar</h4>
                        <div className="flex">
                            <Image  src={Phone} width={20} height={20} alt="phone" />
                            <a className="block ml-2" href="tel:+998911117711">+998911117711</a>
                        </div>
                        <div className="flex mt-3">
                            <Image src={mail} width={20} height={20} alt="mail" />
                            <a className="ml-2" href="mailto:someone@example.com">info@uzautomotors.com</a>
                        </div>
                        <address className=" w-56 flex mt-3">
                            <Image src={adress} width={25} height={25} alt="address" />
                            <p className="ml-2">Navoiy viloyati qiziltepa</p>
                        </address>
                    </div>
                </footer>
            </div>
        </section>
    )
}