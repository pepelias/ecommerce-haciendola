import ProductsList from './ProductsList'

const CollectionPage = ({ match }) => {
  const img = `./slides/${match.params.collection.replaceAll(' ', '-')}.png`
  return (
    <ProductsList
      bannerImg={img}
      bannerTitle={match.params.collection}
      title="Productos incluídos"
      endpoint={`/products/getByCollectionHandle/${match.params.collection}`}
    />
  )
}
export default CollectionPage
