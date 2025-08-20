const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');
const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    videoId: { type: String, required: true },
    level: { type: String, required: true },
    slug: { type: String, slug: 'name', unique: true },
  },
  {
    timestamps: true,
  },
);

// custom query helpers
CourseSchema.query.sortable = function (req) {
  if ('_sort' in req.query) {
    const isValidType = ['asc', 'desc'].includes(req.query.type);
    return this.collation({ locale: 'vi', strength: 2 }).sort({
      [req.query.column]: isValidType ? req.query.type : 'desc',
    });
  }
  return this;
};

// add plugin
mongoose.plugin(slug);
CourseSchema.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Course', CourseSchema);
