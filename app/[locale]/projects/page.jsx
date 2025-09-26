"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Button from "@/components/Button";
import Image from "next/image";

// images
import MotherApp1 from "@/public/image/projects/mobile/motherapp/motherapp1.webp";
import MotherApp2 from "@/public/image/projects/mobile/motherapp/motherapp2.webp";
import MotherApp3 from "@/public/image/projects/mobile/motherapp/motherapp3.webp";
import DashEkraf1 from "@/public/image/projects/web/dashekraf/dashekraf1.webp";
import DashEkraf2 from "@/public/image/projects/web/dashekraf/dashekraf2.webp";
import DashEkraf3 from "@/public/image/projects/web/dashekraf/dashekraf3.webp";
import Neurehab1 from "@/public/image/projects/scientific/neurehab/neurehab1.webp";
import Neurehab3 from "@/public/image/projects/scientific/neurehab/neurehab3.webp";
import Neurehab4 from "@/public/image/projects/scientific/neurehab/neurehab4.webp";
import Neurehab5 from "@/public/image/projects/scientific/neurehab/neurehab6.webp";
import Neurehab7 from "@/public/image/projects/scientific/neurehab/neurehab7.webp";
import ProjectAll from "@/public/image/projects.webp";

import Hr from "@/components/Hr";
import ProjectCard from "./(project-card)";
import Projects from "@/json/data.json";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import StructuredData from "@/components/StructuredData";

// Category object will be handled inside the component to use translations

