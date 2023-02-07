import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 3000);
    }, [])

    return ( 
        <div className="not-found">
            <h1 className="warning-blink">!!! WARNING !!!</h1>
            <h2>Page Not Found</h2>
            <p>Please go back to the <Link href={"/"}>Homepage</Link></p>
        </div>
     );
}
 
export default NotFound;