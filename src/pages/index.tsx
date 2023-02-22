import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Work from "../components/Work";

const Index = () => {
  const title = "AKHIGBE PEACE | Frontend Developer";

  const keywords = [
    "Frontend Developer",
    "Junior Frontend Developer",
    "React Developer",
  ].join(",");

  const desc =
    "A Frontend Developer Specialized in Developing Exceptional Digital Experiences";

  const imagePath = "https://akhigbepeace.netlify.app/assets/logo.png";

  return (
    <>
      <Head>
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta name="description" content={desc} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={imagePath} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{title}</title>
      </Head>

      <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </>
  );
};

export default Index;
