const SearchRepository = require("../repository/SearchRepository");
const sanitizeHtml = require("sanitize-html");

class SearchService {
  constructor() {
    this.searchRepository = new SearchRepository();
  }

  async saveSearch(search) {
    const sanitizedSearch = sanitizeHtml(search);

    const searchSaved = await this.searchRepository.saveSearch(sanitizedSearch);

    return searchSaved;
  }
}

module.exports = SearchService;
