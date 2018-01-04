//MODULES
import React from 'react'

//STYLES
import styles from './css/layout-footer.scss'

//COMPONENT
export default class LayoutFooter extends React.Component {
  render() {
    return (
      <div className="container">
        <style jsx>{styles}</style>
        <div className="wrapper">
          <div className="left-wrapper">
            <span>&copy; Copyright 2017 All Right Reserved. IGNITECH Indonesia</span>
          </div>
        </div>
      </div>
    )
  }
}