'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = (nextLocale) => {
    // Remove the current locale from the pathname
    const newPath = pathname.startsWith(`/${locale}`)
      ? pathname.substring(locale.length + 1)
      : pathname;
    router.push(`/${nextLocale}${newPath}`);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={() => switchLocale('en')}
        disabled={locale === 'en'}
        className="px-2 py-1 text-sm font-medium text-black hover:text-gray-600 disabled:opacity-50 disabled:text-gray-800 transition-colors"
      >
        EN
      </button>
      <span className="px-1 text-black">|</span>
      <button
        onClick={() => switchLocale('id')}
        disabled={locale === 'id'}
        className="px-2 py-1 text-sm font-medium text-black hover:text-gray-600 disabled:opacity-50 disabled:text-gray-800 transition-colors"
      >
        ID
      </button>
    </div>
  );
}