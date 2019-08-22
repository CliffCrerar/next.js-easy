/**
 * Layout wrapper
 */

import Nav from "components/nav";
import AppHead from 'components/head';
import GlobalStyle from 'components/global-style'

const Layout = (props) => {
    return (
        <div id="layout" className="layout-component">
            <AppHead />
            <GlobalStyle />
            <header>
                <GlobalStyle />
                <Nav />
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                {/* add footer content */}
            </footer>
        </div>
    )
}

export default Layout