"use client";
import { useState, useEffect, use } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
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

/**
 * ScrollDownButton Component
 * 
 * A floating action button that allows users to scroll between top and bottom of the page.
 * - Shows down arrow when at top, scrolls to bottom when clicked
 * - Shows up arrow when at bottom, scrolls to top when clicked
 * - Uses smooth scrolling behavior with Framer Motion animations
 */

function ScrollDownButton() {
	// Track whether user is at the bottom of the page
	const [isAtBottom, setIsAtBottom] = useState(false);
	// Handle scroll behavior - toggle between top and bottom of page
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
		<>
			{/* Fixed floating scroll button */}
			<div className="fixed bottom-5 left-0 right-0 flex justify-center items-center mb-10">
				<motion.div
					className="h-10 w-10 bg-neutral-900 rounded-full flex justify-center items-center cursor-pointer"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={handleScroll}
				>
					{/* Dynamic chevron icon based on scroll position */}
					<FontAwesomeIcon
						icon={isAtBottom ? faChevronUp : faChevronDown}
						className="text-white text-2xl"
					/>
				</motion.div>
			</div>
		</>
	);
}

/**
 * Project Detail Page Component
 * 
 * Displays detailed information about a specific project including:
 * - Project metadata (title, technology, year)
 * - Preview and source code links (if available)
 * - Project description
 * - Project images gallery
 * 
 * Features:
 * - Dynamic routing based on project slug
 * - Loading states with skeleton UI
 * - 404 handling for invalid slugs
 * - Responsive design with mobile/desktop layouts
 * - Scroll navigation with floating button
 * - Back to projects navigation
 */
export default function Page({ params }) {
	// Translation hooks for internationalization
	const t = useTranslations('ProjectsPage');
	const tProjects = useTranslations('ProjectsPage.projects');
	const tCommon = useTranslations('Common');

	// Get current locale for internationalization
	const locale = useLocale();

	// Resolve dynamic route parameters
	const resolvedParams = use(params);

	// State to store project data (null = loading, "404" = not found, object = found)
	const [data, setData] = useState(null);
	// Find project data based on slug parameter
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

	// Render 404 page if project not found
	if (data === "404") {
		return (
			<>
				<NotFound />
			</>
		);
	}

	// Render loading skeleton while data is being fetched
	else if (!data) {
		return (
			<>
				{/* Loading skeleton UI */}
				<div className="relative min-h-screen w-full  gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
					<div className="flex justify-center items-center w-full">
						{/* Two-column layout for desktop */}
						<div className="mx-auto grid grid-cols-1 md:grid-cols-2  w-full">
							{/* Left column - Project info skeleton */}
							<div className="flex justify-center items-start flex-col mb-5 space-y-10 w-ful p-4">
								<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
								<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
								<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
								<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
								<div className="animate-pulse bg-neutral-400 h-20 w-full rounded shadow-lg"></div>
							</div>
							{/* Right column - Description skeleton */}
							<div className="flex justify-start items-start flex-col mb-5 w-full p-4">
								<div className="animate-pulse duration-500 shadow-lg bg-neutral-400 rounded  w-full h-full "></div>
							</div>
						</div>
					</div>
					{/* Image gallery skeleton */}
					<div className="mx-auto grid grid-cols-1 p-5 md:p-20  w-full h-auto">
						<div className="w-full h-auto aspect-video">
							<div className="animate-pulse duration-500 shadow-lg bg-neutral-400 h-full w-full rounded"></div>
						</div>
					</div>
				</div>
			</>
		);
	}
	// Render main project detail page
	return (
		<div className="relative min-h-screen w-full gap-4 p-10 flex justify-center items-center flex-col mb-10 ">
			{/* Fixed back button to projects page */}
			<FixedButon href={`/${locale}/projects`}>
				<FontAwesomeIcon
					icon={faChevronLeft}
					className="text-black pr-10"
				/>
			</FixedButon>
			{/* Floating scroll navigation button */}
			<ScrollDownButton />
			{/* ===== PROJECT INFORMATION SECTION ===== */}
			<div className="flex justify-center items-center py-10">
				<div className="mx-auto grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-8">
					{/* Left column - Project metadata */}
					<div className="flex justify-center items-start flex-col mb-5 space-y-10 mx-auto">
						{/* Project title */}
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Project
							</h2>
							<h1 className="text-4xl font-medium text-neutral-900">
								{data.title}
							</h1>
						</div>
						{/* Technology stack */}
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								{tCommon('technology')}
							</h2>
							<p className="text-2xl font-normal text-neutral-900">
								{data.tech.join(", ")}
							</p>
						</div>
						{/* Project year */}
						<div>
							<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
								Year
							</h2>
							<p className="text-2xl font-normal text-neutral-900">
								{data.year}
							</p>
						</div>
						{/* Live preview link (conditional) */}
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
						{/* Source code link (conditional) */}
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
					{/* Right column - Project description */}
					<div className="flex justify-start items-start flex-col mb-5 ">
						<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400">
							Description
						</h2>
						{/* Render description paragraphs */}
						{data.desc.map((desc, index) => (
							<p
								key={index}
								className="text-xl text-justify tracking-wide font-normal text-gray-500 mb-5">
								{tProjects(desc)}
							</p>
						))}
					</div>
				</div>
			</div>
			{/* ===== PROJECT IMAGES GALLERY ===== */}
			<div className="mx-auto grid grid-cols-1 p-3 md:p-20 w-full">
				<div className="w-full h-auto text-center flex flex-col justify-center px-2 md:px-0">
					{/* Debug: Log images data */}
					{/* {console.log('Project data:', data)}
					{console.log('Images array:', data.images)}
					{console.log('Images length:', data.images?.length)} */}

					{/* Conditional rendering: Display images if available, otherwise show fallback */}
					{/* Render project images if available */}
					{data.images && data.images.length > 0 ? (
						data.images.map((image, index) => {
							// console.log(`Rendering image ${index + 1}:`, image);
							return (
								<div key={index} className="mb-8 md:mb-5 flex justify-center">
									<Image
										src={image}
										alt={`Project Image ${index + 1}`}
										className="h-auto max-w-full object-contain max-h-[85vh] md:max-h-[60vh] w-full"
										width={0}
										height={0}
										sizes="(max-width: 768px) 95vw, 100vw"
										style={{ width: 'auto', height: 'auto', maxWidth: '100%', minHeight: '300px' }}
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
						<>
							{/* Fallback when no images are available */}
							<div className="text-center py-10">
								<p className="text-gray-500 text-lg">
									{data.images ?
										'No images available for this project.' :
										'Images data is missing.'
									}
								</p>
								{/* Debug information panel for troubleshooting */}
								<div className="mt-4 p-4 bg-gray-100 rounded text-left text-sm">
									<p><strong>Debug Info:</strong></p>
									<p>Project slug: {data.slug}</p>
									<p>Images array exists: {data.images ? 'Yes' : 'No'}</p>
									<p>Images array length: {data.images?.length || 0}</p>
									<p>Images content: {JSON.stringify(data.images, null, 2)}</p>
								</div>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
