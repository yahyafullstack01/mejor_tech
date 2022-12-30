import styles from "./navbar.module.css"
import { BsGlobe } from 'react-icons/bs';
import { TbEqual } from 'react-icons/tb';
import { RxCross1 } from 'react-icons/rx';
import Link from "next/link";

export default function header() {

    return (

        <div className={`${styles.container} ${"items-center justify-between flex"}`}>
            <Link passHref href="/">
                <img
                    src="/logo.png"
                    alt="The Logo of the company"
                    className={`${styles.logo}`}
                />
            </Link>
            <nav className={"sm:flex md:w-96 w-72 2xl:w-4/12 justify-between hidden"}>
                <Link passHref href="" className={`${styles.navigation} ${"text-sm md:text-xl  text-white"}`}>About</Link>
                <Link passHref href="" className={`${styles.navigation} ${"text-sm md:text-xl  text-white"}`}>Our Work</Link>
                <Link passHref href="" className={`${styles.navigation} ${"text-sm md:text-xl  text-white"}`}>Team</Link>
                <Link passHref href="" className={`${styles.navigation} ${"text-sm md:text-xl  text-white"}`}>Contact Us</Link>
            </nav>
            <div className="sm:flex items-center md:text-lg hidden ">
                <BsGlobe className="text-xl text-white " />
                <select className={`${styles.selection} ${"bg-transparent text-white outline-none"}`}>
                    <option value="en">English</option>
                    <option value="ab">Arabic</option>
                    <option value="ru">Russian</option>
                </select>
            </div>
            <a href="#menu" className="sm:hidden flex">
                <TbEqual className="sm:hidden text-4xl text-white flex" />
            </a>
            <section id="menu" className={styles.menu}>
                <div className={`${styles.bar} ${"flex items-center justify-between"}`}>
                    <a href="#">
                        <img
                            src="/logo.png"
                            alt="The Logo of the company"
                            className="w-32"
                        />
                    </a>
                    <a href="#">
                        <RxCross1 className="text-4xl text-white flex" />
                    </a>
                </div>

                <div className="flex items-center justify-center flex-col gap-y-12 mt-2">
                    <Link passHref href="" className="text-2xl text-center text-white  w-full">About</Link>
                    <Link passHref href="" className="text-2xl text-center text-white  w-full">Our Work</Link>
                    <Link passHref href="" className="text-2xl text-center text-white  w-full">Team</Link>
                    <Link passHref href="" className="text-2xl text-center text-white  w-full">Contact Us</Link>
                </div>
                <div className="flex w-full justify-center mt-10 items-center text-lg  ">
                    <BsGlobe className="text-xl text-white " />
                    <select className={`${styles.selection} ${"bg-transparent text-white outline-none"}`}>
                        <option value="en">English</option>
                        <option value="ab">Arabic</option>
                        <option value="ru">Russian</option>
                    </select>
                </div>
            </section>
        </div>
    )
}