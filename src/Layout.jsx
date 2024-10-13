import {Outlet} from "react-router-dom"
import Header from './common/Header'
import Content from './Component/Main-content'
const Layout = () => {
  return (
    <>
    <Header/>
    <Content/>
    </>
  )
}

export default Layout