import Link from 'next/link'
import { useRouter } from 'next/router'
import navStyles from '../styles/Navbar.module.css'

export default function Navbar() {  
  const router = useRouter()
  return (
    <nav className={navStyles.navRoutes}>
      <Link href="/">
        <a className={router.pathname == "/" ? "active" : ""} >
          Home
        </a>
      </Link>
      <Link href="/projects">
        <a className={router.pathname == "/projects" ? "active" : ""}>
          Projects
        </a>
      </Link>
      <Link href="/contact">
        <a className={router.pathname == "/contact" ? "active" : ""}>
          Contact
        </a>
      </Link>
    </nav>
  )
}