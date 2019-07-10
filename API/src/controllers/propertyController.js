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
      const { url, public_id } = req.file;
      // const url = 'fakeurl';
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
        public_id,
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

  static async propertyUpdate(req, res) {
    try {
      const { prop } = req;
      const { price, state, city, address, type, purpose } = req.body;
      prop.purpose =
        prop.purpose === purpose || !purpose ? prop.purpose : purpose;
      prop.price =
        prop.price === parseFloat(price) || !parseFloat(price)
          ? prop.price
          : parseFloat(price);
      prop.state = prop.state === state || !state ? prop.state : state;
      prop.city = prop.city === city || !city ? prop.city : city;
      prop.address =
        prop.address === address || !address ? prop.address : address;
      prop.type = prop.type === type || !type ? prop.type : type;
      const propIndex = properties.findIndex(({ id }) => id === prop.id);
      properties.splice(propIndex, 1, prop);
      return res.status(200).json({
        status: 'Success',
        data: {
          id: prop.id,
          status: prop.status,
          type: prop.type,
          state: prop.state,
          city: prop.city,
          address: prop.address,
          price: prop.price,
          created_on: prop.created_on,
          image_url: prop.image_url,
          purpose: prop.purpose
        }
      });
    } catch (e) {
      return res.status(500).json({
        status: '500 Server Interval Error',
        error: 'Oops! Error occurred, Do try again'
      });
    }
  }
}
