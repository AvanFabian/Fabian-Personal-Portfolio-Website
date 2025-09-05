import { useTranslations } from "next-intl";

export default function Loading() {
	const t = useTranslations('Common');
	return (
		<div className="min-h-screen w-screen flex justify-center items-center">
			<div className="mx-auto">
				<h1 className="text-4xl text-gray-900">{t('loading')}</h1>
			</div>
		</div>
	);
}
