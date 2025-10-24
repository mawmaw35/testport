'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLink[];
}

export default function MobileMenu({ isOpen, onClose, navLinks }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-modal-backdrop md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div className="fixed top-16 left-0 right-0 bottom-0 bg-surface z-modal md:hidden overflow-y-auto">
        <div className="container mx-auto px-4 py-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-2xl font-medium text-text-primary hover:text-accent-primary transition-colors duration-base"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
