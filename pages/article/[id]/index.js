import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";
import { server } from "../../../config";

function article({ article }) {
    // const router = useRouter();
    // const { id } = router.query;
    return (
        <>
            <Meta title={article.title} description={article.excerpt} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    );
}

export default article;

// combination of getStaticPaths and getStaticProps

export const getStaticProps = async (context) => {
    // at build time
    /* const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
    ); */
    const res = await fetch(`${server}/api/articles/${context.params.id}`);
    const article = await res.json();
    return {
        props: {
            article,
        },
    };
    // add a revalidate param to this return, to implement Incremental Static Regeneration
};

export const getStaticPaths = async () => {
    // at request time
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const res = await fetch(`${server}/api`);
    const articles = await res.json();
    const ids = articles.map((article) => article.id);
    const paths = ids.map((id) => ({ params: { id: id.toString() } }));
    // console.log({
    //     paths,
    //     fallback: false,
    // });
    return {
        paths,
        fallback: false,
    };
};

// export const getServerSideProps = async (context) => {
//     // at request time
//     const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//     );
//     const article = await res.json();
//     return {
//         props: {
//             article,
//         },
//     };
// };
