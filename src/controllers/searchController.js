const SearchService = require("../services/SearchService");
const searchService = new SearchService();

exports.saveSearchInController = async (req, res) => {
  const search = await searchService.saveSearch(req.body.name);
  res.json(search);
};
