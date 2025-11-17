'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavMobileProps {
  pathname: string;
  onClose: () => void;
}

const links = [
  { label: 'HOME', href: '/' },
  { label: 'BUY', href: '/buy' },
  { label: 'SELL', href: '/sell' },
  { label: 'INVEST', href: '/invest' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT', href: '/contact' },
];

export default function NavMobile({ pathname, onClose }: NavMobileProps) {
  return (
    <div className="md:hidden border-t border-gray-200 pb-4">
      <div className="space-y-2 pt-4">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                'block px-4 py-3 text-sm font-medium rounded-md transition-colors',
                isActive
                  ? 'bg-green-50 text-gray-900 font-bold border-l-4 border-green-600'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
