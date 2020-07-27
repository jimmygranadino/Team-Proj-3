const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type:String,
  },
  zipCode: {
      type: Number,
      required: true,
  },
  DOB: {
      type: Number,
      required: true,
        }
    },
    
    {
      timestamps: true
    }   
);


module.exports = User = mongoose.model('users', UserSchema);


// const mongoose = require('mongoose')
// const Schema = mongoose.Schema



// const UserSchema = new Schema({
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     watchedBounties: [{
//         type: mongoose.Types.ObjectId
//     }],
//     date: {
//       type: Date,
//       default: Date.now
//     },
//     avatar: {
//         type:String,
//     }
//   });

//   module.exports = User = mongoose.model('users', UserSchema)