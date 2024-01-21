import Head from "next/head";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

// Vendor CSS Files
import "../styles/vendor/bootstrap/css/bootstrap.min.css";
import "../styles/vendor/bootstrap-icons/bootstrap-icons.css";
import "../styles/vendor/swiper/swiper-bundle.min.css";
import "../styles/vendor/glightbox/css/glightbox.min.css";
import '../styles/vendor/aos/aos.css';

// Template Main CSS Files
import "../styles/main.css";
import "../styles/variables.css";

function MyApp({ Component, pageProps }) {
  return ( <>
    <Head>
    {/* Google Fonts */}
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link
      href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500&family=Inter:wght@400;500&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap"
      rel="stylesheet"
    />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
      crossOrigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <link
      href="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/css/swiffy-slider.min.css"
      rel="stylesheet"
      crossOrigin="anonymous"
    />

    </Head>
    <DefaultSeo {...SEO} />
    <Header/>
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
