//MODULES
import React from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'
import _ from 'lodash'
import axios from 'axios'

//STYLES
import styles from './css/content.scss'

//COMPONENTS
import Button from '../../components/BlueButton'
import PortfolioCard from '../../components/PortfolioCard'

//COMPONENT
export default class Content extends React.Component {
  componentDidMount() {
    axios.get(`/api/portfolios/${this.props.match.params.id}`).then(res => {
      let { title, content } = res.data
      this.setState({
        title,
        content
      })
    })
  }

  state = {
    title: '',
    content: '',
  }

  render() {
    let link = `${window.location.href}`
    return (
      <div className={styles.container}>
        <div className={styles.share}>
            <span>SHARE</span>
            <a href={`https://www.facebook.com/sharer.php?u=${link}`} className={styles.fb} target="_blank"><li className="fa fa-facebook"></li></a>
            <a href={`https://twitter.com/intent/tweet?url=${link}`}  className={styles.tw} target="_blank"><li className="fa fa-twitter"></li></a>
            <a href={`https://plus.google.com/share?url=${link}`}  className={styles.gp} target="_blank"><li className="fa fa-google-plus"></li></a>
        </div>

        <div className={styles.wrapper}> 
        <h1 className={styles.title}>{this.state.title}</h1>
        <p className={styles.content} dangerouslySetInnerHTML={{__html: this.state.content}} />
        </div>
      </div>
    )
  }
}