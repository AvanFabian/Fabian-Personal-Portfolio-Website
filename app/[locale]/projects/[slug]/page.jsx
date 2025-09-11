import jsonData from "@/json/data.json";
import NotFound from "@/app/not-found";
import ProjectPageClient from "./components/ProjectPageClient";
import { getTranslations } from 'next-intl/server';

// Generate metadata for SEO
export async function generateMetadata({ params }) {
	const { slug, locale } = await params;
	const t = await getTranslations({ locale, namespace: 'ProjectsPage.projects' });
	
	// Find project data
	const projectData = jsonData.Projects.find(item => item.slug === slug);
	
	if (!projectData) {
		return {
			title: 'Project Not Found',
			description: 'The requested project could not be found.'
		};
	}

	// Get project title and description
	const projectTitle = typeof projectData.title === 'string' && projectData.title.includes('.')
		? t(projectData.title)
		: projectData.title;
	
	const projectDesc = projectData.desc.map(desc => 
		typeof desc === 'string' && desc.includes('.')
			? t(desc)
			: desc
	).join(' ');

	const baseUrl = 'https://www.fabiandaniswara.my.id';
	const projectUrl = `${baseUrl}/${locale}/projects/${slug}`;
	const ogImage = projectData.thumbnail || projectData.images?.[0] || '/og-image-rev.png';

	return {
		title: projectTitle,
		description: projectDesc.substring(0, 160),
		keywords: [
			projectTitle,
			'Avan Fabian Daniswara',
			'Portfolio Project',
			...projectData.tech,
			'Web Development',
			'Software Development'
		],
		authors: [{ name: 'Avan Fabian Daniswara', url: baseUrl }],
		creator: 'Avan Fabian Daniswara',
		publisher: 'Avan Fabian Daniswara',
		alternates: {
			canonical: projectUrl
		},
		openGraph: {
			title: `${projectTitle} | Avan Fabian Daniswara`,
			description: projectDesc.substring(0, 160),
			url: projectUrl,
			siteName: 'Avan Fabian Portfolio',
			type: 'article',
			locale: locale === 'id' ? 'id_ID' : 'en_US',
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: `${projectTitle} - Project by Avan Fabian Daniswara`,
					type: 'image/webp'
				}
			],
			article: {
				author: 'Avan Fabian Daniswara',
				publishedTime: `${projectData.year}-01-01T00:00:00.000Z`,
				tag: projectData.tech
			}
		},
		twitter: {
			card: 'summary_large_image',
			title: `${projectTitle} | Avan Fabian Daniswara`,
			description: projectDesc.substring(0, 160),
			images: [ogImage],
			creator: '@avanfabian',
			site: '@avanfabian'
		},
		other: {
			'article:author': 'Avan Fabian Daniswara',
			'article:section': 'Portfolio',
			'article:tag': projectData.tech.join(', ')
		}
	};
}

// Generate static params for all projects
export async function generateStaticParams() {
	return jsonData.Projects
		.filter(project => project.show)
		.map(project => ({
			slug: project.slug
		}));
}

/**
 * Individual Project Page Component
 * 
 * Server component that displays detailed information about a specific project including:
 * - Project title, description, and metadata (year, technologies, links)
 * - Image gallery with responsive design
 * - Navigation controls (back to projects, scroll controls)
 * 
 * Features:
 * - Dynamic routing based on project slug
 * - SEO optimized with generateMetadata
 * - Static generation with generateStaticParams
 * - 404 handling for invalid slugs
 * - Responsive design with mobile/desktop layouts
 */
export default async function Page({ params }) {
	const { slug } = await params;
	
	// Find project data
	const projectData = jsonData.Projects.find(item => item.slug === slug);
	
	// Return 404 if project not found
	if (!projectData) {
		return <NotFound />;
	}

	// Render the client component with project data
	return <ProjectPageClient projectData={projectData} />;
}
