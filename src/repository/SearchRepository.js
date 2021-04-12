const Search = require("../entities/Search");

class SearchRepository {
  async saveSearch(search) {
    const searchToSave = new Search({ name: search });
    const searchSaved = await searchToSave.save();
    return searchSaved;
  }
}
module.exports = SearchRepository;
