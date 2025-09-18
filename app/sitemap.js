import jsonData from '@/json/data.json';

/**
 * Next.js App Router Sitemap Generation
 * 
 * Automatically generates a sitemap.xml with:
 * - Main pages (home, about, projects)
 * - Individual project pages with dynamic URLs
 * - Proper lastmod dates and priorities
 * - Multi-language support
 */
export default function sitemap() {
	const baseUrl = 'https://www.avandigital.id';
	const currentDate = new Date().toISOString();
	
	// Define supported locales
	const locales = ['en', 'id'];
	
	// Base pages for each locale
	const basePages = [
		{
			url: '',
			priority: 1.0,
			changeFrequency: 'weekly'
		},
		{
			url: '/about',
			priority: 0.9,
			changeFrequency: 'monthly'
		},
		{
			url: '/projects',
			priority: 0.9,
			changeFrequency: 'weekly'
		}
	];
	
	// Generate sitemap entries
	const sitemapEntries = [];
	
	// Add base pages for each locale
	locales.forEach(locale => {
		basePages.forEach(page => {
			sitemapEntries.push({
				url: `${baseUrl}/${locale}${page.url}`,
				lastModified: currentDate,
				changeFrequency: page.changeFrequency,
				priority: page.priority
			});
		});
	});
	
	// Add individual project pages for each locale
	if (jsonData && jsonData.Projects) {
		jsonData.Projects.forEach(project => {
			// Only include projects that are set to show
			if (project.show && project.slug) {
				locales.forEach(locale => {
					sitemapEntries.push({
						url: `${baseUrl}/${locale}/projects/${project.slug}`,
						lastModified: project.year ? `${project.year}-12-31T00:00:00.000Z` : currentDate,
						changeFrequency: 'monthly',
						priority: 0.7
					});
				});
			}
		});
	}
	
	// Add root redirect (without locale)
	sitemapEntries.push({
		url: baseUrl,
		lastModified: currentDate,
		changeFrequency: 'weekly',
		priority: 1.0
	});
	
	return sitemapEntries;
}