import styles from "../About_us/about.module.css";
export default function About() {
    
    return (
        <div className={`${styles.container} ${"h-screen items-center justify-around bg-blue-400 flex flex-row  py-16"}`}>
            <div className="bg-blue-200 w-4/12 h-full pt-15">
                <h1 className={`${styles.h1}`}>ABOUT US</h1>
                <p className=" pt-5 pl-10 text-xl text-black leading-normal">
                    A Rising Company, With The Combination Of <br></br> Young People And Experience, Team Of<br></br>Developers , Teachers And Much More From<br></br>Different Countries.<br></br>
                    <br></br>We Succeed In Technological Projects That<br></br>Include Converting Difficult Ideas To Reality.<br></br>
                    <br></br> We Have Teachers That Have Different<br></br>Knowledge And Experience.<br></br>
                    <br></br>They Are Going To Teach You Everything Step By<br></br>Step To Reach Your Goal.
                </p>
            </div>
            <img src="/about.jpg" className={`${"h-full"}`}/>
            
        </div>
    )
}