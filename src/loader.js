export default function loader() {
	return fetch(`/products/products.json`)
		.then((res) => {
			if (!res.ok) {
				throw new Error(`${res.status} ${res.statusText}`);
			}
			return res.json();
		})
		.catch((error) => {
			console.error('Error fetching products:', error);
		});
}
