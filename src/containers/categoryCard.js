import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import chuckActions from '../redux/chuck/actions'

const {fetchJoke, clearJoke} = chuckActions


function mapStateToProps(state, ownprops) {
  return {
    joke: state.chuck.joke,
    isMobile: state.browser.lessThan.medium,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchJoke,
    clearJoke,
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
      this.state = {
        isExpanded: false,
        isJokeLoading: false,
      }
      this.select = this.select.bind(this)
      this.deselect = this.deselect.bind(this)
    }

    select() {
      const { fetchJoke, categoryData: {category} } = this.props
      this.setState({isJokeLoading: true})
      this.props.fetchJoke(category)
      this.setState({isExpanded: true})
    }

    deselect() {
      const { clearJoke } = this.props
      this.setState({isExpanded: false})
      clearJoke()
    }

    componentDidUpdate(prevProps) {
      if(prevProps.joke !== this.props.joke) {
        this.setState({isJokeLoading: false})
      }
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          select={this.select}
          deselect={this.deselect}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;




