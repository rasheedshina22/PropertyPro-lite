export default class Property {
  constructor(
    id,
    owner,
    price,
    state,
    city,
    address,
    type,
    purpose,
    status = 'Available',
    publicID,
    imageUrl,
    createdOn
  ) {
    this.id = id;
    this.owner = owner;
    this.price = price;
    this.state = state;
    this.city = city;
    this.address = address;
    this.type = type;
    this.purpose = purpose;
    this.status = status;
    this.public_id = publicID;
    this.image_url = imageUrl;
    this.created_on = createdOn;
  }
}
