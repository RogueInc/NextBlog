import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Button() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Blogz</div>
      <div className={styles.menu}>
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/blogs" className={styles.link}>
          Blogs
        </Link>
        <Link href="/contact" className={styles.link}>
          Contact
        </Link>
      </div>
      <div className={styles.social}>
       <Image src="/images/githublogo.png" width={30} height={30}></Image>
        <Image src="/images/instagram.png" width={30} height={30}></Image>
        <Image src="/images/linkedin.png" width={30} height={30}></Image>
      </div>
    </div>
  );
}
