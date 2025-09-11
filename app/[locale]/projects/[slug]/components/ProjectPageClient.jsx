"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft, faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import FixedButon from "@/components/FixedButton";
import Link from "next/link";
import StructuredData from "@/components/StructuredData";

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
		<FixedButon
			className="fixed bottom-5 right-5 z-50 bg-white border border-gray-300 text-black hover:bg-gray-100 transition-colors duration-200"
			onClick={handleScroll}
		>
			<FontAwesomeIcon
				icon={isAtBottom ? faChevronUp : faChevronDown}
				className="w-4 h-4"
			/>
		</FixedButon>
	);
}

export default function ProjectPageClient({ projectData }) {
	// Translation hooks for internationalization
	const t = useTranslations('ProjectsPage');
	const tProjects = useTranslations('ProjectsPage.projects');
	const tCommon = useTranslations('Common');

	// Get current locale for internationalization
	const locale = useLocale();

	// Use the passed project data directly
	const data = projectData;

	return (
		<>
			<StructuredData type="project" projectData={projectData} locale={locale} />
			{/* Back to projects button */}
			<FixedButon className="fixed top-5 left-5 z-50 bg-white border border-gray-300 text-black hover:bg-gray-100 transition-colors duration-200">
				<Link href={`/${locale}/projects`} className="flex items-center justify-center w-full h-full">
					<FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
				</Link>
			</FixedButon>

			{/* Scroll navigation button */}
			<ScrollDownButton />

			{/* Main content */}
			<div className="min-h-screen bg-white">
				{/* Header section with project title and details */}
				<div className="px-5 md:px-20 pt-20 pb-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						className="max-w-4xl mx-auto"
					>
						{/* Project title */}
						<h1 className="text-4xl md:text-6xl font-light text-neutral-900 mb-8">
							{typeof projectData.title === 'string' && projectData.title.includes('.')
								? tProjects(projectData.title)
								: projectData.title}
						</h1>

						{/* Project description */}
						<div className="space-y-4 mb-12">
							{projectData.desc.map((desc, index) => (
								<p key={index} className="text-lg text-neutral-600 leading-relaxed">
									{typeof desc === 'string' && desc.includes('.')
										? tProjects(desc)
										: desc}
								</p>
							))}
						</div>

						{/* Project metadata grid */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
							{/* Technologies used */}
							<div>
								<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400 mb-4">
									{t('technologies')}
								</h2>
								<div className="flex flex-wrap gap-2">
									{projectData.tech.map((tech, index) => (
										<span
											key={index}
											className="px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full text-sm"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							{/* Project year */}
							<div>
								<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400 mb-4">
									{t('year')}
								</h2>
								<p className="text-2xl font-normal text-neutral-900">
									{projectData.year}
								</p>
							</div>

							{/* Live preview link (conditional) */}
							{projectData.preview && (
								<div>
									<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400 mb-4">
										{t('preview')}
									</h2>
									<p className="text-2xl font-normal text-neutral-900">
										<Link
											href={projectData.preview}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 hover:text-neutral-600 transition-colors"
										>
											{tCommon('livePreview')}
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												className="w-4 h-4"
											/>
										</Link>
									</p>
								</div>
							)}

							{/* Source code link (conditional) */}
							{projectData.code && (
								<div>
									<h2 className="uppercase font-normal text-lg tracking-[8px] text-neutral-400 mb-4">
										{t('sourceCode')}
									</h2>
									<p className="text-2xl font-normal text-neutral-900">
										<Link
											href={projectData.code}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-2 hover:text-neutral-600 transition-colors"
										>
											{tCommon('viewCode')}
											<FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
										</Link>
									</p>
								</div>
							)}
						</div>
					</motion.div>
				</div>

				{/* Project images gallery */}
				<div className="p-3 md:p-20">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="max-w-6xl mx-auto"
					>
						<div className="px-2 md:px-0">
							{projectData.images.map((image, index) => (
								<motion.div
									key={index}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.1 }}
									className="mb-8 md:mb-5 flex justify-center"
								>
									<Image
										src={image}
										alt={`${projectData.title} - Image ${index + 1}`}
										width={1200}
										height={800}
										className="h-auto max-h-[85vh] md:max-h-[60vh] w-full object-contain max-w-full"
										sizes="(max-width: 768px) 95vw, 100vw"
										style={{ minHeight: '300px' }}
										priority={index === 0}
									/>
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</>
	);
}