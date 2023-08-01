import Link from "next/link";
import MyImage from "../../components/assets/images";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>

      <h1>First Post</h1>
      <MyImage></MyImage>
      <h2>
        <Link href="/">Homepage</Link>
      </h2>
    </Layout>
  );
}
