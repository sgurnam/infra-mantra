import Head from 'next/head'
import Footer from "./Footer";
import Header from "./Header";

const Wrapper = (props) => {
  return (
    <div className="body-wrapper">
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>

      <main className="main">
        <Header />
        {props.children}
      </main>

      <Footer />
    </div>
  );
};

export default Wrapper;
