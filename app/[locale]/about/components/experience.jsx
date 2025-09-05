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
	return (
		<>
			<Title />
			<Wrapper>
				<div className="grid gap-8">
					{/* Example Experience Card - repeat for each experience */}
					<div className="grid gap-4 relative">
						<div className="aspect-square w-5 bg-black rounded-full absolute left-0 translate-x-[-29.5px] z-10" />
						<div className="font-medium text-lg">February 2025 – June 2025 · Hybrid</div>
						<div>
							<h3 className="font-semibold text-xl text-black">Profile Image Studio</h3>
							<h4 className="font-light text-md mb-4">Backend Developer Intern</h4>
							<p className="text-justify">
								Digital company, providing ERP system and custom software development for business. Implemented customized business logic using AdonisJS for creative economy actors, automated questionnaire assessment data recapitulation, designed normalized PostgreSQL schema, wrote API docs in Postman, collaborated with DevOps, and implemented RBAC authorization.
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
						<div className="font-medium text-lg">April 2025 – June 2025 · Offline</div>
						<div>
							<h3 className="font-semibold text-xl text-black">Social Economic Accelerator Lab</h3>
							<h4 className="font-light text-md mb-4">Identity and Access Management Intern</h4>
							<p className="text-justify">
								Digital company, providing ERP system and custom software development for business. Windows Server setup, LDAP &amp; AD configuration, IAM &amp; CIAM implementation, Okta IdP for SSO, and data security for business continuity.
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
						<div className="font-medium text-lg">October 2024 – Present</div>
						<div>
							<h3 className="font-semibold text-xl text-black">Student Creativity Program UM</h3>
							<h4 className="font-light text-md mb-4">Mentor</h4>
							<p className="text-justify">
								Student innovation and research program funded by the Indonesian Ministry of Education. Mentored teams, oversaw proposal writing, research, and presentations, and provided strategic input for project feasibility and impact.
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
						<div className="font-medium text-lg">October 2024 – July 2025</div>
						<div>
							<h3 className="font-semibold text-xl text-black">Tech Community GDGOC UM</h3>
							<h4 className="font-light text-md mb-4">ML/AI Core Team</h4>
							<p className="text-justify">
								University based Technology Community Program supported by Google. Led final projects, collaborated across technical divisions, and delivered ML/AI learning materials in Study Jam sessions.
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
						<div className="font-medium text-lg">February 2024 – March 2024</div>
						<div>
							<h3 className="font-semibold text-xl text-black">ID/X Partner</h3>
							<h4 className="font-light text-md mb-4">Data Scientist</h4>
							<p className="text-justify">
								Project Based Internship program by Rakamin Academy with industry partner ID/X Partners. Developed ML model for loan default risk prediction, performed feature engineering, and implemented XGBoost with Scikit-learn.
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
						<div className="font-medium text-lg">October 2023 – October 2024</div>
						<div>
							<h3 className="font-semibold text-xl text-black">Tech Community GDSC UM</h3>
							<h4 className="font-light text-md mb-4">ML/AI Core Team</h4>
							<p className="text-justify">
								University based Community Program supported by Google. Delivered ML/AI learning materials in Study Jam sessions and guided students in practical ML/AI applications.
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
