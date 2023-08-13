export function groupByYear(postList) {
	const postsByYear = postList.reduce((posts, post) => {
		const year = new Date(post.datetime).getFullYear();
		posts[year] ??= [];
		posts[year].push(post);
		return posts;
	}, {});

	return Object.keys(postsByYear)
		.map(Number)
		.sort((a, b) => b - a)
		.map((year) => [year, postsByYear[year]]);
}
