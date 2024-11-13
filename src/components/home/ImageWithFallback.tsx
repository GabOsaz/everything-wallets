import { useState } from "react";
import Avatar from "./Avatar";
import styled from "styled-components";

interface ImageWithFallbackT {
  src: string;
  alt: string;
  fallbackSrc: string;
  name: string;
  color?: string
}

const ImageWithFallback = ({ src, alt, fallbackSrc, name, color }: ImageWithFallbackT) => {
  const [useFallback, setUseFallback] = useState(true);

  const handleError = () => {
    setUseFallback(true);
  };

  if (useFallback && !fallbackSrc) {
    return <Avatar color={color} name={name} />;
  }

  return <Icon src={useFallback ? fallbackSrc : src} alt={alt} onError={handleError} />;
};

export default ImageWithFallback;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
