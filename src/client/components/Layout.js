//MODULES
import React from 'react'

//STYLES
import styles from './css/layout.scss'

//COMPONENTS
import Menu from './LayoutMenu'
import Footer from './LayoutFooter'

//COMPONENT
export default class Layout extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Menu data={[
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
        ]} />
      </div>
    )
  }
}