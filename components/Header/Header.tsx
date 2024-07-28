import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MdOutlineDarkMode } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"



// images
import Logo from "../../public/logo.jpg";
import Img2 from "../../public/enter.png";


export default function Header() {

    // const { theme, setTheme } = useTheme();

    // const currentTheme = theme === 'system' ? systemThem : theme

    return (
        <section className="bg-slate-500">
            <div className="container">
                <header className="flex justify-between items-center pt-4">
                    <Link href={'/'}><Image className="header__image rounded-lg block bg-transparent" src={Logo} width={200}  alt="logo" /></Link>
                    <ul className="flex">
                        <li className="mr-10"><Link className=" text-white font-bold  group-hover:bg-white  " href="#cars">Qurilish maxsulotlari</Link></li>
                        <li className="mr-10"><Link className="text-white font-bold" href="/dilers">Maktab jixozlari</Link></li>
                        <li className=""><Link className="text-white font-bold" href="/vehicles">Uy jixozlari</Link></li>
                    </ul>
                    <div className="flex items-center">
                        {/* <CgDarkMode className="w-12 h-12 mt-3 mr-5" /> */}
                        <MdOutlineDarkMode className="w-12 h-12 mt-3 mr-5" />
                        <select className="border-solid border-2 border-white-600 mr-8 rounded-lg bg-transparent font-bold text-white h-11">
                            <option className="text-black" value="uz">uz</option>
                            <option className="text-black" value="ru">ru</option>
                            <option className="text-black" value="en">en</option>
                        </select>


                        <Dialog>
                            <DialogTrigger>
                                <div className="flex border-solid border-2 border-white-600 p-2 rounded-lg bg-transparent font-bold text-white">
                                    <Image className="mr-2" src={Img2} width={20} height={20} alt="icon" /> <span>Kirish</span>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="w-64 h-auto">
                                <DialogHeader>
                                    <DialogTitle>Tasdiqlash codini <br /> kiriting</DialogTitle>
                                    <hr />
                                    <DialogDescription>
                                        <div className="">
                                            <label className="text-black line-through" htmlFor="">{"IHHN5456WSDW"}</label>
                                            <input className="text-black bg-white p-2 border-solid border-2 border-slate-900" type="text"/>
                                            <a className="text-blue-400 underline mt-3 mb-3 block" href="">Men shaxsiy ma'lumotlarimni uzatishga roziman</a>
                                            <hr />
                                            <button className="mt-5 ml-2 p-2 bg-blue-400 text-white">Tasdiqlash codini yuboring</button> 
                                            <button className="text-black mt-4 ml-24">Kodni yangilash</button> 
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                </header>
               
            </div>

            
        </section>
    )
}