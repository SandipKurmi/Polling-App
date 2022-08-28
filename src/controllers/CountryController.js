import Controller from './Controller';
import Country from '../models/CountryModel';
import CountryService from '../services/CountryService';

const countryService = new CountryService(new Country().getInstance());

class CuntryController extends Controller {
  constructor(service) {
    super(service);
    this.getAllCountry = this.getAllCountry.bind(this);
  }

  async getAllCountry(req, res) {
    let response = await this.service.getAllCountry(req, res);
    return res.status(response.statusCode).send(response);
  }
}
export default new CuntryController(countryService);
