import "../globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "../nprogress.css";
import { Analytics } from "@vercel/analytics/react";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const metadata = {
	metadataBase: new URL("https://www.fabiandaniswara.my.id"),
	title: "Fabian | Portofolio",
	description:
		"My name is Fabian, I'm a web developer and I'm passionate about it. I'm currently studying at State University of Malang.",
	author: "Avan Fabian Daniswara",
	siteUrl: "https://www.fabiandaniswara.my.id",
	applicationName: "Fabian",
	keywords: [
		"fabian",
		"fabian fabian",
		"fabian",
		"avan fabiandaniswara",
		"avan fabian daniswara",
		"greatchief",
		"fabian porto",
		"fabian um",
	],
	openGraph: {
		type: "website",
		url: "https://www.fabiandaniswara.my.id",
		title: "Fabian | Portofolio",
		site_name: "Fabian | Portofolio",
		description: "My name is Fabian, This is my portofolio website.",
		width: 1200,
		height: 630,
		images: [
			{
				url: "/og-image-rev.png",
				alt: "Fabian Portofolio",
			},
		],
		site_name: "Fabian | Portofolio",
	},
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
