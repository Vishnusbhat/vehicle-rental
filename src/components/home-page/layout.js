import Background from "./bg";
import Footer from "./footer";
import Slogan from "./slogan";
import DateTime from "./datetime";
import Header from "./header";
import Temples from "./temple";

const Layout = ({user}) => {
    return (
        <div className="layout">
            <Background />
            <Header user={user}/>
            <DateTime />
            <Slogan />
            <Footer />
            <Temples />
        </div>
      );
}
 
export default Layout;
