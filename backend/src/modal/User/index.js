import mongoose from "mongoose";
import validator from "validator";

const {Schema} = mongoose;

const userSchema = Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        designation: {
            type: String,
            required: true,
        },
        qualification: {
            type: String,
            required: true,
        },
        emailId: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error('Email Is Not Valid !')
                }
            }
        },
        phoneNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            validate(value) {

                if (value.length !== 12 || !validator.isNumeric(value)) {
                    throw new Error('Number Is Not Valid !')
                }
            }
        },
        password: {
            type: String,
            required: true,
            minlength: 7,
            trim: true,
            validate(value) {
                if (value.toLowerCase().includes('password')) {
                    throw new Error(`You Can not use password as Password !`)
                }
            }
        },
        avatar: {
            required: true,
            type: Buffer
        },
        dateOfBirth: {
            type: Date,
            required: true,
        },
        dateOfJoin: {
            type: Date,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        tokens: [{
            token: {
                type: String,
            },
        }]
    },
    {timestamps: true}
);

userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();
    delete userObject.password;
    delete userObject.tokens;
    return userObject;
};

export default mongoose.model("user", userSchema);