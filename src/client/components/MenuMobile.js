//MODULES
import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Drawer from 'react-toolbox/lib/drawer'
import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list'

//STYLES
import styles from './css/menu-mobile.scss'

//STORE
import store from '../services/store'
import * as actions from '../services/actions'

//CONFIG
import config from '../config'

//COMPONENT
class MenuMobile extends React.Component {
  componentWillMount() {
    this.props.updateSelected(config.SELECTED_PAGE, 0)
  }

  renderMenuNode() {
    let { data, selected } = this.props

    return _.map(data, (res, i) => {
      return <ListItem
          key={i}
          caption={res.name}
          className={i == selected ? styles.selected : ''}
          to={`/${res.link}`} 
          onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              
              this.props.updateSelected(config.SELECTED_PAGE, i)
              console.log(this.props)
              this.props.history.push(`/${res.link}`)
              this.handleToggle()
          }}
      />
    })
  }

  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({active: !this.state.active});
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles["icon-wrapper"]}>
          <span 
            onClick={this.handleToggle} 
            className={styles["menu-icon"] + ' mdi mdi-menu'} 
          />
        </div>


        <Drawer active={this.state.active} onOverlayClick={this.handleToggle}>
          <div className={styles.overlay}>
          <div className={styles.shadow} />

          <div className={styles.board}>
            <div className={styles["logo-wrapper"]}>
            <img src="/img/ignitech1-logo.png" className={styles.logo}/>
            </div>
            
            <div className={styles["menu-wrapper"]}>
            <List selectable ripple>
              <ListSubHeader caption='MENU' />
              <ListDivider />
              {this.renderMenuNode()}
            </List>
            </div>
          </div>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default connect(({selected}) => ({ 
  selected: selected[config.SELECTED_PAGE]
}), actions)(MenuMobile)