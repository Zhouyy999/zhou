/**
 * 判断条码是否符合规范
 * code 检测条码
 * type 检测类型 1 托盘码；2 箱码；3 周转箱码； 4 库位码
 */
export const isCodeSpecs = (code: string, type: 1 | 2 | 3 | 4): boolean => {
  switch (type) {
    case 1:
      return /^[P]\d{10}$/.test(code)
    case 2:
      return /^[S]\d{10}$/.test(code)
    case 3:
      return /^[A-z]\d{1,10}$/.test(code)
    case 4:
      return /^([M]|[B]|[P]|[G])\d{1}-\d{3}-\d{2}-\d{3}$/.test(code)
    default:
      return false
  }
}
