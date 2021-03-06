//Storage Mock
export const storageMock = () => {
  let storage = {};

  return {
    setItem: (key, value) => {
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
    key: function (i) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    },
  };
};
