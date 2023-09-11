import Person from "../models/personModel.js";

//@desc Fetch a Person resource
//@route GET /api/userId
//@access public
export const getPerson = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const result = await Person.findById(userId);

    if (!result) {
      const err = new Error("User not found");
      res.status(404);
      next(err);
    } else {
      res.json({ data: result });
    }
  } catch (err) {
    // Check if the error is a CastError (invalid ID)
    if (err.name === "CastError") {
      res.status(400);
      err.message = "Use a valid ID format";
      next(err);
    } else {
      res.status(500);
      err.message = "Server failed to fetch user. Try again...";
      next(err);
    }
  }
};

//@desc Create a Person resource
//@route POST /api
//@access public
export const createPerson = async (req, res, next) => {
  const { name } = req.body;
  if (!name || typeof name !== "string") {
    const err = new Error("Invalid or missing 'name' field");
    res.status(400);
    next(err);
  } else {
    // Sanitize data

    const person = new Person({ name });
    try {
      person.save();
      res.status(201).json({ data: person });
    } catch (err) {
      res.status(500);
      err.message = "Failed to create new user.";
      next(err);
    }
  }
};

//@desc Update a Person resource
//@route PUT /api/userId
//@access public
export const updatePerson = async (req, res, next) => {
  const { name } = req.body;
  if (!name || typeof name !== "string") {
    const err = new Error("Invalid or missing 'name' field");
    res.status(400);
    next(err);
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
      const err = new Error("User not found");
      res.status(404);
      next(err);
    } else {
      res.status(200).json({ data: updatedUser });
    }
  } catch (err) {
    // Check if the error is a CastError (invalid ID)
    if (err.name === "CastError") {
      res.status(400);
      err.message = "Use a valid ID format";
      next(err);
    } else {
      res.status(500);
      err.message = "Failed to update user.";
      next(err);
    }
  }
};

//@desc Delete a Person resource
//@route DELETE /api/userId
//@access public
export const deletePerson = async (req, res, next) => {
  const { userId } = req.params;
  try {
    const result = await Person.findByIdAndDelete(userId);

    if (!result) {
      const err = new Error("User not found");
      res.status(404);
      next(err);
    } else {
      res.json({ data: result });
    }
  } catch (err) {
    // Check if the error is a CastError (invalid ID)
    if (err.name === "CastError") {
      res.status(400);
      err.message = "Use a valid ID format";
      next(err);
    } else {
      res.status(500);
      err.message = "Failed to delete user";
      next(err);
    }
  }
};
