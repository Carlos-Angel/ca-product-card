import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';
import NoImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export interface Props {
  image?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductImage = ({ image, className, style }: Props) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  imgToShow = image ? image : product.img ? product.img : NoImage;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgToShow}
      alt="product"
    />
  );
};
