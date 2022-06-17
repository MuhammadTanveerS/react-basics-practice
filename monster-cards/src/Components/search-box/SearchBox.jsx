import React, { Component } from 'react'
import './styles.css'

export default class SearchBox extends Component {
  render() {
    return (
        <input className={this.props.className} placeholder={this.props.placeholder}  type='search'
        onChange={this.props.changeHandler} />
    )
  }
}
