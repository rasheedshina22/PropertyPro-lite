class User {
  constructor(
    id,
    email,
    firstName,
    lastName,
    password,
    phoneNumber,
    address,
    isAdmin = false
  ) {
    this.id = id;
    this.email = email;
    this.first_name = firstName;
    this.last_name = lastName;
    this.password = password;
    this.phone_number = phoneNumber;
    this.address = address;
    this.is_admin = isAdmin;
  }
}

export default User;
