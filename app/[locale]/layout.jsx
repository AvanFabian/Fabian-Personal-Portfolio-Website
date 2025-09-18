import "../globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "../nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import StructuredData from '@/components/StructuredData';

export const metadata = {
	metadataBase: new URL("https://www.avandigital.id"),
	title: {
		default: "Avan Fabian Daniswara | Full-Stack Developer & IT Specialist",
		template: "%s | Avan Fabian Daniswara"
	},
	description:
		"Avan Fabian Daniswara - Full-Stack Developer specializing in web development, mobile apps, VR/AR, and machine learning. Experienced in Next.js, Flutter, Unity 3D, and backend technologies.",
	author: "Avan Fabian Daniswara",
	creator: "Avan Fabian Daniswara",
	publisher: "Avan Fabian Daniswara",
	applicationName: "Avan Fabian Portfolio",
	generator: "Next.js",
	referrer: "origin-when-cross-origin",
	keywords: [
		"Avan Fabian Daniswara",
		"Full-Stack Developer",
		"Web Developer",
		"Mobile App Developer",
		"Next.js Developer",
		"Flutter Developer",
		"React Developer",
		"Backend Developer",
		"Frontend Developer",
		"JavaScript Developer",
		"TypeScript Developer",
		"Node.js Developer",
		"Machine Learning",
		"VR Development",
		"Unity 3D",
		"Portfolio",
		"Indonesia Developer",
		"Malang Developer",
		"University of Malang",
		"IT Specialist"
	],
	authors: [{ name: "Avan Fabian Daniswara", url: "https://www.avandigital.id" }],
	colorScheme: "light",
	themeColor: "#ffffff",
	viewport: "width=device-width, initial-scale=1",
	robotsIndex: true,
	robotsFollow: true,
	googlebot: "index,follow",
	verification: {
		// Add your verification codes here when available
		// google: "your-google-verification-code",
		// yandex: "your-yandex-verification-code",
		// bing: "your-bing-verification-code"
	},
	alternates: {
		canonical: "https://www.avandigital.id",
		languages: {
			'en': 'https://www.avandigital.id/en',
			'id': 'https://www.avandigital.id/id'
		}
	},
	openGraph: {
		type: "website",
		url: "https://www.avandigital.id",
		title: "Avan Fabian Daniswara | Full-Stack Developer & IT Specialist",
		description: "Full-Stack Developer specializing in web development, mobile apps, VR/AR, and machine learning. View my portfolio of innovative projects and technical expertise.",
		siteName: "Avan Fabian Portfolio",
		locale: "en_US",
		images: [
			{
				url: "/og-image-rev.png",
				width: 1200,
				height: 630,
				alt: "Avan Fabian Daniswara - Full-Stack Developer Portfolio",
				type: "image/png"
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: "Avan Fabian Daniswara | Full-Stack Developer & IT Specialist",
		description: "Full-Stack Developer specializing in web development, mobile apps, VR/AR, and machine learning. View my portfolio of innovative projects.",
		images: ["/og-image-rev.png"],
		creator: "@avanfabian",
		site: "@avanfabian"
	},
	icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon.ico",
		apple: "/apple-touch-icon.png"
	},
	manifest: "/site.webmanifest",
	category: "technology"
};

// import Chat from "@/components/Chat";

export default async function RootLayout({
	children,
	params
}) {
	const { locale } = await params;
	const messages = await getMessages({ locale });

	return (
		<html lang={locale || 'en'}>
			<body>
				<StructuredData type="website" locale={locale} />
				<NextIntlClientProvider messages={messages}>
					<Navbar />
					{children}
					{/* <Chat /> */}
					<Analytics />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
