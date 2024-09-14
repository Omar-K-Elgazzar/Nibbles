import mongoose from "mongoose";

const postSchema = mongoose.Schema({ 
    boxno: String,
    value: {
        type: Number, // value is also an integer
         // Ensure it's required
    },
});

const PostGrid = mongoose.model('grid', postSchema);

export default PostGrid;
