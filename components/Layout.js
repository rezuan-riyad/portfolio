import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children, title }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className="contentBody">
        { children }
      </div>
    </div>
  )
}