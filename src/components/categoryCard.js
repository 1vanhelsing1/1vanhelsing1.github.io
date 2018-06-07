import React from 'react'
import withPositioning from '../containers/categoryCard'
import CategoryWrapper from './category.style'
import Spinner from 'react-spinkit'

const CategoryCard = ({isMobile, joke, select, deselect, isExpanded, isJokeLoading, index, categoryData: {category, opacity, transform}}) => (
  <CategoryWrapper
    opacity={opacity}
    transform={transform}
    index={index}
    onClick={()=> isExpanded? deselect() : select()}
    isExpanded={isExpanded}
    isMobile={isMobile}
  >
    <div className="text">
      {isExpanded? (
        <div className="joke-text">
          {isJokeLoading? (<Spinner name="ball-scale-ripple-multiple" />) 
          : ( 
            joke.value
          )}
        </div>
      ) : (
      category
      )}
    </div>
  </CategoryWrapper>
)

export default withPositioning(CategoryCard)