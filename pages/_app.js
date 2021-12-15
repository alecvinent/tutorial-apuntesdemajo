import '../styles/globals.css'
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import HeadMeta from "../components/HeadMeta";

function MyApp({Component, pageProps}) {
    return (
        <>
            <div className={styles.container}>
                <HeadMeta/>

                <main className={styles.main}>
                    {/*content area here*/}
                    <Component {...pageProps} />
                    {/*content area here*/}
                </main>

                <footer className={styles.footer}>
                    <a
                        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Powered by{' '}
                        <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16}/>
          </span>
                    </a>
                </footer>

            </div>
        </>
    );
}

export default MyApp