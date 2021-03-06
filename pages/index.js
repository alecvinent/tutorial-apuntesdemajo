import PropsTypes from "prop-types";
import styles from '../styles/Home.module.scss'
import {tags} from "../shared/tags";
import {NotePropTypes} from '../shared/types';
import {CACHE_TIMEOUT} from "../shared/config";
import Link from "next/link";
import HeadMeta from "../components/HeadMeta";

export default function Home({notes}) {
    return (
        <>
            <HeadMeta description={'Los Apuntes de Majo con Next.js'}/>
            <p className={styles.description}>
                Majo here! 👋🏻, realizo apuntes a mano sobre las tecnologías más utilizadas. Podes sugerirme temas
                en <a href={'https://twitter.com/MajoLedes'} target="_blank" without rel="noreferrer">@majoledes</a>
            </p>

            <div className={styles.grid}>
                {notes.map(note => (
                    <Link href={`/[id]`} as={`/${note.id}`} key={note.id}>
                        <a className={styles.card}>
                            <h2>{note.title}</h2>
                            <p>{note.description}</p>
                        </a>
                    </Link>
                ))}
            </div>


        </>
    )
}

// definicion del tipo de dato que recibe Home
Home.propTypes = {
    joke: PropsTypes.string,
    errorMsg: PropsTypes.string,
    notes: PropsTypes.arrayOf(NotePropTypes)
};

// para conservar en cache
export async function getStaticProps() {
    console.log('caching in ', CACHE_TIMEOUT);
    return {
        props: {
            notes: tags,
        },
        revalidate: CACHE_TIMEOUT // 10s
    };
}
