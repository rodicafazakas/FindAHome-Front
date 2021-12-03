//Storage Mock
export const storageMock = () => {
  let storage = {};
  console.log(storage);

  return {
    setItem: (key, value) => {
      console.log(key, value);
      storage[key] = value || "";
    },
    getItem: (key) => {
      return storage[key] || null;
    },
    removeItem: (key) => {
      delete storage[key];
    },
    clear: function () {
      storage = {};
    },
    getLength: () => {
      return Object.keys(storage).length;
    },
    key: function (i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    },
  };
};
