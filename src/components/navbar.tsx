import Link from 'next/link';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>The Heroes Base</h1>
            </div>
            
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/heroes"}>Hero List</Link>
            <Link href={"/villains"}>Villains List</Link>
            <hr />
        </nav>
     );
}
 
export default Navbar;