import PropsTypes from "prop-types";
import styles from '../styles/Home.module.scss'
import {API_BASE_JOKES, JOKE_CATEGORIES} from "../shared/baseUrl";

export default function Home({joke, errorMsg}) {
    return (
        <>
            <h1 className={styles.title}>
                Welcome to <a href="https://nextjs.org">Next.js!</a>
            </h1>

            {errorMsg && (
                <p className={styles.description}>
                    Joke of the Day: {' '}
                    <code className={styles.code}>{errorMsg}</code>
                </p>
            )}

            {joke && (
                <p className={styles.description}>
                    Joke of the Day: {' '}
                    <code className={styles.code}>{joke}</code>
                </p>
            )}

            <p className={styles.description}>
                Get started by editing{' '}
                <code className={styles.code}>pages/index.js</code>
            </p>

            <div className={styles.grid}>
                <a href="https://nextjs.org/docs" className={styles.card}>
                    <h2>Documentation &rarr;</h2>
                    <p>Find in-depth information about Next.js features and API.</p>
                </a>

                <a href="https://nextjs.org/learn" className={styles.card}>
                    <h2>Learn &rarr;</h2>
                    <p>Learn about Next.js in an interactive course with quizzes!</p>
                </a>

                <a
                    href="https://github.com/vercel/next.js/tree/master/examples"
                    className={styles.card}
                >
                    <h2>Examples &rarr;</h2>
                    <p>Discover and deploy boilerplate example Next.js projects.</p>
                </a>

                <a
                    href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    className={styles.card}
                >
                    <h2>Deploy &rarr;</h2>
                    <p>
                        Instantly deploy your Next.js site to a public URL with Vercel.
                    </p>
                </a>
            </div>


        </>
    )
}

// definicion del tipo de dato que recibe Home
Home.propTypes = {
    joke: PropsTypes.string,
    errorMsg: PropsTypes.string
};

// para conservar en cache
export async function getStaticProps() {
    let data = null;
    let error = null;

    const randomCategory = JOKE_CATEGORIES[Math.floor(Math.random() * JOKE_CATEGORIES.length)];
    console.log(randomCategory);

    try {
        await fetch(API_BASE_JOKES + '?category=' + randomCategory)
            .then(response => {
                if (!response.ok) throw new Error(response.status + ' ' + response.statusText);
                return response.json();
            })
            .then(json => {
                data = json['contents']['jokes'][0].joke.text;
            });
    } catch (e) {
        error = e.message;
    }

    // if (error) {
    //     return {
    //         notFound: true,
    //     }
    // }

    return {
        props: {
            joke: data,
            errorMsg: error
        },
        revalidate: 10 // 10s
    };
}
