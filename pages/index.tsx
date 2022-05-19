import * as React from 'react';
import styles from '../styles/Home.module.css'
import type { NextPage } from 'next';
import { Toolbar, Paper, Grid, Container, Typography, Box, Stack, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles'
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../src/components/Layout';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { GoLocation } from "react-icons/go"
import Typewriter from 'typewriter-effect';


const Showcase = styled(Box)(({ theme }: any) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  [theme.breakpoints.only('xs')]: {
    flexDirection: "column",
    alignItems: "flex-start"
  }
})) as typeof Box

const ImageBox = styled(Box)(({ theme }: any) => ({
  width: "40%",
  margin: "0 auto",
  [theme.breakpoints.only('xs')]: {
    width: "100%"
  }
})) as typeof Box


const LeftSection = () => {
  return (
    <div className={styles.imagebox} >
      <img src="propic1.jpg" className={styles.image} />
    </div>
  )
}


const Home: NextPage = () => {

  return (
    <Layout title="Home">
      <Showcase>
        <ImageBox className={styles.imageboxParent}>
          <div className={styles.imagebox} >
            <img src="propic1.jpg" className={styles.image} />
          </div>
          <Typography variant="subtitle1" style={{ textAlign: "center" }}>Rezuan Riyad</Typography>
          <Typography variant="subtitle2" style={{ textAlign: "center " }}>
            <Typewriter
              options={{
                strings: ['Web Developer', 'Browser Extension Developer', 'Web Scrapper'],
                delay: 80,
                autoStart: true,
                loop: true,
              }}
            />
          </Typography>
          <Typography variant="subtitle2" style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <GoLocation style={{ fontSize: "16px", marginRight: ".5rem" }} />Dhaka, Bangladesh
          </Typography>
          <Box style={{ textAlign: "center" }}>
            <Link href="https://github.com/rezuan-riyad">
              <a style={{ textDecoration: "none", margin: "0 .25rem" }}><AiFillGithub style={{ fontSize: 24 }} /></a>
            </Link>
            <Link href="https://www.linkedin.com/in/rezuan-rio/">
              <a style={{ textDecoration: "none", margin: "0 .25rem" }}><AiFillLinkedin style={{ fontSize: 24 }} /></a>
            </Link>
          </Box>
        </ImageBox>
        <div className={styles.textbox}>
          <Typography variant="h2" className={styles.profilename}>This is Rezuan Riyad</Typography>
          <Typography variant='subtitle1' sx={{ mt: 2 }}>
            At the age of tech, someone who can easily adopt new environment is always on demand. I beleive I am that one.
            I build web applications being concerned about community standard. <strong>Fast Learner</strong> | <strong>Hard Worker</strong> | <strong>Friendly to Others</strong> -
            these group of words can explain me.
          </Typography>

          <br />
          <br />
          <div className={styles.stack}>
            <Typography variant="h3" gutterBottom>Skills</Typography>
            <Typography variant="subtitle1">Web App Development</Typography>
            <Typography variant="subtitle1">Mobile App Development</Typography>
            <Typography variant="subtitle1">Chrome Extension Development</Typography>
            <Typography variant="subtitle1">Problem Solving</Typography>
          </div>

          <br />
          <br />
          <div className={styles.stack}>
            <Typography variant="h3" gutterBottom>Tech Stack</Typography>
            <Typography variant="subtitle1">HTML, CSS, JavaScript</Typography>
            <Typography variant="subtitle1">Webpack, React JS, Material UI, Next JS</Typography>
            <Typography variant="subtitle1">MongoDB, Node JS, Express</Typography>
          </div>


          <br />
          <br />


          <div className={styles.stack}>
            <Typography variant="h3" gutterBottom>Experiance</Typography>
            <Typography variant="subtitle1">Freelance Web Developer, Gazipur, Bangladesh</Typography>
            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}><i>September, 2021 - Present</i></Typography>

            <Typography variant="subtitle1">Lecturer in Physics, Gazipur (Part Time)</Typography>
            <Typography variant="subtitle2" sx={{ color: "text.secondary" }}><i>Januray 2022 - April 2022</i></Typography>
          </div>
          <br />
          <br />

          <div className={styles.stack}>
            <Typography variant="h3" gutterBottom>Education</Typography>
            <Typography variant="subtitle1">B.Sc. in Physics</Typography>
            <Typography variant="subtitle1">University of Rajshahi, Bangladesh</Typography>
          </div>

        </div>
      </Showcase>

      <Typography variant="body2" style={{ textAlign: "center" }}>@{new Date().getFullYear()}</Typography>
    </Layout >
  );
}; ``


export default Home;
