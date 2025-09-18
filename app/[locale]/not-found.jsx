"use client"
import React from "react";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

const NotFound = () => {
	const locale = useLocale();
	const t = useTranslations('NotFound');
	return (
		<div>
			<div className="relative min-h-screen w-full  gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
				<div className="min-h-screen flex justify-center items-center">
					<div className="mx-auto grid grid-cols-1   ">
						<div className="flex justify-center items-center flex-col mb-5 space-y-10">
							<div>
								<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400 text-center">
									{t('pageNotFound')}
								</h2>
								<h1 className="text-4xl font-medium text-neutral-900 text-center">
									404
								</h1>
							</div>
							<div className="flex flex-col space-y-4">
								<button
									onClick={() => window.history.back()}
									className="text-lg text-neutral-900 hover:text-neutral-800 text-center border-2 border-gray-800 rounded-xl px-6 py-3 transition-colors duration-200 bg-white hover:bg-gray-50">
									{t('goBack')}
								</button>
								<Link
									href={`/${locale || 'en'}`}
									className="text-lg text-neutral-600 hover:text-neutral-800 text-center border-2 border-gray-400 rounded-xl px-6 py-3 transition-colors duration-200 bg-white hover:bg-gray-50">
									Go to Home
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound;