import { PropsWithChildren } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children } : PropsWithChildren) => {
    return (
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>
     );
}
 
export default Layout;