import { useTranslations } from "next-intl";

export default function Loading() {
	const t = useTranslations('Common');
	return (
		<>
			(
			<div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-gray-300 z-[999]">
				<h1 className="text-4xl text-gray-900">{t('loading')}</h1>
			</div>
			)
		</>
	);
}
