import CountryController from '../controllers/CountryController';
// import auth from '../middleware/auth.middleware';

export default (router) => {
  //Countrt api
  router.post(`/api/country`, CountryController.insert);
  router.get(`/api/country`, CountryController.getAllCountry);
};
