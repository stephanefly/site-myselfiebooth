import Navbar from "./Navbar";
import SocialMedia from "./SocialMedia";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import Meta from "./Meta";

const Layout = ({ children, metaProps }) => {
  return (
    <>
      <Meta {...metaProps} />
      <Navbar />
      <main>{children}</main>
      <SocialMedia />
      <PreFooter />
      <Footer />
    </>
  );
};

export default Layout;
