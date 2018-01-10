//MODULES
import React from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'
import _ from 'lodash'
import axios from 'axios'

//STYLES
import styles from './css/portfolio.scss'

//COMPONENTS
import Button from '../../components/BlueButton'
import NewsCard from '../../components/PortfolioCard'

let PORTFOLIO_DATA = [
  {
    img: '/img/ignitech1-logo.png',
    title: 'Awesome Project 1',
    link: '/news/project1'
  },
]

//COMPONENT
export default class News extends React.Component {
  componentDidMount() {
    setTimeout(() => this.setState({mounted: true}), 300)
    
    axios.get('/api/news').then(res => this.setState({
      newsData: _.map(res.data.items, (data, i) => {
        let reg = /\ssrc=(?:(?:'([^']*)')|(?:"([^"]*)")|([^\s]*))/i
        let imgs = reg.exec(data.content), img
        if (imgs) if (imgs.length > 0) img = imgs[1] || imgs[2] || imgs[3]
        
        return {
          img: img || '/img/ignitech1-logo.png',
          title: data.title,
          link: `/news/${data.id}`,
        }
      })
    }))
  }

  state = {
    mounted: false,
    newsData: null,
  }

  renderNewsCard(state, scrollState) {
    return _.map(this.state.newsData, (data, i) => 
      <Transition 
        in={this.props.in}
        timeout={50 * i + 200}
      >
      {state => <NewsCard 
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
          {this.renderNewsCard(state, scrollState)}
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