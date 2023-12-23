import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../Context/Context';
import { Breadcums } from '../components/Breadcrums/Breadcrums';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../components/DescriptionBox/DescriptionBox';

export const Products = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id ===Number(productId))
  return (
    <div>

      <Breadcums product = {product} />
<ProductDisplay product = {product} />
<DescriptionBox></DescriptionBox>



    </div>
  )
}
