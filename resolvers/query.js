const query = {
  companyProfile: async (parent, args, {dataSources}) => {
    return await dataSources.finnHub.getCompanyProfile(args.symbol)
  },
  marketNews: async  (parent, args, {dataSources}) => {
    return await dataSources.finnHub.getMarketNews(args.category)
  },
  companyNews: async  (parent, {symbol, from, to}, {dataSources}) => {
    return await dataSources.finnHub.getCompanyNews(symbol, from, to)
  },
  recommendationTrends: async (parent, {symbol}, {dataSources}) => {
    return await dataSources.finnHub.getRecomendationTrends(symbol)
  },
  quote: async(parent, {symbol}, {dataSources}) => {
    return await dataSources.finnHub.getQuote(symbol)
  }

}

module.exports = {query}