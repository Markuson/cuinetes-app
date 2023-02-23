import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import LoginModal from "@/components/molecules/LoginModal";
import Navbar from "@/components/organisms/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cuinetes</title>
        <meta
          name="description"
          content="Store and share your favourite recipes"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <LoginModal />
      {/* <main className={styles.main}></main> */}
    </div>
  );
}
