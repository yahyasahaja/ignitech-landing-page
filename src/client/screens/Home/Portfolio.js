//MODULES
import React from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'
import _ from 'lodash'
import axios from 'axios'

//STYLES
import styles from './css/portfolio.scss'

//COMPONENTS
import Button from '../../components/BlueButton'
import PortfolioCard from '../../components/PortfolioCard'

let PORTFOLIO_DATA = [
  {
    img: '/img/ignitech1-logo.png',
    title: 'Awesome Project 1',
    link: '/portfolio/project1'
  },
]

//COMPONENT
export default class Portfolio extends React.Component {
  componentDidMount() {
    setTimeout(() => this.setState({mounted: true}), 300)
    
    axios.get('/api/portfolios').then(res => this.setState({
      portfolioData: _.map(res.data.items, (data, i) => {
        let reg = /<img[^>]+src="http:\/\/([^">]+)/g
        let imgs = reg.exec(data.content), img
        if (imgs) 
          if (imgs.length > 0) img = imgs[0]
        

        return {
          img: img || '/img/ignitech1-logo.png',
          title: data.title,
          link: `/portfolio/${data.id}`,
        }
      })
    }))
  }

  state = {
    mounted: false,
    portfolioData: null,
  }

  renderPortfolioCard(state, scrollState) {
    return _.map(this.state.portfolioData, (data, i) => 
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
        { state => <h1 className={`${styles.title} ${state} float-flat-${scrollState} `}>Portfolio</h1> }
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