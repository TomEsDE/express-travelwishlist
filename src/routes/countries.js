import express from 'express';
import countriesController from '../controller/countries';
// validate
import { body, param } from 'express-validator';
import validate from './validate';

const routes = express.Router();

routes.get('/', countriesController.getCountries);
routes.post('/', countriesController.addCountry);
routes.get('/:code', countriesController.getCountry);
// routes.put('/:code', countriesController.get);
routes.delete('/:code', countriesController.deleteCountry);

// routes.get('/reset', countriesController.get);

export { routes };
