import styles from "./blog.module.css";
import Link from "next/link";

export default function bloglist({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div className={styles.blogpost} key={post.id}>
          <div
            className={styles.postimage}
            style={{
              backgroundImage: `url(${post.Image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className={styles.postcontent}>
            <h2>{post.Title}</h2>
            <p>
             {post.content}
            </p>
            <Link href={`/blogs/${post.id}`} className={styles.link}>
              read more...
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
