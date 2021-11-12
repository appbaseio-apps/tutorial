export const URL = "https://7560d5a83f05:cd92b5c0-6427-41a2-8f2e-6a7720c3a15e@appbase-demo-ansible-abxiydt-arc.searchbase.io";

export const datsetMappings = [
	{
		id: 'movies-demo-app',
		name: 'Movies Dataset',
		description:
			'A dataset of 10,000 movies obtained from TMDB. This is ideal to experiment with SaaS use-cases.',
		url: 'https://www.themoviedb.org/t/p/w1280/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg',
		alt: 'movies-image',
		count: '10,000',
	},
	{
		id: 'ecomm-demo-app',
		name: 'Products Dataset',
		description:
			'A dataset of 3,000 e-commerce products. This is ideal to experiment with E-commerce use-cases.',
		url: 'https://imgur.com/eZ4wZMq.png',
		alt: 'products-image',
		count: '3,000',
	},
	{
		id: 'geo1-demo-app',
		name: 'Geo Dataset',
		description:
			'A dataset of 3,500 earthquake samples from the last 100 years. This is ideal to experiment with the Geo use-cases.',
		url: 'https://imgur.com/q9neV4t.png',
		alt: 'geo-image',
		count: '3,500',
	},
];

export const facetMappings = {
	'release_year': 'range',
	'genres': 'term',
	'vote_average': 'range',
	'categories': 'term',
	'brand': 'term',
	'retail_price': 'range',
	'magnitude': 'range',
	'year': 'range',
	'place': 'term'
}

export const searchSettings = {
	original_title: [
		{
			field: 'original_title',
			weight: 10,
		},
		{
			field: 'original_title.search',
			weight: 2,
		}
	],
	overview: [
		{
			field: 'overview',
			weight: 1,
		},
		{
			field: 'overview.search',
			weight: 1,
		}
	],
	place: [
		{
			field: 'place',
			weight: 10,
		},
		{
			field: 'place.search',
			weight: 2,
		}
	],
	product_name: [
		{
			field: 'product_name',
			weight: 10,
		},
		{
			field: 'product_name.search',
			weight: 2,
		}
	],
	categories: [
		{
			field: 'categories',
			weight: 3,
		},
		{
			field: 'categories.search',
			weight: 1,
		}
	],
	description: [
		{
			field: 'description',
			weight: 1,
		},
		{
			field: 'description.search',
			weight: 1,
		}	
	]
};
