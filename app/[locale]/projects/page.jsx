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

// Category object will be handled inside the component to use translations

export default function Page() {
	const t = useTranslations('ProjectsPage');
	const [activeCategory, setActiveCategory] = useState(1);
	const [expandedCaseStudy, setExpandedCaseStudy] = useState(null);
	
	const category = {
		1: t('categories.website'),
		2: t('categories.scientific'),
		3: t('categories.mobile'),
	};
	const projects = Projects.Projects.filter((item) => item.show === true
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
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
						<h1 className="text-3xl font-bold mt-3">{t('featuredPortfolio')}</h1>
					</div>
				</div>

				{/* Project 1 */}
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							{/* Image 1 */}
							<div className="absolute top-8 right-36 h-[32%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10 hover:z-20">
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
							<div className="absolute top-40 left-20 h-[40%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10 hover:z-20">
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
							<div className="absolute bottom-6 right-20 h-[32%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10 hover:z-20">
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
						<div className="images relative w-full  aspect-square">
							{/* Image 1 */}
							<div className="absolute top-8 right-36 h-[32%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10 hover:z-20">
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
							<div className="absolute top-24 right-2 h-[55%] aspect-[9/16] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10 hover:z-20">
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
							<div className="absolute bottom-2 left-2 h-[55%] aspect-[9/16] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10 hover:z-20">
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
							<div className="absolute top-40 left-10 h-[40%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10 hover:z-20">
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
							<div className="absolute bottom-6 right-20 h-[32%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10 hover:z-20">
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
							Neurehab is a Karsa Cipta (KC) research and development project that successfully obtained national funding from the Ministry of Education, Culture, Research, and Technology through the Student Creativity Program (PKM). This project focuses on the design and development of an integrated post-stroke rehabilitation system that combines Virtual Reality (VR), Internet of Things (IoT), and mobile applications. The project was further developed and won a Silver Medal at the 37th PIMNAS.
						</p>{" "}
						<div className="text-gray-600 text-justify title text-lg mt-1">
							<p className="mb-2">As the  Researcher & Developer, I was responsible for:</p>
							<ol className="space-y-2 ml-4" style={{ listStyleType: 'decimal', paddingLeft: '1rem' }}>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>Research</strong> & Proposal Development.</li>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>System Architecture</strong> & Prototyping.</li>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}>Integration & <strong>Final Presentation</strong></li>
							</ol>
						</div>{" "}
						<div className="mt-3">
							<Button variation="primary">
								<Link href="projects/neurehab">More</Link>
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
						<div className="images relative w-full  aspect-square">
							{/* Image 1 */}
							<div className="absolute top-28 left-24 h-[60%] aspect-[9/16] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10 hover:z-20">
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
							<div className="absolute top-8 right-36 h-[55%] aspect-[9/16] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10 hover:z-20">
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
							<div className="absolute bottom-6 right-20 h-[55%] aspect-[9/16] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10 hover:z-20">
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
							Mother : Pregnancy Wellness & Fitness Monitoring App
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
							A comprehensive pregnancy wellness mobile application built with Flutter and Laravel, designed to support urban pregnant women
							in managing their health journey while addressing obesity-related risks during pregnancy.
						</p>{" "}
						<div className="text-gray-600 text-justify title text-lg mt-1">
							<p className="mb-2">Key technical implementations included:</p>
							<ol className="space-y-2 ml-4" style={{ listStyleType: 'decimal', paddingLeft: '1rem' }}>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>Laravel backend API</strong> with secure authentication and data encryption for handling sensitive health information.</li>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>Flutter mobile interface</strong> with intuitive forms for daily health logging, weight tracking, and appointment scheduling.</li>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>Personalized dashboard</strong> featuring progress charts, health insights, and customized recommendations based on user data.</li>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>Notification system</strong> for medication reminders, appointment alerts, and milestone celebrations throughout pregnancy.</li>
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
							My Portfolio Gallery
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
					{Object.keys(category).map((key, index) => (
						<button
							key={index}
							className={`px-2 md:px-4 py-2 rounded-lg cursor-pointer transition-all ease duration-300 focus:bg-gray-300 focus:text-black focus:ring focus:ring-slate-500 ${activeCategory === key
								? "bg-gray-300 text-black hover:bg-gray-700 hover:text-white"
								: "bg-gray-700 text-white hover:bg-gray-300 hover:text-black"
								}`}
							onClick={() => setActiveCategory(key)}>
							{category[key]}
						</button>
					))}
				</motion.div>

				{/* projects */}
				<div className="w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10 cursor-pointer">
					{projects.map((project, index) => (
						<ProjectCard
							project={project}
							key={index}
							activeCategory={activeCategory}
						/>
					))}
				</div>

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
