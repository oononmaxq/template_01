import Head from "next/head";
import Nav from "../components/Nav.js";
import Top from "../components/Top.js";
import Vision from "../components/Vision.js";
import Message from "../components/Message.js";
import Service from "../components/Service.js";
import Story from "../components/Story.js";
import Profile from "../components/Profile.js";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SAMPLE COMPANY | 最新技術と自然との調和を目指す</title>
        <meta name="description" content="最新技術と自然との調和を目指す" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <body>
          <Nav />
          <Top />
          <Vision />
          <Message />
          <Service />
          <Story />
          <Profile />
          <Footer />
        </body>
      </main>
    </div>
  );
}
