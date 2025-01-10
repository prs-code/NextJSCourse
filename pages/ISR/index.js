import { useRouter } from "next/router";
import { useState, useEffect } from "react";

function ISR({ post }) {
  const [disabledButton, setDisabledButton] = useState(true);
  const router = useRouter();
  const revalidateHandler = () => router.reload();

  useEffect(() => {
    setTimeout(() => {
        setDisabledButton(false);
    }, 6000);
  }, [post]);

  return (
    <div className="isr-container">
      <h2 className="isr-title">Incremental Static Regeneration (ISR) ...</h2>
      <p>This data fetched by <a target="_blank" rel="noreferrer" href="https://nextjs.org/docs/pages/building-your-application/data-fetching/incremental-static-regeneration">getStaticProps(ISR Solution)</a> method!</p>
      <div className="post-details">
        <h4>Post Details:</h4>
        <p>post id: {post.id}</p>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </div>
      <button 
        className="isr-btn"
        onClick={revalidateHandler}
        disabled={disabledButton}
      >
        Regenerate Post
        <p>revalidate with id: {post.id}</p>
      </button>
    </div>
  )
};

function generateIndexPosts() {
  return Math.ceil(Math.random() * 100);
};

export async function getStaticProps() {
  const postIndex = generateIndexPosts(); 
  const jsonPost = await fetch(`https://jsonplaceholder.typicode.com/posts/${postIndex}`);
  const post = await jsonPost.json();

  return {
    props: {
      post
    },
    revalidate: 5
  }
};

export default ISR;