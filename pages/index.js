// import Image from "next/image";
// import styles from "../styles/Home.module.css";
import ArticleList from "../components/ArticleList";
import { server } from "../config";

export default function Home({ articles }) {
    // console.log(articles);
    return (
        <div>
            <ArticleList articles={articles}></ArticleList>
        </div>
    );
}

// getStaticProps
// getServerSideProps
// getStaticPaths
export const getStaticProps = async () => {
    const res = await fetch(`${server}/api`);
    // Previously, we used online api
    // const res = await fetch(
    //     `https://jsonplaceholder.typicode.com/posts?_limit=6`
    // );
    const articles = await res.json();
    return {
        props: {
            articles,
        },
    };
};
