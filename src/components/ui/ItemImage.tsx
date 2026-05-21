// ============================================================
// HAYTASK - ItemImage Component
// Smart image renderer: uses real PNG/WEBP if available,
// falls back to emoji gracefully.
// ============================================================

import { useState } from 'react';
import { getItemImage } from '../../data/imageMap';
import './ItemImage.scss';

interface ItemImageProps {
  itemId: string;
  fallback: string;          // emoji fallback
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function ItemImage({ itemId, fallback, size = 'md', className = '' }: ItemImageProps) {
  const [imgError, setImgError] = useState(false);
  const imgSrc = getItemImage(itemId, '');
  const useImage = imgSrc && !imgError;

  if (useImage) {
    return (
      <div className={`item-image item-image--${size} ${className}`}>
        <img
          src={imgSrc}
          alt=""
          className="item-image__img"
          onError={() => setImgError(true)}
          draggable={false}
        />
      </div>
    );
  }

  // Emoji fallback
  return (
    <div className={`item-image item-image--${size} item-image--emoji ${className}`}>
      <span>{fallback}</span>
    </div>
  );
}
