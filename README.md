# cangel-product-card

Este es un paquete pruebas de despliegue a NPM

## Ejemplo

```jsx
import { ProductCard } from 'cangel-product-card';
```

```jsx
<ProductCard
  product={product}
  initialValues={{
    count: 4, // optional
    maxCount: 10, // optional
  }}
>
  {({ reset, increaseBy, count, isMaxCountReached, maxCount }) => (
    <>
      <ProductCard.Image />
      <ProductCard.Title />
      <ProductCard.Buttons />
    </>
  )}
</ProductCard>
```
