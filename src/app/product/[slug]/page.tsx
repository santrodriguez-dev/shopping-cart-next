import { getProductById } from "@/services"
import { notFound } from "next/navigation"
import { ProductDetail } from "@/components"

interface Props {
  params: { slug: string }
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params

  try {
    const product = await getProductById(slug)
    return <ProductDetail product={product} />
  }
  catch (error) {
    return notFound()
  }
}