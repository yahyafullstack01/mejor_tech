import styles from "./navbar.module.css"
import { BsGlobe } from 'react-icons/bs';
import Link from "next/link";

export default function header() {
    
    return (
        <div className={styles.container}>
            <img src="/logo.png"
                alt="The Logo of the company"
                className="w-36"
            />
            <nav className="flex w-96 justify-between">
                <Link passHref href="" className="text-xl text-white">About</Link>
                <Link passHref href="" className="text-xl text-white">Our Work</Link>
                <Link passHref href="" className="text-xl text-white">Team</Link>
                <Link passHref href="" className="text-xl text-white">Contact Us</Link>
            </nav>
            <div className="flex items-center ">
                <BsGlobe className="text-xl text-white "/>
                <select className="bg-transparent text-white outline-none">
                    <option className="" value="en">English</option>
                    <option value="ab">Arabic</option>
                    <option value="ru">Russian</option>
                </select>
            </div>
        </div>
    )
}