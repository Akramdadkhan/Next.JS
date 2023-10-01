import Link from "next/link";
import './style.scss'
export default function LoginLayout({ children }) {
    return (
      <div>
        <ul className="login-headers">
            <li><h4>Login Navabr</h4></li>
            <li>
                <Link href='/login'>Login Main</Link>
            </li>
            <li>
                <Link href='/login/studentlogin'>Student Login</Link>
            </li>
            <li>
                <Link href='/login/teacherlogin'>Teacher Login</Link>
            </li>
        </ul>
        {children}
      </div>
    )
  }