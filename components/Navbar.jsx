"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

const Navbar = () => {
	const navRef = useRef(null);
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const pathname = usePathname();
	const t = useTranslations('Navbar');
	const tHome = useTranslations('HomePage');
	const locale = useLocale();

	useEffect(() => {
		const updateScreenWidth = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		// Initial check and event listener
		updateScreenWidth();
		window.addEventListener("resize", updateScreenWidth);

		// Clean up the event listener on unmount
		return () => {
			window.removeEventListener("resize", updateScreenWidth);
		};
	}, []);

	const toggleNav = () => {
		setIsNavOpen(!isNavOpen);
	};

	// Function to check if link is active
	const isActive = (path) => {
		if (path === "/#home" && pathname === `/${locale}`) return true;
		if (path === "/#contact" && pathname === `/${locale}`) return false;
		return pathname.includes(path.replace("/", ""));
	};

	return (
		<>
			<nav
				ref={navRef}
				className={`navbar px-5 md:px-24 w-screen fixed transition-colors ease duration-500 
				backdrop-filter backdrop-blur-md bg-white bg-opacity-80
				inset-0 bg-opacity-80 flex flex-row justify-between items-center h-16 z-50`}>
				
				{/* Language Switcher */}
				<div className="flex flex-row items-center">
					<LanguageSwitcher />
				</div>
				
				{/* Desktop Navigation Links */}
				<div className={`hidden md:flex items-center space-x-8`}>
					<Link href={`/${locale}/#home`}>
						<span className={`text-base font-medium transition-colors duration-200 ${isActive("/#home") ? "text-black border-b-2 border-black" : "text-gray-600 hover:text-black"}`}>
							{t('home')}
						</span>
					</Link>
					<Link href={`/${locale}/about`}>
						<span className={`text-base font-medium transition-colors duration-200 ${isActive("/about") ? "text-black border-b-2 border-black" : "text-gray-600 hover:text-black"}`}>
							{t('about')}
						</span>
					</Link>
					<Link href={`/${locale}/projects`}>
						<span className={`text-base font-medium transition-colors duration-200 ${isActive("/projects") ? "text-black border-b-2 border-black" : "text-gray-600 hover:text-black"}`}>
							{t('projects')}
						</span>
					</Link>
					<Link href={`/${locale}/#contact`}>
						<span className={`text-base font-medium transition-colors duration-200 ${isActive("/#contact") ? "text-black border-b-2 border-black" : "text-gray-600 hover:text-black"}`}>
							{tHome('contactMe')}
						</span>
					</Link>
				</div>
				
				{/* Mobile Menu Button */}
				<div className="md:hidden flex flex-row items-center">
					<button
						className="burger button flex flex-col justify-center items-center space-y-1.5"
						onClick={toggleNav}>
						<div
							className={`w-8 h-0.5 bg-black rounded-full transition-all ease duration-300 ${isNavOpen
								? "rotate-45 bg-black translate-y-[3px]"
								: ""
								}`}></div>
						<div
							className={`w-8 h-0.5 bg-black rounded-full transition-all ease duration-300 ${isNavOpen
								? "-rotate-45 -translate-y-[3px] bg-black"
								: ""
								}`}></div>
					</button>
				</div>
			</nav>
			
			{/* Mobile Menu */}
			{isMobile && (
				<motion.div
					className={`fixed z-40 w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isNavOpen ? 'top-16' : '-top-64'}`}
					initial={false}
					animate={{ 
						height: isNavOpen ? 'auto' : 0,
						opacity: isNavOpen ? 1 : 0
					}}
					transition={{ duration: 0.3 }}
				>
					<div className="flex flex-col py-4">
						<Link href={`/${locale}/#home`}>
							<div 
								className="px-6 py-3 hover:bg-gray-100"
								onClick={() => setIsNavOpen(false)}
							>
								<span className={`text-base font-medium ${isActive("/#home") ? "text-black" : "text-gray-600"}`}>
									{t('home')}
								</span>
							</div>
						</Link>
						<Link href={`/${locale}/about`}>
							<div 
								className="px-6 py-3 hover:bg-gray-100"
								onClick={() => setIsNavOpen(false)}
							>
								<span className={`text-base font-medium ${isActive("/about") ? "text-black" : "text-gray-600"}`}>
									{t('about')}
								</span>
							</div>
						</Link>
						<Link href={`/${locale}/projects`}>
							<div 
								className="px-6 py-3 hover:bg-gray-100"
								onClick={() => setIsNavOpen(false)}
							>
								<span className={`text-base font-medium ${isActive("/projects") ? "text-black" : "text-gray-600"}`}>
									{t('projects')}
								</span>
							</div>
						</Link>
						<Link href={`/${locale}/#contact`}>
							<div 
								className="px-6 py-3 hover:bg-gray-100"
								onClick={() => setIsNavOpen(false)}
							>
								<span className={`text-base font-medium ${isActive("/#contact") ? "text-black" : "text-gray-600"}`}>
									{tHome('contactMe')}
								</span>
							</div>
						</Link>
					</div>
				</motion.div>
			)}
		</>
	);
};
export default Navbar;
