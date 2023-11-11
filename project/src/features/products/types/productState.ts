import Product from "./product";

export default interface ProductState {
  products: Product []
  error?: null | string
  isLoading?: boolean
  
  
}