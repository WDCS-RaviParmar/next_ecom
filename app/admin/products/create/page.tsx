import CreateProductForm from '@/app/ui/admin/CreateProductForm'
import ProductCategories from '@/app/ui/admin/ProductCategories'
import React from 'react'

const createProduct = () => {
  return (
    <CreateProductForm>
      <ProductCategories/>
    </CreateProductForm>
  )
}

export default createProduct
