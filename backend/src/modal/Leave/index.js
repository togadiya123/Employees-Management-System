import mongoose from "mongoose";

const {Schema} = mongoose;

const leaveSchema = Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        startingDate: {
            type: Date,
            required: true,
            validate(value) {
                if (value >= this.leaveEndingDate)
                    throw new Error('Leave stating date must be before or equal to ending date.')
            },
        },
        endingDate: {
            type: Date,
            required: true,
            validate(value) {
                if (value <= this.leaveStartingDate)
                    throw new Error('Leave ending date must be after or equal to starting date.')
            },
        },
        type: {
            type: String,
            enum: ['Privilege Leave', 'Sick Leave', 'Compensatory Leave', 'Less of pay Leave'],
            required: true,
        },
        description: {
            type: String,
            required: true,
            validate(value) {
                if (value.length < 10 || value.length > 120)
                    throw new Error('Add minimum 10 to 120 character description')
            }
        },
        status: {
            type: String,
            enum: ['Pending', 'Approve', 'Reject'],
            default: 'Pending',
            required: true,
        },
        statusDescription: {
            type: String,
            default: 'Pending for admin response.',
            required: true,
        },
    },
    {timestamps: true}
);

export default mongoose.model("leave", leaveSchema);