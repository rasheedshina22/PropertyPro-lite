class Helper {
  static generateID(myArr) {
    const { length } = myArr;
    console.log(length);
    if (length === 0) return 1;
    const id = myArr[length - 1].id + 1;
    console.log(id);
    return id;
  }
}
export default Helper;
