import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./nprogress.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
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

const TopProgressBar = dynamic(() => import("@/components/TopProgressbar"), {
	ssr: false,
});



export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<TopProgressBar />
				<Navbar />
				{children}
				{/* <Chat /> */}
				<Analytics />
			</body>
		</html>
	);
}
