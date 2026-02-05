const save = (key, value) => {
  try {
    const serialisedValue = JSON.stringify(value);
    localStorage.setItem(key, serialisedValue);
  } catch (error) {
    console.warn("Set ls error:", error.message);
  }
};

const load = key => {
  try {
    const serialisedLS = localStorage.getItem(key);
    return JSON.parse(serialisedLS) || undefined;
  } catch (error) {
    console.warn("Get ls error:", error.message);
  }
};

const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn("Remove ls error:", error.message);
  }
};
