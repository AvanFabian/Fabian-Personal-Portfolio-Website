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
    <div>
      <button
        onClick={() => switchLocale('en')}
        disabled={locale === 'en'}
        className="p-2 disabled:opacity-50"
      >
        EN
      </button>
      <span className="p-2">|</span>
      <button
        onClick={() => switchLocale('id')}
        disabled={locale === 'id'}
        className="p-2 disabled:opacity-50"
      >
        ID
      </button>
    </div>
  );
}