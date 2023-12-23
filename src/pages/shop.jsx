import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { Popular } from '../components/Popular/Popular'
import { Offers } from '../components/Offers/Offers'
import { NewComponent } from '../components/NewComponent/NewComponent'
import { NewsLetter } from '../components/NewsLetter/NewsLetter'
export const Shop = () => {
  return (
    <div>
      <Hero></Hero>
      <Popular></Popular>
      <Offers></Offers>
     <NewComponent></NewComponent>
     <NewsLetter></NewsLetter>
    </div>
  )
}
