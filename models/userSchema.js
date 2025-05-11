import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        minLength: [3, "Username must conatin at least 3 characters. "],
        maxLength: [40, "Username cannot exceed 40 characters."],
    },
    password:{
        type: String,
        selected: false,
        minLength: [8, "Password must conatin at least 8 characters. "],
        maxLength: [32, "Password cannot exceed 32 characters."],
    },
    email: String,
    address: String,
    phone: {
        type: String,
        minLength: [10, "Phone number must contain exact 10 digits. "],
        maxLength: [10, "Phone number must contain exact 10 digits. "],
    },
    profileImage: {
        public_id: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
    },
    paymentMethods: {
      bankTransfer: {
        bankAccountNumber: String,
        bankAccountName: String,
        bankName: String,
      },
      easypaisa : {
        easypaisaAccountNumber: Number
      },
      paypal: {
        paypalEmail: String,
      },
    },
    role: {
        type: String,
        enum: ["Auctioneer", "Bidder", "Super Admin"]
    },
    unpaidCommission: {
        type: Number,
        default: 0,
    },
    auctionWon: {
        type: Number,
        default: 0
    },
    moneySpent: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});