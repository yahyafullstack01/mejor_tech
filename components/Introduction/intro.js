import styles from "../Introduction/intro.module.css"
export default function Intro() {

    return (
        <div className="flex flex-col relative">
            <video
                autoPlay={true}
                loop={true}
                muted={true}
                controls={false}
            >
                <source src="/intro.mp4" type="video/mp4" />
            </video>
            <div className={`${styles.container} ${"w-full  flex flex-col absolute"}`}>
                <h1 className={`${styles.H1} ${"text-center w-full"}`}>WELCOME TO EL MEJOR TECH</h1>
                <h2 className={`${styles.H2} ${"text-center w-full"}`}>THE BEST SPOT FOR IT , EDUCATION , MARKETING AND MUCH MORE</h2>
                <h3 className={`${styles.H2} ${"text-center w-full"}`}>JOIN US AND EXPLORE NEW HORIZONS</h3>
            </div>
        </div>
    )
}