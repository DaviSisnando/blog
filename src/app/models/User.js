const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [
      v => /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(v),
      'Please use a valid e-mail'
    ]
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
}, {
  timestamps: true
})

UserSchema.pre('save', async function (next) {
  let { password } = this;
    this.password = await bcrypt.hash(password, 8);

    next();
});

UserSchema.pre('findOneAndUpdate', async function (next) {
  let { password } = this._update;
    if(password) this._update.password = await bcrypt.hash(password, 8);

    next();
})

module.exports = mongoose.model('User', UserSchema);