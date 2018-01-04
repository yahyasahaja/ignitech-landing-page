//MODULES
import React from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'
import _ from 'lodash'

//STYLES
import styles from './css/portfolio.scss'

//COMPONENTS
import Button from '../../components/BlueButton'
import PortfolioCard from '../../components/PortfolioCard'

let PORTFOLIO_DATA = [
  {
    img: '/img/ignitech1-logo.png',
    title: 'Awesome News',
    link: 'awesomeNews'
  },
  {
    img: '/img/ignitech1-logo.png',
    title: 'Awesome News',
    link: 'awesomeNews'
  },
  {
    img: '/img/ignitech1-logo.png',
    title: 'Awesome News',
    link: 'awesomeNews'
  },
  {
    img: '/img/ignitech1-logo.png',
    title: 'Awesome News',
    link: 'awesomeNews'
  },
  {
    img: '/img/ignitech1-logo.png',
    title: 'Awesome News',
    link: 'awesomeNews'
  },
  {
    img: '/img/ignitech1-logo.png',
    title: 'Awesome News',
    link: 'awesomeNews'
  },
]

//COMPONENT
export default class Portfolio extends React.Component {
  componentDidMount() {
    setTimeout(() => this.setState({mounted: true}), 300)
  }

  state = {
    mounted: false,
  }

  renderPortfolioCard(state, scrollState) {
    return _.map(PORTFOLIO_DATA, (data, i) => 
      <Transition 
        in={this.props.in}
        timeout={50 * i + 200}
      >
      {state => <PortfolioCard 
        key={i} {...data} 
        className={`${state} float-flat-${scrollState} `}
      />}
      </Transition>
    )
  }

  renderContent = state => {
    let { scrollState } = this.props
    let { mounted } = this.state

    scrollState = !mounted ? 'init' : scrollState 
    state = !mounted ? 'init' : state 
    
    return (
      <div className={`${styles.container} ${state} fade`}>
        <Transition 
          in={this.props.in}
          timeout={100}
        >
        { state => <h1 className={`${styles.title} ${state} float-flat-${scrollState} `}>News</h1> }
        </Transition>
        <Transition 
          in={this.props.in}
          timeout={200}
        >
        {
        state =>
        <div className={`${styles.wrapper} ${state} float-flat-${scrollState} `}>
          {this.renderPortfolioCard(state, scrollState)}
        </div>
        }
        </Transition>
        <Transition 
          in={this.props.in}
          timeout={300}
        >
        {
        state =>
        <div className={`${styles['button-wrapper']} ${state} float-flat-${scrollState} `}>
        <Button label="Load More" icon="refresh" />
        </div>
        }
        </Transition>
      </div>
    )
  }

  render() {
    return (
      <Transition 
        in={this.props.in}
        timeout={100}
      >
      {this.renderContent}
      </Transition>
    )
  }
}