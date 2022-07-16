const mongoose = require("mongoose")
const validator = require("validator")
const PackageViewSchema = new mongoose.Schema({
    id: {
        type: mongoose.Schema.ObjectId,
    },
    Name: {
        type: String,
        requried: [true, "Please Enter Your Name"],
        trim: true
    },
    EmailAddress: {
        type: String,
        required: [true, "Please Enter Your Email"],
        validate: [validator.isEmail, "Please Enter a Valid Email"],
    },
    PkgName: {
        type: String,
        requried: [true, "please write package name"]
    },
    DaysOfstay: {
        type: Number,
        required: [true, "please write number of days of stay alloted in the package"]


    },
    PkgDetail: {
        type: String,
        required: [true, "Please enter pkg Details"]
    },
    ValidTill: {
        type: String,
        required: [true, "Please enter pkg Details"]
    },
    flag: {
        type: Boolean,
        default: 1,

    },


})
module.exports = mongoose.model("PackageView", PackageViewSchema)