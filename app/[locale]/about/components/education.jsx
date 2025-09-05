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
	return (
		<Wrapper>
			<section className="grid gap-8 md:gap-12">
				<div className="text-center space-y-2">
					<h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
						{useTranslations('Education')('title')}
					</h1>
					<p className="text-muted-foreground max-w-[800px] mx-auto">
						{useTranslations('Education')('description')}
					</p>
				</div>
				<div className="grid gap-8 md:gap-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						<div className="px-5">
							<div className="font-medium text-lg">
								2022 - Present
							</div>
							<div>
								<h2 className="font-semibold text-xl">
									Universitas Negeri Malang
								</h2>
								<h3 className="text-md font-normal mb-3">
									S1 Teknik Informatika | Computer Science
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
										Aspiring to be a software engineer, I am
										currently pursuing a bachelor&rsquo;s
										degree in computer science at
										Universitas Negeri Malang. Fascinated by
										the world of technology, I am eager to
										learn and explore new things in the
										field of computer science.
									</p>
								</div>
								{/* add gpa in a style */}
								<div className="flex flex-wrap gap-2 mt-4 text-sm">
									<div className="bg-gray-300 text-black px-2 py-1 rounded-2xl">
										GPA: 3.7 out of 4
									</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col justify-start px-5 md:px-0">
							<h2 className="font-semibold text-xl mt-7">Achievements</h2>
							<ul className="list-disc pl-4 space-y-6">
								<li>
									<span className="font-semibold">UM Gold Medal Tech & Trade Expo 2024</span> <span className="block text-sm text-gray-600">January 2024 – April 2024</span>
									<p className="text-md text-justify mt-1">Architected a web-based invoicing platform to digitize MSME financial processes, integrating Gemini API for a smart suggestion feature to improve business product development.</p>
								</li>
								<li>
									<span className="font-semibold">Silver Medal, 37th National Scientific Week (PIMNAS)</span> <span className="block text-sm text-gray-600">October 2024 – November 2024</span>
									<p className="text-md text-justify mt-1">Architected an innovative rehabilitation system and successfully presented its technical framework and user benefits to a national panel of judges.</p>
								</li>
								<li>
									<span className="font-semibold">Funding Recipient, National Student Creativity Program (PKM-KC)</span> <span className="block text-sm text-gray-600">February 2024 – September 2024</span>
									<p className="text-md text-justify mt-1">Secured national R&D funding by designing and proposing an innovative system for post-stroke rehabilitation using Virtual Reality (VR) and IoT.</p>
								</li>
								<li>
									<span className="font-semibold">Certificate of English Proficiency (CEFR B2 Equivalent)</span> <span className="block text-sm text-gray-600">November 2022 – December 2022</span>
									<p className="text-md text-justify mt-1">Issued by the State University of Malang with a PBT-equivalent score of 487.</p>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</Wrapper>
	);
}
