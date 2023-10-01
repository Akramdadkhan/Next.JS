"use client"
import Link from "next/link";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter();
    return (
        <div>
           <Link href="/">Go to Home page</Link>
           <br/>
            <br/>
            <Link href="/login/studentlogin">Go to Login Student Page</Link>
            <br/>
            <br/>
            <button onClick={()=>router.push("/login/collegelogin")}>Go to Login Student College Page</button>
        </div>
    );
};

export default Login;