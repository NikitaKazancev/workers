export default class Server {
	baseUrl = "http://localhost:4200/";

	constructor({ url = "workers-list", options } = {}) {
		this.url = url;
		this.options = options;
	}

	async get() {
		return await fetch(this.baseUrl + this.url)
			.then((res) => {
				if (res.ok) return res.json();

				const e = new Error(`Failed to get ${this.baseUrl + this.url}`);
				e.data = res.json();
				throw e;
			})
			.catch((err) => console.error(err, err.data));
	}

	async post() {
		return await fetch(this.baseUrl + this.url, this.options)
			.then((res) => {
				if (res.ok) return res.json();

				const e = new Error(`Failed to get ${this.baseUrl + this.url}`);
				e.data = res.json();
				throw e;
			})
			.catch((err) => console.error(err, err.data));
	}
}
