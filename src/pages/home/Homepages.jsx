import React from 'react'
import Home from '../../components/home/banner/Banner'
import Banner from '../../components/home/banner/Banner'
import Category from '../../components/home/catagory/Category'
import Product from '../../components/home/product/Product'
import Productminimal from '../../components/home/productminimal/Productminimal'
import Testimonial from '../../components/home/testimonial/Testimonial'
import Blog from '../../components/home/blog/Blog'

function Homepages() {
  return (
    <div>
      <Banner/>
      <Category/>
    {/* <Product/> */}
    <Productminimal/>
    {/* <Product/> */}
    <Testimonial/>
    <Blog/>
    </div>
  )
}

export default Homepages