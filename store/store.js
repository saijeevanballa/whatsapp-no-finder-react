export function create(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error("Error saving to localStorage", err);
    throw new Error("Error saving to localStorage");
  }
}

export function find(key) {
  try {
    return JSON.parse(localStorage.getItem(key));
  } catch (err) {
    console.error("Error getting data from localStorage", err);
    throw new Error("Error getting data from localStorage");
  }
}

export function remove(key) {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (err) {
    console.error("Error Deleteing data from localStorage", err);
    throw new Error("Error Deleteing data from localStorage");
  }
}
