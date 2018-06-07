import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import chuckActions from '../redux/chuck/actions'

const {fetchCategories, setCategories} = chuckActions


function mapStateToProps(state, ownprops) {
  return {
    categories: state.chuck.categories,
    numCategories: state.chuck.numCategories,
    rotateFn: state.browser.greaterThan.medium ? 'rotateY' : 'rotateX',
    isHorizontal: state.browser.greaterThan.medium,
    isLoading: state.UI.isLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchCategories,
    setCategories,
  }, dispatch);
}

function createContainer(ComposedComponent) {
  class Container extends Component {

    constructor(props) {
      super(props)
      this.state = {
        radius: null,
        theta: null,
        transform: 'translateZ(-288px)',
        selectedIndex: 0,
        cellWidth: 0,
        cellHeight: 0,
      }

      this.rotateCarousel = this.rotateCarousel.bind(this)
      this.next = this.next.bind(this)
      this.prev = this.prev.bind(this)
    }

    rotateCarousel() {
      const { theta, radius, selectedIndex } = this.state
      const { rotateFn } = this.props
      const angle = theta * selectedIndex * -1;
      const transform = 'translateZ(' + -radius + 'px) ' + rotateFn + '(' + angle + 'deg)';
      this.setState({transform: transform})
    }

    next() {
      this.setState({selectedIndex: this.state.selectedIndex+1}, ()=> {
          this.rotateCarousel();
        })
    }

    prev() {
      this.setState({selectedIndex: this.state.selectedIndex-1}, ()=> {
          this.rotateCarousel();
        })
    }

    componentDidMount() {
      this.props.fetchCategories()
      const carousel = document.querySelector('.carousel');
      this.setState({
        cellWidth: carousel.offsetWidth,
        cellHeight: carousel.offsetHeight,
      })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      const { numCategories, categories, isHorizontal, rotateFn, setCategories } = this.props
      const { cellWidth, cellHeight, selectedIndex } = this.state
      const orientationChanged = isHorizontal!==prevProps.isHorizontal

      if(((numCategories>0) && (numCategories!=prevProps.numCategories)) || orientationChanged){

        const theta = 360 / numCategories;
        const cellSize = cellWidth;
        const radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / numCategories ) );

        let positionedCategories = []
        
        categories.forEach((category, i) => {
          let opacity, transform
          if ( i < numCategories ) {
            // visible cell
            opacity = 1;
            const cellAngle = theta * i;
            transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
          } else {
            // hidden cell
            opacity = 0;
            transform = 'none';
          }
          positionedCategories.push({
            category: category.category? category.category : category,
            opacity,
            transform
          })     
        })
        
        setCategories(positionedCategories)
        
        this.setState({
          theta,
          radius
        }, ()=> {
          console.log('callback')
          this.rotateCarousel();
        })        
      }  
    }

    render() {
      return (
        <ComposedComponent
          {...this.props}
          {...this.state}
          next={this.next}
          prev={this.prev}
        />
      );
    }
  }

  return connect(mapStateToProps, mapDispatchToProps)(Container);
}

export default createContainer;


