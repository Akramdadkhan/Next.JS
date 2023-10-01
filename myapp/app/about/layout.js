import Link from "next/link";
import "../login/style.scss";
export default function LoginLayout({ children }) {
  return (
    <div>
      <ul className="login-headers">
        <li>
          <h4>About Navabr</h4>
        </li>
        <li>
          <Link href="/about">About Main</Link>
        </li>
        <li>
          <Link href="/about/aboutstudent">About Student</Link>
        </li>
        <li>
          <Link href="/about/aboutcollege">About College</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
