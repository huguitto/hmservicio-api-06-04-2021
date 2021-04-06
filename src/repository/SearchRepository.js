const Search = require("../entities/Search");

class SearchRepository {
  async saveSearch(search) {
    const searchToSave = new Search({ name: search });
    await searchToSave.save();
  }
}
module.exports = SearchRepository;
