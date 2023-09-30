import Background from "./bg";
import Footer from "./footer";
import Slogan from "./slogan";
import DateTime from "./datetime";
import Header from "./header";
const Layout = () => {
    return (
        <div className="layout">
            <Background />
            <Header />
            <DateTime />
            <Slogan />
            <Footer />
        </div>
      );
}
 
export default Layout;
