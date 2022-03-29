import countries from '../model/countries';
import wishlist from '../model/wishlist.json';

class CountriesService {
  async getCountries(sort = false) {
    console.log('data', wishlist);

    if (sort === 'add') wishlist.push(countries[41]);

    return sort && sort === 'true'
      ? wishlist.sort((a, b) =>
          a.name === b.name ? 0 : a.name < b.name ? -1 : 1
        )
      : wishlist;
  }

  async getCountry(code) {
    console.log('code', code);

    const result = wishlist.find(
      (c) =>
        c.alpha2.toLowerCase() === code.toLowerCase() ||
        c.alpha3.toLowerCase() === code.toLowerCase()
    );

    return result;
  }

  async addCountry(country) {
    console.log('country', country);

    const result = countries.find(
      (c) => c.name.toLowerCase() === country.toLowerCase()
    );
    console.log('result', result);

    if (result) wishlist.push(result);

    return result;
  }

  async deleteCountry(code) {
    console.log('code', code);

    const idx = wishlist.findIndex(
      (c) => c.alpha2.toLowerCase() === code.toLowerCase() // c.alpha3.toLowerCase() !== code.toLowerCase())
    );
    console.log('idx', idx);

    if (idx >= 0) {
      const del = wishlist.splice(idx, 1);
    }

    return wishlist;
  }
}

export default new CountriesService();
