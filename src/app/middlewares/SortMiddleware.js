module.exports = function sortMiddleware(req, res, next) {
  res.locals._sort = {
    enabled: false,
    type: 'default',
  };

  //   trước khi next qua Controller, middleware check xem req.query có chứa các phần này không để điều hướng
  if ('_sort' in req.query) {
    Object.assign(res.locals._sort, {
      enabled: true,
      type: req.query.type || 'default',
      column: req.query.column || 'name',
    });
  }

  next();
};
