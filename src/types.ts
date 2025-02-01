export interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

export interface ShopImageContainerProps {
  images: ImageProps[];
}
