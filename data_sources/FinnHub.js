const {RESTDataSource} = require("apollo-datasource-rest")

const token = "c0k32bv48v6qqehfr5rg"

class FinnHub extends RESTDataSource {
	constructor() {
		super();
		this.baseURL = "https://finnhub.io/api/v1/"
	}

	/** Get general information of a company. You can query by symbol
	 * symbol String what you want to search
	 */
	async getCompanyProfile(symbol){
		const data = await this.get("/stock/profile2", {
			symbol : symbol,
			token : token
		})
		console.log(data)
		return data
	}


	/**
	 * Return an array with the lastest market news
	 */
	async getMarketNews(category){
		const data = await this.get("/news", {
			category : category,
			token : token
		})
		return data
	}


	async getCompanyNews(symbol, from, to){
		const data = await this.get("/company-news", {
			symbol,
			from,
			to,
			token
		})
		return data
	}

	async getRecomendationTrends(symbol){
		const data = await this.get("/stock/recommendation", {
			symbol,
			token
		})
		console.log(data)
		return data
	}

	async getQuote(symbol){
		const data = await this.get("/quote", {
			symbol,
			token
		})
		return data
	}

}

module.exports = {FinnHub}