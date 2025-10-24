'use client';

import { useEffect, useCallback } from 'react';
import Image from 'next/image';
import { PortfolioItem } from '@/types/portfolio';

interface LightboxProps {
  item: PortfolioItem;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export default function Lightbox({
  item,
  isOpen,
  onClose,
  onNext,
  onPrevious,
  hasPrevious,
  hasNext,
}: LightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (hasPrevious) onPrevious();
          break;
        case 'ArrowRight':
          if (hasNext) onNext();
          break;
      }
    },
    [isOpen, onClose, onNext, onPrevious, hasPrevious, hasNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-modal-backdrop bg-black/95 flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image lightbox"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-modal text-white hover:text-accent-primary transition-colors duration-200 p-2"
        aria-label="Close lightbox"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {hasPrevious && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-4 z-modal text-white hover:text-accent-primary transition-colors duration-200 p-2"
          aria-label="Previous image"
        >
          <svg
            className="w-12 h-12"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-4 z-modal text-white hover:text-accent-primary transition-colors duration-200 p-2"
          aria-label="Next image"
        >
          <svg
            className="w-12 h-12"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      <div
        className="relative max-w-7xl max-h-[90vh] w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full h-full flex flex-col">
          <div className="relative flex-1 min-h-0">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-contain"
              sizes="(max-width: 1536px) 100vw, 1536px"
              priority
            />
          </div>

          <div className="bg-black/50 backdrop-blur-sm p-6 text-white mt-4 rounded-lg">
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-300 mb-4">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            {item.metadata.client && (
              <div className="mt-4 text-sm text-gray-400">
                <span className="font-semibold">Client:</span> {item.metadata.client}
                {item.metadata.year && (
                  <span className="ml-4">
                    <span className="font-semibold">Year:</span> {item.metadata.year}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
