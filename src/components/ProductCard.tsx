import React, { createContext, CSSProperties } from 'react';
import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import {
  onChangeArgs,
  ProductContextProps,
  Product,
  InitialValues,
  ProductCardHandlers,
} from '../interfaces';

export interface ProductCardProps {
  product: Product;
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: ProductCardProps) => {
  const {
    counter,
    increaseBy,
    maxCount,
    isMaxCountReached,
    reset,
  } = useProduct({
    onChange,
    product,
    value,
    initialValues,
  });

  return (
    <Provider value={{ product, counter, increaseBy, maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          increaseBy,
          reset,
        })}
      </div>
    </Provider>
  );
};
