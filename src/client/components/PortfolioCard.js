//MODULES
import React from 'react'
import { Link } from 'react-router-dom'

//STYLES
import styles from './css/portfolio-card.scss'

//COMPONENT
export default class PortfolioCard extends React.Component {
  render() {
    let { img, link, title, className } = this.props
    return (
      <Link to={link} className={`${styles.container} ${className}`}>
        <div className={styles['img-wrapper']}>
        <img src={img} alt="Portfolio Image"/>
        </div>
        <span>{title}</span>
      </Link>
    )
  }
}