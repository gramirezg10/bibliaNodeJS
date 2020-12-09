const mongoose = require('mongoose');
const { Schema } = mongoose;

const commentSchema = new Schema({
    comment: { type: String, required: true },
    description: { type: String },
    author: { type: Schema.Types.ObjectId, ref: 'user', require: true, autopopulate: true }
});

commentSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('commentModel', commentSchema);