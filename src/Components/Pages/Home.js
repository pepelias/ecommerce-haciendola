import Banner from '../Organisms/Banner'
import Product from '../Organisms/Product'

const products = [
  {
    handle: 'alfombra-kelim-kashkuli-k003',
    title: 'Alfombra Kelim Kashkuli K003',
    Vendor: 'Consorcio Persa',
    type: 'Alfombras',
    variantSku: 'KELI3021KASH0084',
    variantGrams: '12600.0',
    variantInventoryQty: '5',
    variantPrice: '2063250',
    imageSrc:
      'https://cdn.shopify.com/s/files/1/0526/2832/4549/products/15464.jpg?v=1628876437',
  },
  {
    handle: 'alfombra-kelim-ivory-ki007',
    title: 'Alfombra Kelim Ivory KI007',
    Vendor: 'Consorcio Persa',
    type: 'Alfombras',
    variantSku: 'KELI3121IVOR0004',
    variantGrams: '13020.0',
    variantInventoryQty: '5',
    variantPrice: '2132025',
    imageSrc:
      'https://cdn.shopify.com/s/files/1/0526/2832/4549/products/15445.jpg?v=1628876435',
  },
  {
    handle: 'alfombra-kelim-ivory-ki006',
    title: 'Alfombra Kelim Ivory KI006',
    Vendor: 'Consorcio Persa',
    type: 'Alfombras',
    variantSku: 'KELI3121IVOR0002',
    variantGrams: '13020.0',
    variantInventoryQty: '5',
    variantPrice: '2132025',
    imageSrc:
      'https://cdn.shopify.com/s/files/1/0526/2832/4549/products/15443.jpg?v=1628876433',
  },
  {
    handle: 'alfombra-kelim-ivory-ki005',
    title: 'Alfombra Kelim Ivory KI005',
    Vendor: 'Consorcio Persa',
    type: 'Alfombras',
    variantSku: 'KELI3022IVOR0002',
    variantGrams: '13200.0',
    variantInventoryQty: '5',
    variantPrice: '2161500',
    imageSrc:
      'https://cdn.shopify.com/s/files/1/0526/2832/4549/products/15439.jpg?v=1628876431',
  },
]

const Home = () => {
  return (
    <>
      <Banner />
      <section className="container page-section">
        <h1>Lo más vendido</h1>
        <div className="products-grid">
          {products.map((product, i) => (
            <Product key={i} {...product} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Home
