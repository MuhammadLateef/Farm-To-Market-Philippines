import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinksProps {
  pathname: string;
}

const links = [
  { label: 'HOME', href: '/' },
  { label: 'BUY', href: '/buy' },
  { label: 'SELL', href: '/sell' },
  { label: 'INVEST', href: '/invest' },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTACT', href: '/contact' },
];

export default function NavLinks({ pathname }: NavLinksProps) {
  return (
    <div className="flex gap-8">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'sm:text-base text-sm font-bold transition-colors relative tracking-wider',
              isActive
                ? 'text-gray-900 font-bold'
                : 'text-gray-500 hover:text-gray-900'
            )}
          >
            {link.label}
            {isActive && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-green-600 rounded-t-sm" />
            )}
          </Link>
        );
      })}
    </div>
  );
}
