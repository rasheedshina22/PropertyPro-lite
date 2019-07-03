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
    this.phoneNumber = phoneNumber;
    this.address = address;
    this.isAdmin = isAdmin;
  }
}

export default User;
