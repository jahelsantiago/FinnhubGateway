const {gql} = require("apollo-server");

const typeDefs = gql`
  
  type CompanyProfile {
    country: String
    currency: String
    exchange: String
    ipo: String
    marketCapitalization: String
    name: String
    phone: String
    shareOutstanding : String
    ticker: String
    weburl: String
    logo: String
    finnhubIndustry: String
  }
  
  type marketNews {
    category: String
    datetime: String
    headline: String
    id: String
    image: String
    related: String
    source: String
    summary: String
    url: String
  }
  
  enum CategoryNews {
    general
    forex 
    crypto 
    merger
  } 
    
  type companyNews {
    category: String
    datetime: String
    headline: String
    id: String
    image: String
    related: String
    source: String
    summary: String
    url: String
  }

  type recommendationTrends{
    buy: String
    hold: String
    period: String
    sell: String
    strongBuy: String
    strongSell: String
    symbol: String
  }
  
  type quote{
    c: String 
    h: String 
    l: String 
    o: String 
    pc: String
    t: String
  }
  
  type Query {
    companyProfile(symbol: String!): CompanyProfile
    marketNews(category: CategoryNews!): [marketNews]
    companyNews(symbol: String! from: String! to:String!): [companyNews]
    recommendationTrends(symbol: String!): [recommendationTrends]
    quote(symbol: String!): quote
  }
  
  
`;

module.exports = {typeDefs}