import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "./../../styles/Ninjas.module.css";

const index = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Ninja Listing</title>
      </Head>

      <div>
        <h1>All Ninjas</h1>

        {ninjas.map((ninja) => (
          <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  // This function runs at build time

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

export default index;
