import { Schema, model } from "mongoose";

const personSchema = new Schema({
  name: {
    type: String,
    required: [true, "'Name' field cannot be blank"],
  },
});

const Person = model("Person", personSchema);

export default Person;
