import Person from "../models/personModel.js";

//@desc Fetch a Person resource
//@route GET /api/userId
//@access public
export const getPerson = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await Person.findById(userId);

    if (!result) {
      res.status(404).json({ message: "User not found." });
    } else {
      res.json({ data: result });
    }
  } catch (err) {
    // Check if the error is a CastError (invalid ID)
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    res.status(500).json({ message: err.message });
  }
};

//@desc Create a Person resource
//@route POST /api
//@access public
export const createPerson = async (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "Invalid or missing 'name' field" });
  }

  // Sanitize data

  const person = new Person({ name });
  try {
    person.save();
    res.status(201).json({ data: person });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//@desc Update a Person resource
//@route PUT /api/userId
//@access public
export const updatePerson = async (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== "string") {
    res.status(400).json({ error: "Invalid or missing 'name' field" });
  }

  try {
    const updatedUser = await Person.findByIdAndUpdate(
      req.params.userId,
      { name },
      {
        new: true,
      }
    );
    if (!updatedUser) {
      res.status(404).json({ error: "User not found." });
    } else {
      res.status(200).json({ data: updatedUser });
    }
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    return res.status(500).json({ error: err.message });
  }
};

//@desc Delete a Person resource
//@route DELETE /api/userId
//@access public
export const deletePerson = async (req, res) => {
  const { userId } = req.params;
  try {
    const result = await Person.findByIdAndDelete(userId);

    if (!result) {
      res.status(404).json({ message: "User not found." });
    } else {
      res.json({ data: result });
    }
  } catch (err) {
    // Check if the error is a CastError (invalid ID)
    if (err.name === "CastError") {
      return res.status(400).json({ message: "Invalid ID format" });
    }
    res.status(500).json({ message: err.message });
  }
};
