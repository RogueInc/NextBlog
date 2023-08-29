import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Home() {

  return (
    <section className={styles.hero}>
      <div className={styles.left}>
        <Image src="/images/blogread.svg" width={420} height={500} className={styles.blogimg}></Image>
      </div>
      <div className={styles.right}>
          <h1 className={styles.heading}>
            Explore, Engage, Evolve: Your Journey Starts Here.
          </h1>
          <h1 className={styles.smallheading}>Unlocking Inspiration, One Word at a Time.</h1>
          <Link href='/blogs'><button className={styles.about}>Explore</button></Link>
      </div>
    </section>
  );
}
