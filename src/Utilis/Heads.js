import Head from "next/head";

const Heads = () => {
  return (
    <Head>
      <meta property="og:url" content="https://agency.williamferns.org" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Automa AI Software Agency" />
      <meta
        property="og:description"
        content="At Automa AI Software, we specialize in crafting custom AI software solutions that improve your business's productivity and revenue. Whether it be full-stack web applications, backend services, or advanced scrapers, we've got you covered. We leverage cutting-edge technologies like Next.js, React.js, TypeScript, and Python to drive your business forward with confidence."
      />
      <title>Automa AI Software | AI Software Agency</title>
      <meta
        name="description"
        content="At Automa AI Software, we specialize in crafting custom AI software solutions that improve your business's productivity and revenue. Whether it be full-stack web applications, backend services, or advanced scrapers, we've got you covered. We leverage cutting-edge technologies like Next.js, React.js, TypeScript, and Python to drive your business forward with confidence."
      />
      <link rel="shortcut icon" href="/favicon.svg" />
      <meta name="author" content="William Ferns" />
    </Head>
  );
};

export default Heads;
