const User = require("../models/userModel");

exports.getAllStudents = async (req, res) => {
  try {
    const students = await User.find();
    res.status(200).json({
      students,
    });
  } catch (err) {
    res.status(404).json({ errMessage: err.message });
  }
};

exports.addStudent = async (req, res) => {
  const userName = req.body.userName;
  const userID = req.body.userID;
  const userBranch = req.body.userBranch;
  const student = new User({
    userName,
    userID,
    userBranch,
  });

  try {
    const newStudent = await student.save();
    res.status(200).json(newStudent);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
