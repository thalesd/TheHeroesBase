import Link from 'next/link';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>The Heroes Base</h1>
            </div>
            
            <Link href={"/"} className={"link"}>Home</Link>
            <Link href={"/about"} className={"link"}>About</Link>
            <Link href={"/heroes"} className={"link"}>Heroes List</Link>
            <Link href={"/villains"} className={"link"}>Villains List</Link>
        </nav>
     );
}
 
export default Navbar;