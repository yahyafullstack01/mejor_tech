import styles from "../Meet_team/team.module.css";

export default function Team() {
    return (
        <div className="flex flex-col relative">
            <video
                autoPlay={true}
                loop={true}
                muted={true}
                controls={false}
                className={styles.vid}
            >
                <source src="/team.mp4" type="video/mp4" />
            </video>

            <div className={`${styles.container} ${"text-white absolute w-full"}`}>
                <h1 className={`${styles.header} ${"text-center"}`}>MEET THE TEAM</h1>

                <div className={`${styles.Grid} ${"grid justify-between"}`}>

                    <div className="flex flex-col items-center  text-center ">
                        <img
                            src="/sevetlana.jpeg"
                            alt=""
                            className={`${styles.pic} ${"w-80"}`}
                        />
                        <p className={styles.name}>LANA</p>
                        <span className={styles.title}>MARKETING DIRECTOR</span>
                        <button className={styles.btn}>Read Info</button>
                    </div>
                    <div className="flex flex-col items-center text-center ">
                        <img
                            src="/yahya.jpeg"
                            alt=""
                            className={`${styles.pic} ${"w-80"}`}
                        />

                        <p className={styles.name}>YAHYA</p>
                        <span className={styles.title}>
                            PROJECT MANAGER<br></br>
                            FULL-STACK DEVELOPER
                        </span>
                        <button className={styles.btn}>Read Info</button>

                    </div>
                    <div className="flex flex-col items-center  text-center ">
                        <img
                            src="/samuel.jpeg"
                            alt=""
                            className={`${styles.pic} ${"w-80"}`}
                        />

                        <p className={styles.name}>SAMUEL</p>
                        <span className={styles.title}>BUSNISS DEVELOPER</span>
                        <button className={styles.btn}>Read Info</button>

                    </div>
                    <div className="flex flex-col items-center  text-center ">
                        <img
                            src="/sevetlana.jpeg"
                            alt=""
                            className={`${styles.pic} ${"w-80"}`}
                        />
                        <p className={styles.name}>LANA</p>
                        <span className={styles.title}>MARKETING DIRECTOR</span>
                        <button className={styles.btn}>Read Info</button>
                    </div>
                    <div className="flex flex-col items-center text-center ">
                        <img
                            src="/samer.jpeg"
                            alt=""
                            className={`${styles.pic} ${"w-80"}`}
                        />

                        <p className={styles.name}>SAMER</p>
                        <span className={styles.title}>Front-end-developer</span>
                        <button className={styles.btn}>Read Info</button>

                    </div>
                    <div className="flex flex-col items-center  text-center ">
                        <img
                            src="/samuel.jpeg"
                            alt=""
                            className={`${styles.pic} ${"w-80"}`}
                        />

                        <p className={styles.name}>SAMUEL</p>
                        <span className={styles.title}>BUSNISS DEVELOPER</span>
                        <button className={styles.btn}>Read Info</button>

                    </div>
                </div>
            </div>
        </div>
    )
}