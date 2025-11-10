import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export default function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`py-4 ${className}`} aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-yellow-400 mx-2" />
            )}
            {item.href ? (
              <Link 
                href={item.href}
                className="text-yellow-400 hover:text-yellow-300 text-sm transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-yellow-300 font-medium text-sm">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
