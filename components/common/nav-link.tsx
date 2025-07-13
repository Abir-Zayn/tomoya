'use client';
//'use client': Makes this a client component (needed for hooks)

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({
  href,
  children,
  className,
}: {
  href: string; // Destination URL
  children: React.ReactNode; // Link content (text, icons, etc.)
  className?: string; // Optional additional CSS classes
}) {
  const pathname = usePathname();
  //Determines if link should be highlighted
  const isActive =
    pathname === href || (href !== '/' && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        'transition-colors text-sm duration-200 text-muted-foreground hover:text-primary hover:font-medium',
        className,
        isActive && 'text-primary'
      )}
    >
      {children}
    </Link>
  );
}
