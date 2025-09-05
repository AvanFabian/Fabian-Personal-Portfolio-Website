"use client";

import Hr from "@/components/Hr";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

function Title() {
	const t = useTranslations('Experience');

	return (
		<div className="mt-16 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
			<div className="flex justify-center items-center flex-col my-5 self-start">
				<Hr variant="long"></Hr>
				<motion.h1
					className="text-3xl font-bold mt-3"
					initial={{
						opacity: 0,
						x: -200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						delay: 0.7,

						type: "spring",
					}}>
					{t('title')}
				</motion.h1>
			</div>
		</div>
	);
}

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-10 p-10 grid grid-cols-1  my-10 ">
			<motion.div
				className="flex justify-center items-start flex-col mb-5 "
				initial={{
					opacity: 0,
					x: -200,
				}}
				whileInView={{
					opacity: 1,
					x: 0,
				}}
				transition={{
					delay: 0.5,

					type: "spring",
				}}>
				<section className="grid gap-8 md:gap-12">
					<div className="relative after:absolute after:inset-y-2 after:w-1 after:bg-gray-700 after:left-[-4px] md:after:left-1 lg:after:left-2 xl:after:left-3 grid gap-8 md:gap-12 pl-6 md:pl-8">
						{children}
					</div>
				</section>
			</motion.div>
		</div>
	);
}

export default function Experience() {
	const t = useTranslations('Experience');

	return (
		<>
			<Title />
			<Wrapper>
				<div className="grid gap-8">
					{/* Example Experience Card - repeat for each experience */}
					<div className="grid gap-4 relative">
						<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
						<div className="font-medium text-lg">{t('profileImageStudio.period')}</div>
						<div>
							<h3 className="font-semibold text-xl text-black">{t('profileImageStudio.company')}</h3>
							<h4 className="font-light text-md mb-4">{t('profileImageStudio.position')}</h4>
							<p className="text-justify">
								{t('profileImageStudio.description')}
							</p>
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">AdonisJS</div>
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">PostgreSQL</div>
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">Postman</div>
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">RBAC</div>
							</div>
						</div>
					</div>
					<div className="grid gap-4 relative">
						<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
						<div className="font-medium text-lg">{t('sealab.period')}</div>
						<div>
							<h3 className="font-semibold text-xl text-black">{t('sealab.company')}</h3>
							<h4 className="font-light text-md mb-4">{t('sealab.position')}</h4>
							<p className="text-justify">
								{t('sealab.description')}
							</p>
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">Windows Server</div>
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">LDAP</div>
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">Active Directory</div>
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">Okta</div>
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">IAM</div>
							</div>
						</div>
					</div>
					<div className="grid gap-4 relative">
						<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
						<div className="font-medium text-lg">{t('scpMentor.period')}</div>
						<div>
							<h3 className="font-semibold text-xl text-black">{t('scpMentor.company')}</h3>
							<h4 className="font-light text-md mb-4">{t('scpMentor.position')}</h4>
							<p className="text-justify">
								{t('scpMentor.description')}
							</p>
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">Mentorship</div>
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">Innovation</div>
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">Research</div>
							</div>
						</div>
					</div>
					<div className="grid gap-4 relative">
						<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
						<div className="font-medium text-lg">{t('gdgocMl.period')}</div>
						<div>
							<h3 className="font-semibold text-xl text-black">{t('gdgocMl.company')}</h3>
							<h4 className="font-light text-md mb-4">{t('gdgocMl.position')}</h4>
							<p className="text-justify">
								{t('gdgocMl.description')}
							</p>
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">ML/AI</div>
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">Google</div>
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">Study Jam</div>
							</div>
						</div>
					</div>
					<div className="grid gap-4 relative">
						<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
						<div className="font-medium text-lg">{t('idxPartner.period')}</div>
						<div>
							<h3 className="font-semibold text-xl text-black">{t('idxPartner.company')}</h3>
							<h4 className="font-light text-md mb-4">{t('idxPartner.position')}</h4>
							<p className="text-justify">
								{t('idxPartner.description')}
							</p>
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">Data Science</div>
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">XGBoost</div>
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">Scikit-learn</div>
							</div>
						</div>
					</div>
					<div className="grid gap-4 relative">
						<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
						<div className="font-medium text-lg">{t('gdscMl.period')}</div>
						<div>
							<h3 className="font-semibold text-xl text-black">{t('gdscMl.company')}</h3>
							<h4 className="font-light text-md mb-4">{t('gdscMl.position')}</h4>
							<p className="text-justify">
								{t('gdscMl.description')}
							</p>
							<div className="flex flex-wrap gap-2 mt-4 text-sm">
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">ML/AI</div>
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">Google</div>
								<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">Study Jam</div>
							</div>
						</div>
					</div>
				</div>
			</Wrapper>
		</>
	);
}
