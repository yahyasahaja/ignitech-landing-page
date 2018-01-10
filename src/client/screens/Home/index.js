//MODULES
import React from 'react'
import axios from 'axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ScrollSwipe from '../../libs/ScrollSwipe'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

//STYLES
import styles from './css/index.scss'
 
//COMPONENTS
import Layout from '../../components/Layout'
import Home from './HomeScreen'
import About from './About'
import Portfolio from './Portfolio'
import News from './News'
import Contact from './Contact'

//CONFIG
import config from '../../config'

//STORE 
import store from '../../services/store'
import * as actions from '../../services/actions'

let LOCATION_DATA = ['/home', '/about', '/portfolio', 'news', 'contact']

//COMPONENT
class HomePages extends React.Component {
	componentWillMount() {
		let loc = this.props.history.location.pathname.toLowerCase()
		loc = loc === '/home' ? 0 : 
			loc === '/about' ? 1 : 
			loc === '/portfolio' ? 2 :
			loc === '/news' ? 3 : 4
		this.setState({selected: loc})
	}
	
  componentDidMount() {
    // setTimeout(() => this.setState({selected: -1}), 1000)
		// setTimeout(() => this.setState({selected: 0}), 3000)
		let loc = this.props.history.location.pathname.toLowerCase()
		loc = loc === '/home' ? 0 : 
			loc === '/about' ? 1 : 
			loc === '/portfolio' ? 2 :
			loc === '/news' ? 3 : 4

		this.props.updateSelected(config.SELECTED_PAGE, loc)


		window.onbeforeunload = function () {
			window.scrollTo(0, 0)
		}

		this.scrollListener = new ScrollSwipe({
			target: document,
			scrollSensitivity: 0,
			touchSensitivity: 0,
			scrollPreventDefault: true,
			touchPreventDefault: true,
			scrollCb: (e) => this.handleScroll(e),
			touchCb: (e) => this.handleScroll(e),
		})

		document.addEventListener('keydown', (event) => {
			if (event.defaultPrevented) {
				return
			}

			switch (event.key) {
			case 'ArrowUp':
				this.handleScroll({
					direction: 'VERTICAL',
					intent: 0,
				})
				break
			case 'ArrowDown':
				this.handleScroll({
					direction: 'VERTICAL',
					intent: 1,
				})
				break
			default:
				return
			}

			event.preventDefault()
		})
	}

	componentWillUnmount() {
    if (this.scrollListener)
		this.scrollListener.killAll()
  }
  
  handleScroll(event) {
		if (event.direction !== 'VERTICAL') return this.scrollListener.listen()
		if	(this.state.scrolling) return

		let selected = this.props.selected

		if (event.intent == 0 && selected <= 0) return this.scrollListener.listen()
		if (event.intent == 1 && selected >= 4) return this.scrollListener.listen()

		if (event.intent == 0) {
			this.props.updateSelected(config.SELECTED_PAGE, this.props.selected - 1)
			this.setState({
				scrolling: true,
			})
		} else if (event.intent == 1) {
			this.props.updateSelected(config.SELECTED_PAGE, this.props.selected + 1)
			this.setState({
				scrolling: true,
			})
		}

		setTimeout(() => {
			this.setState({scrolling: false})
			this.scrollListener.listen()
		}, 1000)
	}

  componentWillReceiveProps(next) {
    let { selected: before, scrollState } = this.state
		let { selected } = next

    if (before != selected) {
			if (selected < LOCATION_DATA.length) this.props.history.push(LOCATION_DATA[selected])
			return this.setState({scrollState: selected > before ? 1 : 0, selected})
		}
    this.setState({selected})
  }

  state = {
    selected: 0,
    scrollState: 1,
    scrolling: false,
  }

  renderContent() {
    let { selected, scrollState, before } = this.state
    
    scrollState = scrollState == 1 ? 'up' : 'down'
		selected = this.props.selected ? this.props.selected : selected
		
    return <div>
      <Home scrollState={scrollState} in={selected == 0} /> 
      <About scrollState={scrollState} in={selected == 1} /> 
      <Portfolio scrollState={scrollState} in={selected == 2} /> 
      <News scrollState={scrollState} in={selected == 3} /> 
      <Contact scrollState={scrollState} in={selected == 4} />
    </div>
  }

  render() {
    return (
      <div className={styles.container}>
				<Layout {...this.props} />
      	{this.renderContent()}
      </div>
    )
  }
}

export default connect(({selected}) => ({ 
  selected: selected[config.SELECTED_PAGE]
}), actions)(HomePages)