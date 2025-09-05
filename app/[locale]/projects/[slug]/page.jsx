"use client";
import { useState, useEffect, use } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import jsonData from "@/json/data.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import NotFound from "@/app/not-found";
import Image from "next/image";
import FixedButon from "@/components/FixedButton";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function ScrollDownButton() {
	const [isAtBottom, setIsAtBottom] = useState(false);

	const handleScroll = () => {
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if (scrollTop < document.documentElement.scrollHeight - document.documentElement.clientHeight) {

			window.scrollTo({
				top: document.documentElement.scrollHeight,
				behavior: "smooth",
			});
			setIsAtBottom(true);

		} else {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
			setIsAtBottom(false);
		}
	};

	return (
		<div className="fixed bottom-5 left-0 right-0 flex justify-center items-center mb-10">
			<motion.div
				className="h-10 w-10 bg-neutral-900 rounded-full flex justify-center items-center cursor-pointer"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={handleScroll}
			>
				<FontAwesomeIcon
					icon={isAtBottom ? faChevronUp : faChevronDown}
					className="text-white text-2xl"
				/>
			</motion.div>
		</div>
	);
}


export default function Page({ params }) {
	const t = useTranslations('ProjectsPage');
	const tCommon = useTranslations('Common');
	const resolvedParams = use(params);
	const [data, setData] = useState(null);
	useEffect(() => {
		const selectedData = jsonData.Projects.find(
			(item) => item.slug === resolvedParams.slug
		);
		if (selectedData === undefined) {
			setData("404");
		} else {
			setData(selectedData);
		}
	}, [resolvedParams.slug]);

	if (data === "404") {
		return (
			<>
				<NotFound />
			</>
		);
	} else if (!data) {
		return (
			<div className="relative min-h-screen w-full  gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
				<div className="flex justify-center items-center w-full">
					<div className="mx-auto grid grid-cols-1 md:grid-cols-2  w-full">
						<div className="flex justify-center items-start flex-col mb-5 space-y-10 w-ful p-4">
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
						</div>
						<div className="flex justify-start items-start flex-col mb-5 w-full p-4">
							<div className="animate-pulse duration-500 shadow-lg bg-neutral-400 rounded  w-full h-full "></div>
						</div>
					</div>
				</div>
				{/* images */}
				<div className="mx-auto grid grid-cols-1 p-5 md:p-20  w-full h-auto">
					<div className="w-full h-auto aspect-video">
						<div className="animate-pulse duration-500 shadow-lg bg-neutral-400 h-full w-full rounded"></div>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className="relative min-h-screen w-full gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
			<FixedButon href="/projects">
				<FontAwesomeIcon
					icon={faChevronLeft}
					className="text-black pr-10"
				/>
			</FixedButon>
			<ScrollDownButton />
			{/* Project Desc */}
			<div className="flex justify-center items-center py-10">
				<div className="mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-8">
					<div className="flex justify-center items-start flex-col mb-5 space-y-10 mx-auto">
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Project
							</h2>
							<h1 className="text-4xl font-medium text-neutral-900">
								{data.title}
							</h1>
						</div>
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								{tCommon('technology')}
							</h2>
							<p className="text-2xl font-normal text-neutral-900">
								{data.tech.join(", ")}
							</p>
						</div>
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Year
							</h2>
							<p className="text-2xl font-normal text-neutral-900">
								{data.year}
							</p>
						</div>
						{data.preview && (
							<div>
								<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
									Preview
								</h2>
								<p className="text-2xl font-normal text-neutral-900">
									<Link
										href={data.preview}
										target="_blank"
										rel="noopener noreferrer">
										{t('preview')}{" "}
										<FontAwesomeIcon
											icon={faArrowUpRightFromSquare}
											className="ml-3"
										/>
									</Link>
								</p>
							</div>
						)}
						{data.code && (
							<div>
								<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
									Source Code
								</h2>
								<p className="text-2xl font-normal text-neutral-900">
									<Link
										href={data.code}
										target="_blank"
										rel="noopener noreferrer">
										Github{" "}
										<FontAwesomeIcon
											icon={faGithub}
											className="ml-3"
										/>
									</Link>
								</p>
							</div>
						)}
					</div>
					<div className="flex justify-start items-start flex-col mb-5 ">
						<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
							Description
						</h2>
						{data.desc.map((desc, index) => (
							<p
								key={index}
								className="text-xl text-justify tracking-wide font-normal text-gray-500 mb-5">
								{desc}
							</p>
						))}
					</div>
				</div>
			</div>
			{/* images */}
			<div className="mx-auto grid grid-cols-1 p-5 md:p-20 w-full">
				<div className="w-full h-auto text-center flex flex-col justify-center ">
					{/* Debug: Log images data */}
					{/* {console.log('Project data:', data)}
					{console.log('Images array:', data.images)}
					{console.log('Images length:', data.images?.length)} */}

					{/* Check if images exist and have content */}
					{data.images && data.images.length > 0 ? (
						data.images.map((image, index) => {
							// console.log(`Rendering image ${index + 1}:`, image);
							return (
								<div key={index} className="mb-5 flex justify-center">
									<Image
										src={image}
										alt={`Project Image ${index + 1}`}
										className="h-auto max-w-full object-contain max-h-[70vh] md:max-h-[60vh]"
										width={0}
										height={0}
										sizes="100vw"
										style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
										onError={(e) => {
											console.error(`Failed to load image ${index + 1}:`, image, e);
										}}
										onLoad={() => {
											console.log(`Successfully loaded image ${index + 1}:`, image);
										}}
									/>
								</div>
							);
						})
					) : (
						<div className="text-center py-10">
							<p className="text-gray-500 text-lg">
								{data.images ?
									'No images available for this project.' :
									'Images data is missing.'
								}
							</p>
							{/* Debug info for empty images */}
							<div className="mt-4 p-4 bg-gray-100 rounded text-left text-sm">
								<p><strong>Debug Info:</strong></p>
								<p>Project slug: {data.slug}</p>
								<p>Images array exists: {data.images ? 'Yes' : 'No'}</p>
								<p>Images array length: {data.images?.length || 0}</p>
								<p>Images content: {JSON.stringify(data.images, null, 2)}</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
