import mongoose from "mongoose";

const postSchema = mongoose.Schema({ // each post has to have these parameters
    boxno: String,
    value: String,
});

const PostGrid = mongoose.model('grid', postSchema);
//expxorting a mongoose model and we/ll add find create delete and update later
export default PostGrid;