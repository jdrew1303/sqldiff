export default class View {
  constructor(id, name, table, options) {
    this.id = id;
    this.name = name || id;
    this.table = table;
    this.columns = [];

    options = options || {};

    for (const key of Object.keys(options)) {
      this[key] = options[key];
    }
  }

  addColumn(opts) {
    this.columns.push({column: opts.column, alias: opts.alias, raw: opts.raw});

    return this;
  }
}
