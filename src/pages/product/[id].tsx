import { useRouter } from "next/router"

import { ImageContainer, ProductContainer, ProductDetails } from "@styles/pages/product"

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias necessitatibus illo deserunt cupiditate. Reprehenderit eligendi animi accusantium distinctio dolorem autem minima, quisquam dolore voluptates assumenda odio, esse nihil, dolorum saepe?</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
