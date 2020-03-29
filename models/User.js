const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    googleId: String,
    userFirstName: String,
    userLastName: String,
    userEmail: String,
    userImage: String
  },
  { timestamps: true }
);

mongoose.model("users", userSchema);
