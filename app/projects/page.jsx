"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/components/Button";
import Image from "next/image";

// images
import MotherApp1 from "@/public/image/projects/mobile/motherapp/motherapp1.jpg";
import MotherApp2 from "@/public/image/projects/mobile/motherapp/motherapp2.jpg";
import MotherApp3 from "@/public/image/projects/mobile/motherapp/motherapp3.jpg";
import DashEkraf1 from "@/public/image/projects/web/dashekraf/dashekraf1.webp";
import DashEkraf2 from "@/public/image/projects/web/dashekraf/dashekraf2.webp";
import DashEkraf3 from "@/public/image/projects/web/dashekraf/dashekraf3.webp";
import Neurehab1 from "@/public/image/projects/scientific/neurehab1.jpg";
import Neurehab2 from "@/public/image/projects/scientific/neurehab2.jpg";
import Neurehab3 from "@/public/image/projects/scientific/neurehab3.jpg";
import ProjectAll from "@/public/image/projects.webp";

import Hr from "@/components/Hr";
import ProjectCard from "./(project-card)";
import Projects from "@/json/data.json";
import FixedButon from "@/components/FixedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const category = {
	1: "Website",
	2: "Scientific Research & Document",
	3: "Mobile Apps",
}

export default function Page() {
	const [activeCategory, setActiveCategory] = useState(1);
	const [expandedCaseStudy, setExpandedCaseStudy] = useState(null);
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
							My Projects
						</h1>
						<Hr />
						<p className="title  text-xl mt-4 tracking-wider text-gray-900 leading-[1.7rem] mb-5">
							List of my projects that I have done and{" "}
							<span className="bg-transparent md:bg-gray-100 bg-opacity-50 xl:bg-transparent">
								{" "}
								currently
								<br />
								working on.
							</span>
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
							<Button variation="primary">Scroll Down</Button>
						</motion.div>
					</div>
				</div>
				<div className="mt-10 flex flex-col justify-start items-center w-full pl-10 md:pl-32">
					<div className="flex justify-center items-center flex-col my-5 self-start ">
						<Hr variant="long"></Hr>
						<h1 className="text-3xl font-bold mt-3">Featured Portfolio</h1>
					</div>
				</div>
				{/* Project 1 */}
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 h-[40%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10">
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
							<div className="absolute top-8 right-36 h-[32%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
							<div className="absolute bottom-6 right-20 h-[32%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
										src={Neurehab2}
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
								<Link href="projects/web/ekrafdash">More</Link>
							</Button>
							<Button variation="secondary">
								<Link
									href="https://ekraf.pisdev.my.id/"
									target="_blank"
									rel="noopener noreferrer">
									Preview
								</Link>
							</Button>
						</div>
					</motion.div>
				</div>
				{/* Project 2 */}
				<div className="relative w-screen mx-auto container gap-4 px-10 grid grid-cols-1 md:grid-cols-2 mb-10">
					<div className="flex justify-center items-start flex-col mb-5 ">
						<div className="images relative w-full  aspect-square">
							<div className="absolute top-28 left-10 h-[40%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10">
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
							<div className="absolute top-8 right-36 h-[32%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
							<div className="absolute bottom-6 right-20 h-[32%] aspect-[16/9] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
							Dashboard Ekraf : Southeast Sulawesi Creative Economy Platform
						</h2>
						<p className="text-gray-600 text-justify title text-lg">
							Architected and developed a comprehensive backend system for Southeast Sulawesi&apos;s creative economy platform using AdonisJS and PostgreSQL. 
							Built secure RESTful APIs and implemented automated data processing workflows to support digital transformation initiatives for local creative businesses.
						</p>{" "}
						<div className="text-gray-600 text-justify title text-lg mt-1">
							<p className="mb-2">Key development responsibilities included:</p>
							<ol className="space-y-2 ml-4" style={{ listStyleType: 'decimal', paddingLeft: '1rem' }}>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>Custom questionnaire module</strong> with dynamic form generation and validation for collecting business data from creative economy actors.</li>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>Automated reporting dashboard</strong> that transforms raw survey data into comprehensive stakeholder reports with data visualization.</li>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>User management system</strong> with role-based access control for administrators, surveyors, and business owners.</li>
								<li style={{ listStyleType: 'decimal', display: 'list-item' }}><strong>Real-time analytics dashboard</strong> providing insights on survey completion rates, response patterns, and business distribution.</li>
							</ol>
						</div>{" "}
						<div className="mt-3">
							<Button variation="primary">
								<Link href="projects/web/ekrafdash">More</Link>
							</Button>
							<Button variation="secondary">
								<Link
									href="https://ekraf.pisdev.my.id/"
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
							<div className="absolute top-28 left-10 h-[60%] aspect-[9/16] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150 z-10">
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
							<div className="absolute top-8 right-36 h-[55%] aspect-[9/16] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
							<div className="absolute bottom-6 right-20 h-[55%] aspect-[9/16] grayscale hover:grayscale-0 transition-all ease duration-300 hover:scale-150">
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
								<Link href="projects/mobile/motherapp">More</Link>
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
						<Link href="projects/archive">View In Archive</Link>
					</Button>
				</motion.div>

				{/* Scientific Research & Documents Section */}
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
							Scientific Research & Documents
						</motion.h1>
					</div>
				</div>

				{/* Research & Documents List */}
				<div className="w-screen mx-auto container px-10 mb-16">
					<div className="max-w-4xl mx-auto space-y-4">
						{/* Research Item 1 */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2 }}
							className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300">
							<div className="flex flex-col md:flex-row md:items-center md:justify-between">
								<div className="flex-1">
									<div className="flex items-center gap-3 mb-2">
										<span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Competition</span>
										<span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Silver Medal</span>
									</div>
									<h3 className="text-lg font-bold text-gray-900 mb-2">37th PIMNAS - Neurehab: VR-Based Post-Stroke Rehabilitation System</h3>
									<p className="text-gray-600 text-sm mb-3">Innovative rehabilitation system combining Virtual Reality, IoT sensors, and mobile applications for post-stroke patient recovery. Awarded Silver Medal at the National Student Scientific Week.</p>
									<div className="flex items-center text-xs text-gray-500">
										<span>Published: October 2024</span>
										<span className="mx-2">•</span>
										<span>Category: Healthcare Technology</span>
									</div>
								</div>
								<div className="mt-4 md:mt-0 md:ml-6">
									<Button variation="secondary">
										<Link href="#" target="_blank" rel="noopener noreferrer">
											View Research
										</Link>
									</Button>
								</div>
							</div>
						</motion.div>

						{/* Document Item 1 */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.6 }}
							className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300">
							<div className="flex flex-col md:flex-row md:items-center md:justify-between">
								<div className="flex-1">
									<div className="flex items-center gap-3 mb-2">
										<span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Legal Document</span>
										<span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Professional</span>
									</div>
									<h3 className="text-lg font-bold text-gray-900 mb-2">Software Development Contract Template</h3>
									<p className="text-gray-600 text-sm mb-3">Comprehensive legal framework for software development projects including intellectual property rights, deliverables, payment terms, and liability clauses. Used for multiple client engagements.</p>
									<div className="flex items-center text-xs text-gray-500">
										<span>Created: June 2024</span>
										<span className="mx-2">•</span>
										<span>Category: Legal Framework</span>
									</div>
								</div>
								<div className="mt-4 md:mt-0 md:ml-6">
									<Button variation="secondary">
										<Link href="#" target="_blank" rel="noopener noreferrer">
											View Template
										</Link>
									</Button>
								</div>
							</div>
						</motion.div>

						{/* Competition Item */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 1.0 }}
							className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-gray-300">
							<div className="flex flex-col md:flex-row md:items-center md:justify-between">
								<div className="flex-1">
									<div className="flex items-center gap-3 mb-2">
										<span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Competition</span>
										<span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Funded</span>
									</div>
									<h3 className="text-lg font-bold text-gray-900 mb-2">PKM-KC: Student Creativity Program - Research & Development</h3>
									<p className="text-gray-600 text-sm mb-3">Successfully secured national funding from the Ministry of Education for innovative post-stroke rehabilitation technology research. Project proposal and implementation documentation available.</p>
									<div className="flex items-center text-xs text-gray-500">
										<span>Awarded: March 2024</span>
										<span className="mx-2">•</span>
										<span>Category: Research Grant</span>
									</div>
								</div>
								<div className="mt-4 md:mt-0 md:ml-6">
									<Button variation="secondary">
										<Link href="#" target="_blank" rel="noopener noreferrer">
											View Proposal
										</Link>
									</Button>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</main>
		</>
	);
}
