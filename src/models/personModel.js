import { Schema, model } from "mongoose";

const personSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add the name"],
  },
});

const Person = model("Person", personSchema);

export default Person;
