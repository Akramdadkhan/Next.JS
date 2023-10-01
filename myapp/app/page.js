"use client"
import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <main >
      <h1>Hello</h1>
      <Link href="/login">Go to Login page</Link>
      <br/>
      <br/>
      <Link href="/about">Go to About page</Link>
      <br/>
      <br/>
      <button onClick={()=>router.push("/login")}>Go to Login Page</button>
      <br/>
      <br/>
      <button onClick={()=>router.push("/about")}>Go to About Page</button>
    </main>
  );
}
