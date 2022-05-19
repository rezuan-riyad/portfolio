import { Container, Box, AppBar, Toolbar } from '@mui/material'
import { NextComponentType } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import navStyles from '../../styles/Navbar.module.css'

type PropType = {
    children: JSX.Element[] | JSX.Element,
    title: string
}


export default function Layout({ children, title }: PropType) {
    const router = useRouter()
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            {/* <nav>
                <Toolbar>
                    <Container className={navStyles.navRoutes}>
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
                    </Container>
                </Toolbar>
            </nav> */}
            <Container>
                {children}
            </Container>
        </div>
    )
}