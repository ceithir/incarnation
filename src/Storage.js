class Storage {
  constructor(storageKey) {
    this.storageKey = storageKey;
  }

  _loadWarehouse() {
    return JSON.parse(window.localStorage.getItem(this.storageKey)) || {};
  }

  load(key) {
    return this._loadWarehouse()[key];
  }

  save(key, value) {
    window.localStorage.setItem(
      this.storageKey,
      JSON.stringify(Object.assign(
        {},
        this._loadWarehouse(),
        {[key]: value},
      ))
    );
  }
}

export default Storage;
