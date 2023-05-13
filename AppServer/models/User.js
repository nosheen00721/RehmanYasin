const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true

    },
    dob: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    productT: {
        type: String,
      
    },
    power: {
        type: String,
        required: true
    },
    saleP: {
        type: String,
        required: true
    },
    federalT: {
        type: String,
        required: true
    },
    federalTA: {
        type: String,
        required: true
    },
    whT: {
        type: String,
        required: true
    },
    whTA: {
        type: String,
        required: true
    },
    sedT: {
        type: String,
        required: true
    },
    sedTA: {
        type: String,
        required: true
    },
    comm: {
        type: String,
        required: true
    },
    commA: {
        type: String,
        required: true
    },
    ffiA: {
        type: String,
        required: true
    },
    pdiA: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // cng: {
    //     type: Boolean,
    //     checked:false,
    //     required: true
    // }

    // brand: {
    //     type: String,
    //     required: true
    // },

})

userSchema.pre('save', async function (next) {
    const user = this;
    console.log("Just before saving before hashing  ", user.password);
    if (!user.isModified('password')) {
        return next();
    }
    user.password = await bcrypt.hash(user.password, 8);
    console.log("Just before saving & after hashing", user.password);
    next();
})


mongoose.model("User", userSchema);

// color,
// productT,
// power,
// saleP,
// federalT,
// federalTA,
// whT,
// whTA,
// sedT,
// sedTA,
// comm,
// commA,
// ffiA,
// pdiA,
// description