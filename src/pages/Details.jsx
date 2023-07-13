import React from 'react'

import Header from '../parts/Header'
import Breadcrumb from '../components/Breadcrumb'

import ProductDetails from '../parts/Details/ProductDetails'
import Suggestion from '../parts/Details/Suggestion'

import Sitemap from '../parts/Sitemap'
import Footer from '../parts/Footer'

export default function HomePage() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/7888", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  )
}
