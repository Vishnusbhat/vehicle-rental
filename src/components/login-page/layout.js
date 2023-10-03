import LoginPage from "./page";
import Header from "../home-page/header";
import Footer from "../home-page/footer";



const LoginSetup = ({user, setUser}) => {
    
    return ( 
        <div>
            <Header />
            <LoginPage user = {user} setUser = {setUser}/>
            <Footer />
        </div>
     );
}
 
export default LoginSetup
