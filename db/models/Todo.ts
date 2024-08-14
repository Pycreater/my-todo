import mongoose, { Document, Model, Schema } from "mongoose";

export interface ITodo extends Document {
  title: string;
  description?: string;
  completed?: boolean;
}

const TodoSchema: Schema<ITodo> = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for the Todo"],
      maxlength: [60, "Title cannot be more than 60 characters"],
    },
    description: {
      type: String,
      maxlength: [200, "Description cannot be more than 200 characters"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Todo: Model<ITodo> =
  mongoose.models.Todo || mongoose.model<ITodo>("Todo", TodoSchema);

export default Todo;
