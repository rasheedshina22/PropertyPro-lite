class Helper {
  static generateID(myArr) {
    const { length } = myArr;
    if (length === 0) return 1;
    const id = myArr[length - 1].id + 1;
    return id;
  }
}
export default Helper;
