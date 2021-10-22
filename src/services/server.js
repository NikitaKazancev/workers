import axios from "axios";
export default class Server {
	baseUrl = "http://localhost:4200/";

	constructor({ url = "workers-list" } = {}) {
		this.url = url;
	}

	async get() {
		return await axios(this.baseUrl + this.url).then((res) =>
			this.catchError(res)
		);
	}

	async post(body) {
		return await axios
			.post(this.baseUrl + this.url, body)
			.then((res) => this.catchError(res));
	}

	async put(id, body) {
		return await axios
			.put(`${this.baseUrl}${this.url}/${id}`, body)
			.then((res) => this.catchError(res));
	}

	async delete(id) {
		return await axios
			.delete(`${this.baseUrl}${this.url}/${id}`)
			.then((res) => this.catchError(res));
	}

	catchError(res) {
		if (res.status < 400) return res.data;

		const e = new Error(`Failed to get ${this.baseUrl + this.url}`);
		e.data = res;
		throw e;
	}

	async;
}
