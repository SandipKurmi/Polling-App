import Service from './Service';
class CountryService extends Service {
  constructor(model) {
    super(model);
    this.getAllCountry = this.getAllCountry.bind(this);
  }
  async getAllCountry(req, res) {
    try {
      const items = await this.model.find().select(['-_id']);
      if (items) {
        const { world } = items[0];
        const count = world.length;
        console.log(count);
        return {
          error: false,
          message: 'request successfullly',
          statusCode: 200,
          count,
          world: world,
        };
      }
    } catch (error) {
      return {
        error: true,
        message: error.message,
        statusCode: 400,
        data: null,
      };
    }
  }
}

export default CountryService;
