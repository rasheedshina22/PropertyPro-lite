import Helpers from '../helpers/helper';
import properties from '../data/data-structure/properties';
import PropertyServices from '../services/propertyServices';

export default class PropertyController {
  /* eslint camelcase: 0 */
  static async postProperty(req, res) {
    try {
      const { price, state, city, address, type, purpose } = req.body;
      let { status } = req.body;
      const owner = req.data.id;
      const { url } = req.file;
      const id = await Helpers.generateID(properties);
      if (!status) status = 'Available';
      const property = {
        id,
        owner,
        price,
        state,
        city,
        address,
        type,
        purpose,
        status,
        image_url: url,
        created_on: new Date().toLocaleString()
      };
      const { created_on } = property;
      await PropertyServices.save(property);
      return res.status(201).json({
        status: 'Success',
        data: {
          id,
          status,
          type,
          state,
          city,
          address,
          price,
          created_on,
          image_url: url,
          purpose
        }
      });
    } catch (err) {
      return res.status(500).json({
        status: '500 Server Interval Error',
        error: 'Error occured'
      });
    }
  }
}
