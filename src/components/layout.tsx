import { PropsWithChildren } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

const Layout = ({ children } : PropsWithChildren) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
     );
}
 
export default Layout;