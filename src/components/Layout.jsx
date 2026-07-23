import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import Meta from "./Meta";
import MobileQuoteBar from "./MobileQuoteBar";
import AnalyticsEvents from "./AnalyticsEvents";
import AnalyticsConsent from "./AnalyticsConsent";

const Layout = ({ children, metaProps }) => {
  return (
    <>
      <Meta {...metaProps} />
      <AnalyticsConsent />
      <AnalyticsEvents />
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <Navbar />
      <main id="contenu">{children}</main>
      <SocialMedia />
      <PreFooter />
      <Footer />
      <MobileQuoteBar />
    </>
  );
};

export default Layout;
