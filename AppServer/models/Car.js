const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    // enterVeh: {
    //     type: String,
    //     required: true,
        
    // },
    // vehV: {
    //     type: String,
    //     required: true

    // },
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
      
    }

})

// carSchema.pre('save', async function (next) {
//     const car = this;
//     console.log("Just before saving before hashing  ", user.password);
//     if (!car.isModified('password')) {
//         return next();
//     }
//     user.password = await bcrypt.hash(user.password, 8);
//     console.log("Just before saving & after hashing", user.password);
//     next();
// })


mongoose.model("Car", carSchema);