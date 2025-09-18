/**
 * Structured Data Component
 * 
 * Provides JSON-LD structured data for better SEO and search engine understanding.
 * Includes schemas for Person, WebSite, and CreativeWork to help search engines
 * understand the content and context of the portfolio website.
 */

import Script from 'next/script';
import jsonData from '@/json/data.json';

const StructuredData = ({ type = 'website', projectData = null, locale = 'en' }) => {
	// Base website structured data
	const websiteSchema = {
		"@context": "https://schema.org",
		"@type": "WebSite",
		"name": "Avan Fabian Daniswara - Portfolio",
		"description": "Full-stack developer and UI/UX designer portfolio showcasing modern web applications and creative solutions",
		"url": "https://www.avandigital.id",
		"author": {
			"@type": "Person",
			"name": "Avan Fabian Daniswara",
			"jobTitle": "Full-Stack Developer & UI/UX Designer",
			"url": "https://www.avandigital.id",
			"sameAs": [
				"https://github.com/fabianazh",
				"https://linkedin.com/in/fabian-nugraha",
				"https://instagram.com/fabianazh_"
			],
			"knowsAbout": [
				"JavaScript",
				"React",
				"Next.js",
				"Node.js",
				"TypeScript",
				"UI/UX Design",
				"Web Development",
				"Full-Stack Development"
			],
			"alumniOf": {
				"@type": "EducationalOrganization",
				"name": "Universitas Pendidikan Indonesia"
			}
		},
		"potentialAction": {
			"@type": "SearchAction",
			"target": {
				"@type": "EntryPoint",
				"urlTemplate": "https://www.avandigital.id/search?q={search_term_string}"
			},
			"query-input": "required name=search_term_string"
		},
		"inLanguage": ["en", "id"]
	};

	// Person schema for about page and general profile
	const personSchema = {
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Avan Fabian Daniswara",
		"givenName": "Avan Fabian",
		"familyName": "Daniswara",
		"jobTitle": "Full-Stack Developer & UI/UX Designer",
		"description": "Passionate full-stack developer and UI/UX designer with expertise in modern web technologies and creative problem-solving",
		"url": "https://www.avandigital.id",
		"image": "https://www.avandigital.id/images/profile.jpg",
		"sameAs": [
			"https://github.com/fabianazh",
			"https://linkedin.com/in/fabian-nugraha",
			"https://instagram.com/fabianazh_"
		],
		"knowsAbout": [
			"JavaScript",
			"React",
			"Next.js",
			"Node.js",
			"TypeScript",
			"Python",
			"PHP",
			"MySQL",
			"PostgreSQL",
			"MongoDB",
			"UI/UX Design",
			"Figma",
			"Adobe Creative Suite",
			"Web Development",
			"Full-Stack Development",
			"Responsive Design",
			"API Development",
			"Database Design"
		],
		"hasOccupation": {
			"@type": "Occupation",
			"name": "Full-Stack Developer",
			"occupationLocation": {
				"@type": "Place",
				"name": "Indonesia"
			},
			"skills": [
				"Web Development",
				"UI/UX Design",
				"JavaScript",
				"React",
				"Next.js",
				"Node.js"
			]
		},
		"alumniOf": {
			"@type": "EducationalOrganization",
			"name": "Universitas Pendidikan Indonesia",
			"url": "https://upi.edu"
		},
		"nationality": {
			"@type": "Country",
			"name": "Indonesia"
		}
	};

	// Project/CreativeWork schema for individual project pages
	const getProjectSchema = (project) => {
		if (!project) return null;

		return {
			"@context": "https://schema.org",
			"@type": "CreativeWork",
			"name": project.title,
			"description": Array.isArray(project.desc) ? project.desc.join(' ') : project.desc,
			"creator": {
				"@type": "Person",
				"name": "Avan Fabian Daniswara",
				"url": "https://www.avandigital.id"
			},
			"dateCreated": project.year ? `${project.year}-01-01` : undefined,
			"url": `https://www.avandigital.id/${locale}/projects/${project.slug}`,
			"image": project.images && project.images.length > 0 ? project.images[0] : undefined,
			"keywords": project.tech ? project.tech.join(', ') : undefined,
			"genre": "Web Development",
			"inLanguage": locale,
			"isPartOf": {
				"@type": "WebSite",
				"name": "Avan Fabian Daniswara - Portfolio",
				"url": "https://www.avandigital.id"
			},
			"mainEntity": {
				"@type": "SoftwareApplication",
				"name": project.title,
				"applicationCategory": "WebApplication",
				"operatingSystem": "Web Browser",
				"url": project.preview || undefined,
				"codeRepository": project.code || undefined,
				"programmingLanguage": project.tech || [],
				"author": {
					"@type": "Person",
					"name": "Avan Fabian Daniswara"
				}
			}
		};
	};

	// Portfolio collection schema for projects page
	const portfolioSchema = {
		"@context": "https://schema.org",
		"@type": "Collection",
		"name": "Avan Fabian Daniswara - Project Portfolio",
		"description": "A collection of web development projects showcasing full-stack development and UI/UX design skills",
		"url": `https://www.avandigital.id/${locale}/projects`,
		"creator": {
			"@type": "Person",
			"name": "Avan Fabian Daniswara",
			"url": "https://www.avandigital.id"
		},
		"hasPart": jsonData.Projects.map(project => ({
			"@type": "CreativeWork",
			"name": project.title,
			"url": `https://www.avandigital.id/${locale}/projects/${project.slug}`,
			"dateCreated": project.year ? `${project.year}-01-01` : undefined,
			"keywords": project.tech ? project.tech.join(', ') : undefined
		})),
		"numberOfItems": jsonData.Projects.length
	};

	// Determine which schema to use based on type
	let structuredData;
	switch (type) {
		case 'person':
			structuredData = personSchema;
			break;
		case 'project':
			structuredData = getProjectSchema(projectData);
			break;
		case 'portfolio':
			structuredData = portfolioSchema;
			break;
		case 'website':
		default:
			structuredData = websiteSchema;
			break;
	}

	// Don't render if no structured data
	if (!structuredData) return null;

	return (
		<Script
			id={`structured-data-${type}`}
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData, null, 2)
			}}
		/>
	);
};

export default StructuredData;