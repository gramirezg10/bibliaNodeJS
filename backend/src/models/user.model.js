const mongoose = require('mongoose');
const { Schema } = mongoose;
const { compareSync, hashSync, genSaltSync } = require('bcryptjs');

const userSchema = new Schema({
    name: { type: String, required: true },
    userName: { type: String, required: true },
    password: { type: String, required: true },
});

userSchema.methods.toJSON = function() {
    let user = this.toObject();
    delete user.password;
    return user;
};

userSchema.methods.comparePasswords = function(password) {
    return compareSync(password, this.password);
}

userSchema.pre('save', async function(next) {
    const user = this;
    if (!user.isModified('password')) return next();

    const salt = genSaltSync(10);
    const hashedPassword = hashSync(user.password, salt);
    user.password = hashedPassword;
    next();
});

module.exports = mongoose.model('userModel', userSchema);