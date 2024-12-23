const user = require('../models/user')

module.exports={
    
  getAllUser: async (_req, res) => {
    try {
      const users = await user.find();
      res.status(200).json(users); 
    } catch (err) {
      console.error(err); 
      res.status(500).send("Error occurred while retrieving data");
    }
  },

  addUser: async (req, res) => {
    const { moviename,time,seat, name, phoneno, email, payment } = req.body;
    try {
      const newUser = new user({ moviename,time,seat, name, phoneno, email, payment });
      await newUser.save();
      res.status(201).json(newUser); 
    } catch (err) {
      console.error(err); 
      res.status(500).send("Error adding user");
    }
  },

  deleteUser: async (req, res) => {
    try {
      const id = req.params.id;
      const userExist = await User.findById(id);
      if (!userExist) {
        return res.status(404).json({ message: "User Not Found." });
      }

      const deletedUser = await User.findByIdAndDelete(id);
      res.status(200).json(deletedUser); 
    } catch (err) {
      console.error(err);
      res.status(500).send("Error deleting user.");
    }
  },
}