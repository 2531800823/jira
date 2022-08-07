interface IObj {
  [key: string]: any;
}
export const cleanObject = (obj: IObj) => {
  const result: IObj = {};

  if (!obj) {
    return null;
  }

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === "object" && obj[key] !== null) {
        result[key] = cleanObject(obj[key]);
        continue;
      }
      result[key] = obj[key];
    }
  }

  return result;
};
