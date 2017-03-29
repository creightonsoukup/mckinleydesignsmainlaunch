import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchQuote } from '../actions/index'

class Quote extends Component {
  componentWillMount() {
    this.props.fetchQuote()
  }

  render() {
    console.log(this.props)
    if (this.props.quote.length === 0) {
      return <div></div>
    }
    return (
      <div className='quote-content'>
        <h3>{this.props.quote[0].quote}</h3>
        <h4>{this.props.quote[0].author}</h4>
      </div>
    )
  }
}

function mapStateToProps({quote}) {
  return {quote}
}

export default connect(mapStateToProps, {fetchQuote})(Quote)
