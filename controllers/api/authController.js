const User = require("../../models/users");
module.exports = {
    index: (req, res) => {
      const user = new User({
        first_name:'asif',
        last_name: 'Patel',
        full_name: 'asif Patel',
        email: 'a@gmail.com',
        password: '123456',
        email_verified: true,
        is_active:true
      });
      user.save().then(result=>res.send(result))
    },
}