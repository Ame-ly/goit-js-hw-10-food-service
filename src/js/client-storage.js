const clientStorage = {
  getItem(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch (error) {
      return undefined;
    }
  },
  setItem(key, playload) {
    try {
      localStorage.setItem(key, JSON.stringify(playload));
    } catch (error) {
      console.error(error);
    }
  },
};
export default clientStorage;
