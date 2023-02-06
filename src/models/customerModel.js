const { default: mongoose } = require("mongoose")

const customerSchema = new mongoose.Schema({

    firstName: {
        type: String,
        require: true
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    mobileNumber: {
        type: String,
        require: true,
        unique: true
    },
    DOB: {
        type: Date,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    customerId: {
        type: String,
        unique: true,
        require: true
    },
    status: {
        type: String,
        require: true,
        default: "ACTIVE",
        enum: ["ACTIVE", "INACTIVE"]
    }

}, { timestamps: true })

module.exports = mongoose.model('customer', customerSchema)