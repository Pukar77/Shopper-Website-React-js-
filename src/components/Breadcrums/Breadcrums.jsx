import React from 'react'
import './Breadcrums.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'
export const Breadcums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/> {product.category} <img src={arrow_icon} alt=''/> {product.name};
    </div>
  )
}