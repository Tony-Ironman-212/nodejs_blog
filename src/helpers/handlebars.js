const Handlebars = require('handlebars');

module.exports = {
  sum: (a, b) => a + b,
  sortable: (field, sort) => {
    const sortType = field === sort.column ? sort.type : 'default';
    const iconTypes = {
      default: '<i class="fa-solid fa-sort"></i>',
      asc: '<i class="fa-solid fa-arrow-down-short-wide"></i>',
      desc: '<i class="fa-solid fa-arrow-down-wide-short"></i>',
    };
    const types = {
      default: 'desc',
      asc: 'desc',
      desc: 'asc',
    };
    const iconType = iconTypes[sortType];
    const type = types[sortType];

    const href = Handlebars.escapeExpression(
      `?_sort&column=${field}&type=${type}`,
    );

    const output = `<a href="${href}">${iconType}</a>`;

    return new Handlebars.SafeString(output);
  },
};
