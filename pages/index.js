import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <Layout title="Home">
      <div className={styles.showcase}>
        <div className={styles.imgSection}>
          <img src="/propic1.jpg" />
          <p>Rezuan Ahmed</p>
        </div>
        <div className={styles.textSection}>
          <h1>Hi, I am Rezuan Ahmed Riyad</h1>
          <h3>Web Developer</h3>
          <p>
            I am a self taught web programmer. During one and half year of my self study I learnt some modern 
            tools to build websites. Besides I have hands on experience of bulding modern web app.
            Following tools I used in my self motivated projetcs.
          </p>
          <ul>
              <li>HTML, CSS, JavaScript</li>
              <li>ReactJS, Redux Store</li>
              <li>MongoDB, Node.js, Express</li>
            </ul>
          <section className={styles.mediaLinks}>
            <Link href="https://github.com/rezuan-riyad">
              <a><FontAwesomeIcon icon={faGithub} /></a>
            </Link>
            <Link href="https://www.linkedin.com/in/rezuan-rio/">
              <a><FontAwesomeIcon icon={faLinkedin} /></a>
            </Link>
          </section>
        </div>
      </div>
    </Layout>
  )
}