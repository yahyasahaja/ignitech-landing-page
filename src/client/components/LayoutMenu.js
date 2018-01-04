//MODULES
import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

//STYLES
import styles from './css/layout-menu.scss'

//STORE
import store from '../services/store'
import * as actions from '../services/actions'

//CONFIG
import config from '../config'

//COMPONENT
class Menu extends React.Component {
  componentWillMount() {
    this.props.updateSelected(config.SELECTED_PAGE, 0)
  }

  renderMenuNode() { 
    let { data, selected } = this.props

    return _.map(data, (res, i) => {
      let style = { transition: 'transform .2s ease-out' + (i * .05) + 's' }

      if (i == selected) style = {
        fontWeight: 'bold',
        opacity: '1',
        transform: 'translateX(0px)',
        fontSize: '15pt',
      }

      return <Link className={styles["menu-node"]} to={`/${res.link}`} onClick={e => {
          this.props.updateSelected(config.SELECTED_PAGE, i)
        }} >
          <span className={styles["number"]} style={{...style, transform: 'none'}}>
          {i > 9 ? '' : '0' + (i + 1)}</span>
          <span className={styles["name"]} style={style}>{res.name}</span>
      </Link>
    })
  }

  renderDesktop() {
    return (
      <div className={styles["desktop-wrapper"]}>
        <div className={styles["up-wrapper"]}>
        <div className={styles["left-wrapper"]}>
        <a href="javascript:void(0)" className={styles["menu-icon"] + ' mdi mdi-menu'} />
        </div>

        <div className={styles["right-wrapper"]}>
        <img src="/img/ignitech1-logo.png" className={styles.logo}/>
        </div>
        </div>

        <div className={styles["down-wrapper"]}>
        {this.renderMenuNode()}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={styles.container}>
        {this.renderDesktop()}
      </div>
    )
  }
}

export default connect(({selected}) => ({ 
  selected: selected[config.SELECTED_PAGE]
}), actions)(Menu)