export default function Page() {
	const t = useTranslations("ProjectsPage");
	const tCommon = useTranslations("Common");
	const [expandedCaseStudy, setExpandedCaseStudy] = useState(null);
	const [visibleProjects, setVisibleProjects] = useState(4);

	const projects = Projects.Projects.filter((item) => item.show === true);
	const hasMoreProjects = visibleProjects < projects.length;

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const loadMoreProjects = () => {
		setVisibleProjects(prev => Math.min(prev + 4, projects.length));
	};
	return (
		<>
			<StructuredData type="portfolio" locale="en" />
			<main className="overflow-hidden">
				<FixedButon href="/#projects">
					<FontAwesomeIcon
						icon={faChevronLeft}
						className="text-black pr-10"
					/>
				</FixedButon>
				<div className="relative h-screen w-screen  gap-4 p-10 flex justify-center items-center flex-col mb-10 overflow-hidden">
					<div className="z-0 mb-48 md:mb-0  md:absolute top-1/4  md:right-[10%] md:-translate-y-16 ">
						<motion.div
							initial={{ scale: 1 }}
							animate={{ scale: 1.6 }}
							transition={{ duration: 1, ease: "circOut" }}
							className="bg-slate-300 rounded-sm h-[400px] md:h-[600px] w-[80vw] md:w-[30vw] grayscale hover:grayscale-0 ">
							<Image
								src={ProjectAll}
								alt="Fabian"
								layout="fill"
								objectFit="cover"
							// placeholder removed for Next.js 15+ compatibility
							/>
						</motion.div>
					</div>
					<div className="z-10 w-full absolute md:w-auto md:left-[10%] top-[60%] md:top-1/3 col-span-2 flex flex-col justify-center items-start md:items-start text-start px-10 pt-4 backdrop-filter backdrop-blur-sm md:backdrop-blur-none md:backdrop-filter-none bg-gray-100 bg-opacity-50 md:bg-transparent md:pt-0">
						<h1 className="md:bg-white bg-transparent lg:bg-transparent bg-opacity-50 md-px-0 text-black text-5xl md:text-8xl font-bold">
							{t('title')}
						</h1>
						<Hr />
						<p className="title  text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
							{t('description')}
						</p>
						<motion.div
							initial={{ opacity: 0, y: 100 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, ease: "circOut" }}
							onClick={() => {
								window.scrollTo({
									top: 1000,
									behavior: "smooth",
								});
							}}
							className="mb-3">
							<Button variation="primary">{t('scrollDown')}</Button>
						</motion.div>
					</div>
				</div>
				<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<Hr variant="long"></Hr>
						<h2 className="text-3xl font-bold mt-3">{t('featuredPortfolio')}</h2>
					</div>
				</div>

				{/* Project 1 */}
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full aspect-square">
							{/* Image 1 */}
							<div className="absolute top-4 md:top-8 right-4 md:right-36 h-[45%] md:h-[32%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-110 md:hover:scale-150 z-10 hover:z-20">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{ delay: 0.3 }}
									className="w-full h-full shadow-lg">
									<Image
										src={DashEkraf3}
										alt="Fabian"
										layout="fill"
										objectFit="cover"
										// placeholder removed for Next.js 15+ compatibility
										objectPosition="0% 0%"
									// blurDataURL is not needed for imported static images
									/>
								</motion.div>
							</div>
							{/* Image 2 */}
							<div className="absolute top-32 md:top-40 left-4 md:left-20 h-[50%] md:h-[40%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-110 md:hover:scale-150 z-10 hover:z-20">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={DashEkraf1}
										alt="Fabian"
										layout="fill"
										objectFit="cover"
									// placeholder removed for Next.js 15+ compatibility
									/>
								</motion.div>
							</div>
							{/* Image 3 */}
							<div className="absolute bottom-4 md:bottom-6 right-4 md:right-20 h-[40%] md:h-[32%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-110 md:hover:scale-150 z-10 hover:z-20">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{
										delay: 0.5,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={DashEkraf2}
										alt="Fabian"
										layout="fill"
										objectFit="cover"
									// placeholder removed for Next.js 15+ compatibility
									/>
								</motion.div>
							</div>
						</div>
					</div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5 md:px-10"
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,
							type: "spring",
						}}>
						<h2 className="text-2xl font-bold tracking-wider mb-3">
							{t('dashboardEkraf.title')}
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
							{t('dashboardEkraf.description')}
						</p>{" "}
						<div className="text-gray-600 text-justify title text-lg mt-1">
							<p className="mb-2">{t('dashboardEkraf.keyResponsibilities')}:</p>
							<ol className="space-y-2 ml-4" style={{ listStyleType: 'decimal', paddingLeft: '1rem' }}>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }} dangerouslySetInnerHTML={{ __html: t('dashboardEkraf.responsibility1') }} />
								<li style={{ listStyleType: 'decimal', display: 'list-item' }} dangerouslySetInnerHTML={{ __html: t('dashboardEkraf.responsibility2') }} />
								<li style={{ listStyleType: 'decimal', display: 'list-item' }} dangerouslySetInnerHTML={{ __html: t('dashboardEkraf.responsibility3') }} />
								<li style={{ listStyleType: 'decimal', display: 'list-item' }} dangerouslySetInnerHTML={{ __html: t('dashboardEkraf.responsibility4') }} />
							</ol>
						</div>{" "}
						<div className="mt-3">
							<Button variation="primary">
								<Link href="projects/ekrafdash">{t('more')}</Link>
							</Button>
							<Button variation="secondary">
								<Link
									href="https://ekraf.pisdev.my.id/"
									target="_blank"
									rel="noopener noreferrer">
									{t('preview')}
								</Link>
							</Button>
						</div>
					</motion.div>
				</div>

				{/* Project 2 */}
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full aspect-square">
							{/* Image 1 */}
							<div className="absolute top-4 md:top-8 right-4 md:right-36 h-[45%] md:h-[32%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-110 md:hover:scale-150 z-10 hover:z-20">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{ delay: 0.3 }}
									className="w-full h-full shadow-lg">
									<Image
										src={Neurehab3}
										alt="Fabian"
										layout="fill"
										objectFit="cover"
										// placeholder removed for Next.js 15+ compatibility
										objectPosition="0% 0%"
									// blurDataURL is not needed for imported static images
									/>
								</motion.div>
							</div>
							{/* Image 2.1 Portrait */}
							<div className="absolute top-16 md:top-24 right-1 md:right-2 h-[70%] md:h-[55%] aspect-[9/16] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-110 md:hover:scale-150 z-10 hover:z-20">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{ delay: 0.3 }}
									className="w-full h-full shadow-lg">
									<Image
										src={Neurehab7}
										alt="Fabian"
										layout="fill"
										objectFit="cover"
										// placeholder removed for Next.js 15+ compatibility
										objectPosition="0% 0%"
									// blurDataURL is not needed for imported static images
									/>
								</motion.div>
							</div>
							{/* Image 2.2 Portrait */}
							<div className="absolute bottom-1 md:bottom-2 left-1 md:left-2 h-[70%] md:h-[55%] aspect-[9/16] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-110 md:hover:scale-150 z-10 hover:z-20">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{ delay: 0.3 }}
									className="w-full h-full shadow-lg">
									<Image
										src={Neurehab7}
										alt="Fabian"
										layout="fill"
										objectFit="cover"
										// placeholder removed for Next.js 15+ compatibility
										objectPosition="0% 0%"
									// blurDataURL is not needed for imported static images
									/>
								</motion.div>
							</div>
							{/* Image 2 */}
							<div className="absolute top-32 md:top-40 left-4 md:left-10 h-[50%] md:h-[40%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-110 md:hover:scale-150 z-10 hover:z-20">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={Neurehab1}
										alt="Fabian"
										layout="fill"
										objectFit="cover"
									// placeholder removed for Next.js 15+ compatibility
									/>
								</motion.div>
							</div>
							{/* Image 3 */}
							<div className="absolute bottom-4 md:bottom-6 right-4 md:right-20 h-[40%] md:h-[32%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-110 md:hover:scale-150 z-10 hover:z-20">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{
										delay: 0.5,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={Neurehab4}
										alt="Fabian"
										layout="fill"
										objectFit="cover"
									// placeholder removed for Next.js 15+ compatibility
									/>
								</motion.div>
							</div>
						</div>
					</div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5 md:px-10"
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,
							type: "spring",
						}}>
						<h2 className="text-2xl font-bold tracking-wider mb-3">
							Neurehab: A Nationally-Funded Student Research Project (PKM-KC)
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
							{t('neurehab.description')}
						</p>{" "}
						<div className="text-gray-600 text-justify title text-lg mt-1">
							<p className="mb-2">{t('neurehab.roleTitle')}</p>
							<ol className="space-y-2 ml-4" style={{ listStyleType: 'decimal', paddingLeft: '1rem' }}>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>{t('neurehab.responsibilities.research')}</strong></li>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>{t('neurehab.responsibilities.architecture')}</strong></li>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>{t('neurehab.responsibilities.integration')}</strong></li>
							</ol>
						</div>{" "}
						<div className="mt-3">
							<Button variation="primary">
								<Link href="projects/neurehab">{t('more')}</Link>
							</Button>
							<Button variation="secondary">
								<Link
									href=""
									target="_blank"
									rel="noopener noreferrer">
									Preview
								</Link>
							</Button>
						</div>
					</motion.div>
				</div>

				{/* Project 3 */}
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full aspect-square">
							{/* Image 1 */}
							<div className="absolute top-16 md:top-28 left-8 md:left-24 h-[75%] md:h-[60%] aspect-[9/16] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-110 md:hover:scale-150 z-10 hover:z-20">
								<motion.div
									initial={{ opacity: 0, scale: 0.5, x: 100 }}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={MotherApp1}
										alt="Fabian"
										layout="fill"
										objectFit="cover"
									// placeholder removed for Next.js 15+ compatibility
									/>
								</motion.div>
							</div>
							{/* Image 2 */}
							<div className="absolute top-4 md:top-8 right-8 md:right-36 h-[70%] md:h-[55%] aspect-[9/16] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-110 md:hover:scale-150 z-10 hover:z-20">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{ delay: 0.3 }}
									className="w-full h-full shadow-lg">
									<Image
										src={MotherApp3}
										alt="Fabian"
										layout="fill"
										objectFit="cover"
										// placeholder removed for Next.js 15+ compatibility
										objectPosition="0% 0%"
									// blurDataURL is not needed for imported static images
									/>
								</motion.div>
							</div>
							{/* Image 3 */}
							<div className="absolute bottom-4 md:bottom-6 right-4 md:right-20 h-[70%] md:h-[55%] aspect-[9/16] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-110 md:hover:scale-150 z-10 hover:z-20">
								<motion.div
									initial={{
										opacity: 0,
										scale: 0.5,
										x: -100,
									}}
									whileInView={{
										opacity: 1,
										scale: 1,
										x: 0,
									}}
									transition={{
										delay: 0.5,
									}}
									className="w-full h-full shadow-lg">
									<Image
										src={MotherApp2}
										alt="Fabian"
										layout="fill"
										objectFit="cover"
									// placeholder removed for Next.js 15+ compatibility
									/>
								</motion.div>
							</div>
						</div>
					</div>
					<motion.div
						className="flex justify-center items-start flex-col mb-5 md:px-10"
						initial={{
							opacity: 0,
							x: 200,
						}}
						whileInView={{
							opacity: 1,
							x: 0,
						}}
						transition={{
							delay: 0.5,
							type: "spring",
						}}>
						<h2 className="text-2xl font-bold tracking-wider mb-3">
							{t('mother.title')}
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
							{t('mother.description')}
						</p>{" "}
						<div className="text-gray-600 text-justify title text-lg mt-1">
							<p className="mb-2">{t('mother.keyImplementations')}</p>
							<ol className="space-y-2 ml-4" style={{ listStyleType: 'decimal', paddingLeft: '1rem' }}>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>Laravel backend API</strong> {t('mother.implementations.backend')}</li>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>Flutter mobile interface</strong> {t('mother.implementations.mobile')}</li>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>Personalized dashboard</strong> {t('mother.implementations.dashboard')}</li>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>Notification system</strong> {t('mother.implementations.notifications')}</li>
							</ol>
						</div>{" "}
						<div className="mt-3">
							<Button variation="primary">
								<Link href="projects/motherapp">More</Link>
							</Button>
							<Button variation="secondary">
								<Link
									href="https://generative-trivia.vercel.app/"
									target="_blank"
									rel="noopener noreferrer">
									Preview
								</Link>
							</Button>
						</div>
					</motion.div>
				</div>

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
							{tCommon('myPortfolioGallery')}
						</motion.h1>
					</div>
				</div>

				{/* choose category */}
				<motion.div
					initial={{
						opacity: 0,
						x: 200,
					}}
					whileInView={{
						opacity: 1,
						x: 0,
					}}
					transition={{
						type: "spring",
					}}
					className="flex flex-row justify-center items-start flex-wrap gap-3 md:gap-5 my-5 ">
					<div className="text-center">
						<p className="text-gray-600 text-lg">
							{t('showingProjects', { visible: Math.min(visibleProjects, projects.length), total: projects.length })}
						</p>
					</div>
				</motion.div>

				{/* projects */}
				<div className="w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 cursor-pointer">
					{projects.slice(0, visibleProjects).map((project, index) => (
					<ProjectCard
						project={project}
						index={index}
						key={index}
					/>
				))}
				</div>

				{/* Load More Button */}
				{hasMoreProjects && (
					<motion.div
						initial={{
							opacity: 0,
						}}
						whileInView={{
							opacity: 1,
						}}
						className="flex justify-center items-center flex-col my-5">
						<Button variation="primary" onClick={loadMoreProjects}>
							{t('loadMore')}
						</Button>
					</motion.div>
				)}

				{/* view in archive btn */}
				<motion.div
					initial={{
						opacity: 0,
					}}
					whileInView={{
						opacity: 1,
					}}
					className="flex justify-center items-center flex-col my-5 self-start ">
					<Button variation="primary">
						<Link href="projects/archive">{t('viewInArchive')}</Link>
					</Button>
				</motion.div>
			</main>
		</>
	);
}
