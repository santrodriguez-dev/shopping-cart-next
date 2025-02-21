import { ProductList } from "@/components"

interface Props {
  params: { category: string }
}

const CategoryPage = async ({ params }: Props) => {
  const { category } = await params

  return <ProductList category={category} />
}

export default CategoryPage