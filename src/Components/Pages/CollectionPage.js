import ProductsList from './ProductsList'

const CollectionPage = ({ match }) => {
  return (
    <ProductsList
      bannerImg="/assets/products.jpg"
      bannerTitle={match.params.collection}
      title="Productos incluídos"
      endpoint={`/products/getByCollectionHandle/${match.params.collection}`}
    />
  )
}
export default CollectionPage
