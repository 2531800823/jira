import { cleanObject } from "./index";

const deepTest = (obj: any, obj2: any) => {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      expect(obj[key]).toEqual(obj2[key as any]);
    }
  }
};

test("should 测试 是否成功克隆对象", () => {
  const obj: any = { a: 0, b: 1, c: [{ a: 10 }, 2, 3, 4] };

  const result = cleanObject(obj);
  //   expect(result).toEqual(obj);

  deepTest(result, obj);

  obj.c[0].a = 11;
  deepTest(result, obj);
  expect(result).not.toEqual(obj);
});

export {};
