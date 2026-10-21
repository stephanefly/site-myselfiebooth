import Navbar from "./Navbar";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import Meta from "./Meta";
import MobileQuoteBar from "./MobileQuoteBar";
import AnalyticsEvents from "./AnalyticsEvents";
import AnalyticsConsent from "./AnalyticsConsent";
import Breadcrumbs from "./Breadcrumbs";

const Layout = ({ children, metaProps, showPreFooter = true }) => {
  return (
    <>
      <Meta {...metaProps} />
      <AnalyticsConsent />
      <AnalyticsEvents />
      <a className="skip-link" href="#contenu">Aller au contenu</a>
      <Navbar />
      <Breadcrumbs />
      <main id="contenu">{children}</main>
      {showPreFooter && <PreFooter />}
      <Footer />
      <MobileQuoteBar />
    </>
  );
};

export default Layout;
