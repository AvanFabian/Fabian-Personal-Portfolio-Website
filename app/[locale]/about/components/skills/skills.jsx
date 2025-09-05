"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Stack from "./stack";
import Tools from "./tools";

function Wrapper({ children }) {
	return (
		<div className="mx-auto container gap-4 p-10 grid grid-cols-1 mt-10">
			<motion.div
				className="flex justify-center items-center flex-col mb-5 "
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

export default function Skills() {
	const t = useTranslations('AboutPage');
	const tCommon = useTranslations('Common');
	const tSkills = useTranslations('Skills');

	return (
		<>
			<Wrapper>
				<section className="grid gap-8 md:gap-12">
					<div className="text-center space-y-2">
						<h2 className="text-3xl font-bold mt-3 text-black">
							{t('title')}
						</h2>
						<p className="text-muted-foreground max-w-[800px] mx-auto">
							{t('description')}
						</p>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
						{/* Skill 1: Backend Development */}
						<div className="flex flex-col items-center text-center gap-2">
							<ServerIcon className="w-12 h-12" />
							<div className="font-medium">{tSkills('backendDevelopment')}</div>
						</div>
						{/* Skill 2: Full-Stack Development */}
						<div className="flex flex-col items-center text-center gap-2">
							<LayersIcon className="w-12 h-12" />
							<div className="font-medium">{tSkills('fullStackDevelopment')}</div>
						</div>
						{/* Skill 3: Mobile App Development */}
						<div className="flex flex-col items-center text-center gap-2">
							<SmartphoneIcon className="w-12 h-12" />
							<div className="font-medium">{tSkills('mobileAppDevelopment')}</div>
						</div>
						{/* Skill 4: Machine Learning */}
						<div className="flex flex-col items-center text-center gap-2">
							<BrainCircuitIcon className="w-12 h-12" />
							<div className="font-medium">{tSkills('generativeAI')}</div>
						</div>
						{/* Skill 5: Virtual Reality & IoT */}
						<div className="flex flex-col items-center text-center gap-2">
							<VrHeadsetIcon className="w-12 h-12" />
							<div className="font-medium">{tSkills('virtualRealityIoT')}</div>
						</div>
						{/* Skill 6: Identity & Access Management */}
						<div className="flex flex-col items-center text-center gap-2">
							<ShieldCheckIcon className="w-12 h-12" />
							<div className="font-medium">{tSkills('identityAccessManagement')}</div>
						</div>
						{/* Anda bisa menambahkan 2 lagi jika mau, misal: Database Design & Systems Integration */}
					</div>
				</section>
			</Wrapper>
			<div className="mx-auto container gap-4 p-10 grid grid-cols-1 md:grid-cols-2 mt-10 mb-24">
				<div className="flex flex-col justify-start items-center">
					<h2 className="text-3xl font-bold text-center md:text-left mb-12">{tCommon('technologiesToolkit')}</h2>
					<Stack />
				</div>
				<div className="flex flex-col justify-start items-center">
					<h3 className="text-3xl font-bold text-center md:text-left mb-12">{tSkills('myGoToTools')}</h3>
					<Tools />
				</div>
			</div>
		</>
	);
}

function ActivityIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
		</svg>
	);
}
function CodepenIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round">
			<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
			<line x1="12" x2="12" y1="22" y2="15.5" />
			<polyline points="22 8.5 12 15.5 2 8.5" />
			<polyline points="2 15.5 12 8.5 22 15.5" />
			<line x1="12" x2="12" y1="2" y2="8.5" />
		</svg>
	);
}

// File: components/icons.js

// 1. ServerIcon for "Backend Development"
export function ServerIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
			<rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
			<line x1="6" x2="6.01" y1="6" y2="6" />
			<line x1="6" x2="6.01" y1="18" y2="18" />
		</svg>
	);
}

