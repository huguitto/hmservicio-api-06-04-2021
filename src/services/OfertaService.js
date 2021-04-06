const OfertaRepository = require("../repository/OfertaRepository");
const SearchRepository = require("../repository/SearchRepository");

class OfertaService {
  constructor() {
    this.ofertaRepository = new OfertaRepository();
    this.searchRepository = new SearchRepository();
  }

  async findOfertasBySearch(search) {
    //save search on database
    await this.searchRepository.saveSearch(search);
    // clean search
    const cleanSearch = search.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    //split if are there are two words
    const searchWords = cleanSearch.split(" ");

    const ofertas = await this.ofertaRepository.findBySearch(searchWords);

    const uniqueOfertas = this.giveUniqueOfertas(ofertas);

    return uniqueOfertas;
  }

  async allOfertasInService() {
    const ofertas = await this.ofertaRepository.allOfertas();

    const uniqueOfertas = this.giveUniqueOfertas(ofertas);

    return uniqueOfertas;
  }

  giveUniqueOfertas(duplicateOfertas) {
    let uniqueOfertas = duplicateOfertas.reduce((accumulator, currentValue) => {
      const existsIndex = accumulator.findIndex(
        (item) => item.titulo === currentValue.titulo
      );
      if (existsIndex === -1) {
        accumulator.push(currentValue);
      }
      return accumulator;
    }, []);

    return uniqueOfertas;
  }
}
module.exports = OfertaService;
