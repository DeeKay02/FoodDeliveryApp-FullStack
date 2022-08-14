import mongoose from "mongoose";

const ImageSchema = mongoose.Schema(
    {
        images: [
            {
                location: { type: String, required: true },
            },
        ],
    },
    {
        timestamps: true,
    }
);

export const ImageModel  = mongoose.model('Images', ImageSchema);