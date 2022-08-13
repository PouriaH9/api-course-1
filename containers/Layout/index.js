import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-stone-900 h-screen font-serif w-screen ">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
