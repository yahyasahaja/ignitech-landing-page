//MODULES
import React from 'react'
import MediaQuery from 'react-responsive'

//STYLES
import styles from './css/layout.scss'

//COMPONENTS
import Menu from './LayoutMenu'
import Footer from './LayoutFooter'
import MenuMobile from './MenuMobile'

//INNER CONFIG
let data = [
  {
    name: 'Home',
    link: 'home'
  },
  {
    name: 'About Us',
    link: 'about',
  },
  {
    name: 'Portfolio',
    link: 'portfolio',
  },
  {
    name: 'News',
    link: 'news',
  },
  {
    name: 'Contact',
    link: 'contact',
  },
]

//COMPONENT
export default class Layout extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <MediaQuery query="(min-width: 800px)">
        <Menu data={data} />
        </MediaQuery>

        <MediaQuery query="(max-width: 800px)">
        <MenuMobile data={data} {...this.props} />
        </MediaQuery>
      </div>
    )
  }
}