import styles from "./navbar.module.css"
import Link from "next/link";

export default function header() {

    return (
        <div className={styles.container}>
            <img src="/logo.png"
                alt="The Logo of the company"
                className="w-36"
            />
            <nav className="flex w-20 justify-between bg-red-600">
                <Link passHref href="" className="text-xl text-white">About</Link>
                <Link passHref href="" className="text-xl text-white">Our Work</Link>
                <Link passHref href="" className="text-xl text-white">Team</Link>
                <Link passHref href="" className="text-xl text-white">Contact Us</Link>
            </nav>
            <div>
                <select>

                </select>
            </div>
        </div>
    )
}