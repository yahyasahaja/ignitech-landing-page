//MODULES
import React from 'react'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ScrollSwipe from '../../libs/ScrollSwipe'
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

//STYLES
import styles from './css/index.scss'
 
//COMPONENTS
import Layout from '../../components/Layout'
import Content from './Content'

//CONFIG
import config from '../../config'

//STORE 
import store from '../../services/store'
import * as actions from '../../services/actions'

//COMPONENT
export default class Portfolio extends React.Component {
	componentDidMount() {
    store.dispatch(actions.updateSelected(config.SELECTED_PAGE, 2))
  }

  state = {
    selected: 0,
    scrollState: 1,
    scrolling: false,
    iframeObject: null,
  }

  render() {
    return (
      <div className={styles.container}>
				<Layout />
				{/* <Route path="/portfolio/lists" component={} /> */}
				<Route path="/portfolio/:id" component={Content}/>
        {this.state.iframeObject}
      </div>
    )
  }
}