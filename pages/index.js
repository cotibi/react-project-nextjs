import Head from 'next/head'
import { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from "next/link"

export default function Home() {
  return (
   <h1>
     <Link href="loginform">
      <a>Log In</a></Link>
    </h1>
  )
}
