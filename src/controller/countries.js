import countriesService from '../service/countries';

class CountriesController {
  async getCountries(req, res) {
    try {
      console.log('countries!');
      return res
        .status(200)
        .json(await countriesService.getCountries(req?.query?.sort));
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async getCountry(req, res) {
    try {
      console.log('countries!');
      return res
        .status(200)
        .json(await countriesService.getCountry(req?.params?.code));
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async addCountry(req, res) {
    try {
      console.log('add >> params.body: ', req.body);
      const result = await countriesService.addCountry(req.body?.country);

      if (result) return res.status(200).send(result);
      else return res.status(404).json('not found');
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }

  async deleteCountry(req, res) {
    try {
      console.log('deleteCountry >> req?.params?.code: ', req?.params?.code);
      const result = await countriesService.deleteCountry(req?.params?.code);

      if (result) return res.status(200).send(result);
      else return res.status(404).json('not found');
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  }
}

export default new CountriesController();
