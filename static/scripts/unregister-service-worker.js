if ('serviceWorker' in navigator) {
	navigator.serviceWorker
		.register('/service-worker.js', { scope: '/' })
		.then((registration) => registration.unregister())
		.then(() => console.log('Service worker unregistered.'))
		.catch((error) => console.error(`Attempt failed with ${error}`));
}
