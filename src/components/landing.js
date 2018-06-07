import React from 'react'
import withCategories from '../containers/categories'
import CategoryCard from './categoryCard'
import LandingWrapper from './landing.style'
import Spinner from 'react-spinkit'

const Landing = ({categories, transform, isLoading, prev, next}) => (
  <LandingWrapper isLoading={isLoading} transform={transform}>
    <div className="button" onClick={prev} > {'<'} </div>
    <div className="scene">
      {isLoading && (<Spinner name="ball-pulse-rise" />)}
      <div className="title">Choose wisely</div>
      <div className="carousel">
        {categories.map((category,i) => 
          <CategoryCard categoryData={category} index={i} />
        )}
      </div>
    </div>
    <div className="button" onClick={next} > {'>'} </div>
  </LandingWrapper>
)

export default withCategories(Landing)