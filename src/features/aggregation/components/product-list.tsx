import { ProductItem } from './product-item'
import GridCard from '@/components/molecule/grid-card'

export function ProductList({ data }: { data: any[] }) {
  return (
    <GridCard>
      {data.map((item: any) => {
        return <ProductItem key={item.slug} item={item} />
      })}
    </GridCard>
  )
}
