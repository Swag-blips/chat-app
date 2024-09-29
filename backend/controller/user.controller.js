import User from "../model/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredusers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    console.log(filteredusers);
    return res.status(200).json(filteredusers);
  } catch (error) {
    console.log(`error in getUsersForSidebar ${error.message}`);
    res.status(500).json({ error: "Internal server error" });
  }
};
