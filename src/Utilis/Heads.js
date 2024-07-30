import Head from "next/head";

const Heads = () => {
  return (
    <Head>
      <meta property="og:url" content="https://agency.williamferns.org" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Automa Software | Premier Software Development Agency"
      />
      <meta
        property="og:description"
        content="Discover Automa Software, your premier software development agency. We specialize in creating bespoke software solutions tailored to your business needs, including full-stack web applications, backend services, and advanced scrapers. Leverage cutting-edge technologies like Next.js, React.js, TypeScript, and Python to drive your business forward with confidence."
      />
      <title>Automa Software | Premier Software Development Agency</title>
      <meta
        name="description"
        content="Discover Automa Software, your premier software development agency. We specialize in creating bespoke software solutions tailored to your business needs, including full-stack web applications, mobile applications, backend services, and advanced scrapers. Leverage industry-leading technologies like React.js, Next.js, Node.js, PostgreSQL, TypeScript, and Python to propel your business forward with confidence."
      />
      <link rel="shortcut icon" href="/favicon.svg" />
      <meta name="author" content="William Ferns" />
    </Head>
  );
};

export default Heads;
