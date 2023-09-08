"use client";
import { useParams } from "next/navigation";
import { posts } from "../../_componenets/Bloglist/posts";
import styles from "./page.module.css";
import { motion } from "framer-motion";

export default function BlogDetails() {
  const par = useParams();

  // Now you can access the `posts` data as a JSON string.
  // You may need to parse it back to an object.
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={styles.SinglePost}
      >
        <div className={styles.leftdiv}>
          <img src={[par.id - 1]<10?posts[par.id - 1].Image:posts[1].Image} className={styles.leftimg} />
        </div>
        <div className={styles.rightdiv}>
          <div className={styles.title}>
            <h1>{[par.id - 1]<10?posts[par.id - 1].Title:posts[1].Title}</h1>
            <h2>-{[par.id - 1]<10?posts[par.id - 1].Author:posts[1].Author}</h2>
          </div>
          <div className={styles.content}>{[par.id - 1]<10?posts[par.id - 1].content:posts[1].content}</div>
        </div>
      </motion.section>
      {/* <h1>ID:{posts[par.id-1].id}</h1>
      <h1>Title:{posts[par.id-1].Title}</h1>
      <h1>Author:{posts[par.id-1].Author}</h1> */}
    </>
  );

  // Rest of your component logic...
}
