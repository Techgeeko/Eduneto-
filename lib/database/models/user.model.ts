import { Schema, model, Document, models } from 'mongoose';

// Step 1: Define the User Schema
const UserSchema = new Schema(
  {
    clerkId:{
        type: String,
        required: true, 
        unique: true,
    },
    email: { 
        type: String,
        required: true,
        unique: true, 
    },
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    firstName: { 
        type: String,
    },
    lastName: { 
        type: String,
    },
  }
);

// Step 3: Create the Mongoose Model
const User = models?.user || model('User', UserSchema);

export default User;
