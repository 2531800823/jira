interface IObj {
  [key: string]: any;
}

export const cleanObject = (obj: IObj) => {
  const result: IObj = {};

  if (!obj) {
    return null;
  }

  if (typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const tempArr: any[] = [];
    obj.forEach((item) => {
      tempArr.push(cleanObject(item));
    });
    return tempArr;
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
