"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Rektorat from "@/public/image/educations/Rektorat.jpg";
import GerbangSmg from "@/public/image/educations/GerbangSmg.jpeg";
import Doktoral from "@/public/image/educations/Doktoral.jpeg";

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
				{children}
			</motion.div>
		</div>
	);
}

export default function Education() {
	const t = useTranslations('Education');
	
	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12">
				<div className="text-center space-y-2">
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
						{t('title')}
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						{t('subtitle')}
					</p>
				</div>
				<div className="grid gap-8 md:gap-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="px-5">
							<div className="font-medium text-lg">
								{t('period')}
							</div>
							<div>
								<h2 className="font-semibold text-xl">
									{t('university')}
								</h2>
								<h3 className="text-md font-normal mb-3">
									{t('degree')}
								</h3>
								<div className="gap-4 mb-4 flex items-stretch md:h-[300px] xl:h-[400px]">
									<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
										<Image
											src={Doktoral}
											width={400}
											height={225}
											alt="University"
											className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
										/>
									</div>
									<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
										<Image
											src={Rektorat}
											width={400}
											height={225}
											alt="University"
											className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
										/>
									</div>
									<div className="flex-[1] transition-all duration-300 ease-in-out hover:flex-[3] group">
										<Image
											src={GerbangSmg}
											width={400}
											height={225}
											alt="University"
											className="rounded-lg w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
										/>
									</div>
								</div>
								<div className="flex items-center gap-2">
										<p className="text-justify">
											{t('description')}
										</p>
									</div>
									{/* add gpa in a style */}
									<div className="flex flex-wrap gap-2 mt-4 text-sm">
										<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
											{t('gpa')}
										</div>
									</div>
							</div>
						</div>
						<div className="flex flex-col justify-start px-5 md:px-0">
							<h2 className="font-semibold text-xl mt-7">{t('achievementsTitle')}</h2>
							<ul className="list-disc pl-4 space-y-6">
								<li>
									<span className="font-semibold">{t('achievements.goldMedal.title')}</span> <span className="block text-sm text-gray-600">{t('achievements.goldMedal.period')}</span>
									<p className="text-md text-justify mt-1">{t('achievements.goldMedal.description')}</p>
								</li>
								<li>
									<span className="font-semibold">{t('achievements.silverMedal.title')}</span> <span className="block text-sm text-gray-600">{t('achievements.silverMedal.period')}</span>
									<p className="text-md text-justify mt-1">{t('achievements.silverMedal.description')}</p>
								</li>
								<li>
									<span className="font-semibold">{t('achievements.funding.title')}</span> <span className="block text-sm text-gray-600">{t('achievements.funding.period')}</span>
									<p className="text-md text-justify mt-1">{t('achievements.funding.description')}</p>
								</li>
								<li>
									<span className="font-semibold">{t('achievements.english.title')}</span> <span className="block text-sm text-gray-600">{t('achievements.english.period')}</span>
									<p className="text-md text-justify mt-1">{t('achievements.english.description')}</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</Wrapper>
	);
}
