const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const emailMatch =  [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'];
const roles = ["Administrador", "User", "Poster"];

const UserSchema = new Schema({

    username: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: "Correo Obligatorio",
        match: emailMatch,
        unique: true
    },
    rol: {
        type: String,
        enum: roles
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model("user", UserSchema);