import Head from "next/head";
import { Notify } from "../components/Notify";
import { TheBook } from "../components/TheBook";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Predictable user experiences in React</title>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Notify />
      <TheBook />
    </div>
  );
}
