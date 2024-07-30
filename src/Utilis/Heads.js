import Head from "next/head";

const Heads = () => {
  return (
    <Head>
      <meta property="og:url" content="agency.williamferns.org" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Automa Software | Software Development Agency"
      />
      <meta
        property="og:description"
        content="We are a software development agency, specializing in crafting custom software solutions for our clients. Whether that be full-stack web applications, mobile applications, back-end services or scrapers, we got you covered! Using industry level technologies like React.js, Next.js, Node.js, PostgreSQL, Typrescript, Python and so much more, we are 100% confident that we can help your business."
      />
      <title>Automa Software | Software Development Agency</title>
      <meta
        name="description"
        content="We are a software development agency, specializing in crafting custom software solutions for our clients. Whether that be full-stack web applications, mobile applications, back-end services or scrapers, we got you covered! Using industry level technologies like React.js, Next.js, Node.js, PostgreSQL, Typrescript, Python and so much more, we are 100% confident that we can help your business."
      />
      <link rel="shortcut icon" href="/favicon.svg" />
      <meta name="author" content="William Ferns" />
    </Head>
  );
};
export default Heads;