// 2. LayersIcon for "Full-Stack Development"
export function LayersIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polygon points="12 2 2 7 12 12 22 7 12 2" />
			<polyline points="2 17 12 22 22 17" />
			<polyline points="2 12 12 17 22 12" />
		</svg>
	);
}

// 3. SmartphoneIcon for "Mobile App Development"
export function SmartphoneIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
			<path d="M12 18h.01" />
		</svg>
	);
}

// 4. BrainCircuitIcon for "Machine Learning"
export function BrainCircuitIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 2a2.5 2.5 0 0 0-2.5 2.5c0 2.21 1.79 4 4 4s4-1.79 4-4a2.5 2.5 0 0 0-2.5-2.5" />
			<path d="M12 2a2.5 2.5 0 0 1 2.5 2.5c0 2.21-1.79 4-4 4s-4-1.79-4-4A2.5 2.5 0 0 1 12 2Z" />
			<path d="M12 12.5a2.5 2.5 0 0 0-2.5 2.5c0 2.21 1.79 4 4 4s4-1.79 4-4a2.5 2.5 0 0 0-2.5-2.5" />
			<path d="M12 12.5a2.5 2.5 0 0 1 2.5 2.5c0 2.21-1.79 4-4 4s-4-1.79-4-4a2.5 2.5 0 0 1 2.5-2.5" />
			<path d="M19.5 9.5a2.5 2.5 0 0 0-2.5 2.5c0 2.21 1.79 4 4 4s4-1.79 4-4a2.5 2.5 0 0 0-2.5-2.5" />
			<path d="M19.5 9.5a2.5 2.5 0 0 1 2.5 2.5c0 2.21-1.79 4-4 4s-4-1.79-4-4a2.5 2.5 0 0 1 2.5-2.5" />
			<path d="M4.5 9.5a2.5 2.5 0 0 0-2.5 2.5c0 2.21 1.79 4 4 4s4-1.79 4-4a2.5 2.5 0 0 0-2.5-2.5" />
			<path d="M4.5 9.5a2.5 2.5 0 0 1 2.5 2.5c0 2.21-1.79 4-4 4s-4-1.79-4-4a2.5 2.5 0 0 1 2.5-2.5" />
			<path d="M14 8.5a2.5 2.5 0 0 0-2.5 2.5c0 2.21 1.79 4 4 4s4-1.79 4-4a2.5 2.5 0 0 0-2.5-2.5" />
			<path d="M14 8.5a2.5 2.5 0 0 1 2.5 2.5c0 2.21-1.79 4-4 4s-4-1.79-4-4a2.5 2.5 0 0 1 2.5-2.5" />
			<path d="M10 8.5a2.5 2.5 0 0 0-2.5 2.5c0 2.21 1.79 4 4 4s4-1.79 4-4a2.5 2.5 0 0 0-2.5-2.5" />
			<path d="M10 8.5a2.5 2.5 0 0 1 2.5 2.5c0 2.21-1.79 4-4 4s-4-1.79-4-4a2.5 2.5 0 0 1 2.5-2.5" />
		</svg>
	);
}

// 5. VrHeadsetIcon for "Virtual Reality & IoT"
export function VrHeadsetIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.73 2.73" />
			<path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.73-2.73" />
			<path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.73-2.73" />
			<path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.73 2.73" />
			<path d="M15.5 20a.5.5 0 0 0 0-1 .5.5 0 0 0 0 1z" />
			<path d="M8.5 20a.5.5 0 0 0 0-1 .5.5 0 0 0 0 1z" />
			<path d="M12 16a2.5 2.5 0 0 0-2.5 2.5c0 1.5 1 2.5 2.5 2.5" />
			<path d="M12 16a2.5 2.5 0 0 1 2.5 2.5c0 1.5-1 2.5-2.5 2.5" />
		</svg>
	);
}

// 6. ShieldCheckIcon for "Identity & Access Management"
export function ShieldCheckIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
			<path d="m9 12 2 2 4-4" />
		</svg>
	);
}