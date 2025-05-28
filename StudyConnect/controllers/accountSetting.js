import myDB from "../db/myDB.js";
import cloudinary from "./utils/cloudinary.js";

/**
 * 
 * function to delete account from DB 
 * and delete profile pic from cloudinary
 * @param {obj} req
 * @param {obj} res
 */
export const delProfile = async (req, res) => {
    let id = req.query.id;
    let user;
    let public_id; // in cloudinary
    try {
      if (id) {
        user = await myDB.getUsersById(id);
        public_id = user.pic.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(public_id);
        await myDB.deleteUser(id);
        res.status(200).json({ message: "Жаль, что вы уходите:(" });
      }
    } catch (err) {
      res.status(400).send({ err: `При удалении учетной записи возникает ${err} .` });
    }
  }
