import Link from 'next/link'

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1 className="warning-blink">!!! WARNING !!!</h1>
            <h2>Page Not Found</h2>
            <p>Please go back to the <Link href={"/"}>Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;