const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.promise = Promise;

// Define entrySchema
const entrySchema = new Schema({
	name: { type: String, unique: false },
	email: { type: String, unique: false, required: true },
	message: { type: String, unique: false }
});

// Create reference to entry & export
const Entry = mongoose.model('Message', entrySchema);
module.exports = Entry;