import styles from "./blog.module.css";
import Link from "next/link";

export default function bloglist({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div className={styles.blog} key={post.id}>
          <div
            className={styles.blogimage}
            style={{
              backgroundImage: `url(${post.Image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className={styles.blogcontent}>
            <h2>{post.Title}</h2>
            <p>
              Cillum ea proident ullamco aute qui. Sint ullamco cillum irure
              sunt commodo velit. Eiusmod nisi adipisicing nulla pariatur id id
              labore et cillum fugiat consectetur fugiat fugiat. Adipisicing
              mollit amet excepteur Lorem.
              
            </p>
            <Link href='/blogs/id' className={styles.link}>read more...</Link>
          </div>
        </div>
      ))}
    </>
  );
}
