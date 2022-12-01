import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'

const Layout = ({
    hideHeader = false,
    hideFooter = false,
    children,
    title = "Arif Khan"
}) => {
    return (
        <>
            <Head>
                <title>{title}</title>



            </Head>
            {
                !hideHeader && <nav> <Header />  </nav>
            }
            <main>



                {children}
            </main>

            {
                !hideFooter && <footer>
                    {/* <Footer /> */}
                </footer>
            }
        </>
    )
}

export default Layout