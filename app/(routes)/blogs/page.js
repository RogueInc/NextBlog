"use client";
import { motion, useTransform, useScroll, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useRef, useEffect } from "react";
import styles from "./styles.module.css";
import Blog from "../../_componenets/Bloglist/blog";
import { posts } from "../../_componenets/Bloglist/posts";
import Image from "next/image";

export default function Page() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0.2, 1], ["0%", "-100%"]);
  //experiment
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  //experiment
  return (
    // <motion.h1
    //   initial={{ opacity: 0, y: -50 }}
    //   animate={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 1 }}
    // >
    //   Hello, blogs page!
    // </motion.h1>
    <div className={styles.blogs}>
      <section className={styles.about}>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.topdiv}
        >
          <Image
            src="https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&w=600"
            fill={true}
            className={styles.aboutimage}
          ></Image>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className={styles.imagehead}
          >
            Inspiring Minds, One Click Away.
          </motion.h1>
        </motion.div>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className={styles.contentleft}
          >
            <h1>Who we are</h1>
            <p>
              We endeavor to inspire and innovate. By showcasing success
              stories, thought-provoking articles, and real-world applications
              of technology, we aim to kindle the spark of creativity and
              entrepreneurship in our readers. We see our platform as a catalyst
              for personal and professional growth, encouraging our audience to
              embrace their inner innovator.
            </p>
            <p>
              Community building is at the heart of our mission. We believe that
              tech is not merely a solitary endeavor but a collective journey.
              To that end, we are dedicated to fostering connections,
              discussions, and collaborations among our readers. Our forums,
              comment sections, and networking opportunities are designed to
              bring together a diverse community of tech enthusiasts, learners,
              and experts.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={styles.contentright}
          >
            <h1>Our vision</h1>
            <p>
              To be the ultimate source of tech knowledge, inspiration, and
              community, empowering individuals to thrive in the digital age.
            </p>
            <ul>
              <li>-Demystify Technology</li>
              <li>-Promote Ethical Tech</li>
              <li>-Stay Ahead of Trends</li>
              <li>-Quality over Quantity</li>
            </ul>
          </motion.div>
        </div>
      </section>
      <div className={styles.blogbox}>
        <motion.div
          style={{ x }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={styles.blogcontainer}
        >
          <Blog posts={posts} />
        </motion.div>
      </div>

      <section className={styles.emptyblock}></section>
      <section className={styles.lastreveal}>
        <div className={styles.revealcontent}>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 2.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            className={styles.leftcontent}
          >
            <h1>
              <span>Read.</span>
              <br />
              <span>undertand.</span>
              <br />
              <span>grow.</span>
              <br />
            </h1>
            <p>Glory awaits.</p>
          </motion.div>
          <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 2.5 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: -300 },
            }}
            className={styles.rightcontent}
          >
            <h1>Follow us on social media.</h1>
            <div className={styles.revealsocial}>
              <Image
                src="/images/githublogo.png"
                width={68}
                height={68}
              ></Image>
              <Image
                src="/images/instagramcolor.png"
                width={68}
                height={68}
              ></Image>
              <Image src="/images/linkedin.png" width={68} height={68}></Image>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
