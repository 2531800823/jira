import { useEffect, useState } from "react";
interface IObj {
  [key: string]: any;
}

// 深拷贝
export const cleanObject = (obj: IObj) => {
  const result: IObj = {};

  if (!obj) {
    return undefined;
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

export const isFalsy = (value: number) => (value === 0 ? false : !value);

// 删除为null的对象,返回一个新对象
export const delIsNull = <T>(obj: T): T => {
  const result = cleanObject(obj);
  Object.keys(obj).forEach((item: string) => {
    if (isFalsy((obj as any)[item])) {
      delete result?.[item];
    }
  });
  return result as T;
};

export const useMount = (fn: Function) => {
  useEffect(() => {
    fn();
  }, []);
};

export const useDebounce = <T>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay, value]);

  return debouncedValue;
};
