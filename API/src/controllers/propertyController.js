import PropertyServices from '../services/propertyServices';

export default class PropertyController {
  /* eslint camelcase: 0 */
  static async postProperty(req, res) {
    try {
      const {
        price,
        state,
        city,
        address,
        type,
        purpose = 'sale',
        image_url,
        public_id = null
      } = req.body;
      const owner = req.data.id;
      const { id: stateID } = await PropertyServices.getStateID(state);
      const { id: typeID } = await PropertyServices.getTypeID(type);
      const { id: purposeID } = await PropertyServices.getPurposeID(purpose);

      const property = {
        owner,
        price,
        city,
        address,
        image_url,
        public_id,
        state: stateID,
        type: typeID,
        purpose: purposeID
      };
      const { id, created_on } = await PropertyServices.save(property);
      return res.status(201).json({
        status: 'success',
        data: {
          id,
          status: 'available',
          type,
          state,
          city,
          address,
          price,
          created_on,
          image_url,
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
      const { price } = req.body;
      const { property_id } = req.params;
      const prop = await PropertyServices.propertyUpdate(property_id, price);
      const { name: statusName } = await PropertyServices.getStatus(
        prop.status
      );
      const { name: typeName } = await PropertyServices.getType(prop.type);
      const { name: stateName } = await PropertyServices.getState(prop.state);
      const { name: purposeName } = await PropertyServices.getPurpose(
        prop.purpose
      );
      return res.status(200).json({
        status: 'success',
        data: {
          id: prop.id,
          status: statusName,
          type: typeName,
          state: stateName,
          city: prop.city,
          address: prop.address,
          price: prop.price,
          created_on: prop.created_on,
          image_url: prop.image_url,
          purpose: purposeName
        }
      });
    } catch (e) {
      console.log(e.stack);
      return res.status(500).json({
        status: '500 Server Interval Error',
        error: 'Oops! Error occurred, Do try again'
      });
    }
  }

  static async markPropertyAsSold(req, res) {
    try {
      const { property_id } = req.params;
      const prop = await PropertyServices.markAsSold(property_id);
      const { name: statusName } = await PropertyServices.getStatus(
        prop.status
      );
      const { name: typeName } = await PropertyServices.getType(prop.type);
      const { name: stateName } = await PropertyServices.getState(prop.state);
      const { name: purposeName } = await PropertyServices.getPurpose(
        prop.purpose
      );
      return res.status(200).json({
        status: 'success',
        data: {
          id: prop.id,
          status: statusName,
          type: typeName,
          state: stateName,
          city: prop.city,
          address: prop.address,
          price: prop.price,
          created_on: prop.created_on,
          image_url: prop.image_url,
          purpose: purposeName
        }
      });
    } catch (e) {
      return res.status(500).json({
        status: '500 Server Interval Error',
        error: 'Oops! Error occurred, Do try again'
      });
    }
  }

  static async deleteProperty(req, res) {
    try {
      const { property_id } = req.params;
      await PropertyServices.propertyDelete(property_id);
      return res.status(200).json({
        status: 'Success',
        data: {
          message: 'Property Deleted Successfully'
        }
      });
    } catch (e) {
      return res.status(500).json({
        status: '500 Internal Server Error',
        error: 'Error Occured'
      });
    }
  }

  static async getAllProperties(req, res) {
    let myProperties;
    try {
      if (req.query.type) {
        myProperties = await PropertyServices.getByType(req.query.type);
      } else {
        myProperties = await PropertyServices.getAll();
      }

      if (!myProperties) {
        return res.status(404).json({
          status: '404 not found',
          error:
            'Property of that type does not exist, try searching for 2 bedroom'
        });
      }
      return res.status(200).json({
        status: 'success',
        data: myProperties
      });
    } catch (e) {
      return res.status(500).json({
        status: '500 Internal Server Error',
        error: 'Oops! Error occured, seems we dont have such property type'
      });
    }
  }

  static async getSingleProperty(req, res) {
    let myProperties;
    try {
      if (req.params.property_id) {
        myProperties = await PropertyServices.getMySingleProperty(
          req.params.property_id
        );
      }
      if (!myProperties) {
        return res.status(404).json({
          status: '404 not found',
          error: 'Unable to retrieve any property'
        });
      }
      return res.status(200).json({
        status: 'success',
        data: myProperties
      });
    } catch (e) {
      return res.status(500).json({
        status: '500 Internal Server Error',
        error: 'Error Occured'
      });
    }
  }
}
