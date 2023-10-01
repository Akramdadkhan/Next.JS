"use client"
import Link from "next/link";
import {useRouter} from 'next/navigation'
const About = () => {
    const router = useRouter();
    return (
        <div>
            <Link href="/">Go to Home page</Link>
            <br/>
            <br/>
            <Link href="/about/aboutstudent">Go to About Student Page</Link>
            <br/>
            <br/>
            <button onClick={()=>router.push("/about/aboutcollege")}>Go to About Student College Page</button>
        </div>
    );
};

export default About;