import myDB from "../db/myDB.js";
import { genPassword } from "./utils/passwordUtilites.js";

/**
 * Amanda Au-Yeung
 * redirect register
 * @param {obj} req
 * @param {obj} res
 */
export const redirectReg = (req, res) => {
  res.status(200).redirect("/api/register");
};

/**
 * Amanda
 * register user
 * @param {obj} req
 * @param {obj} res
 */
export const register = async (req, res) => {
  let checkExistUser;
  try {
    checkExistUser = await myDB.getUsers(req.body.email);
    if (checkExistUser === null) {
      const { salt, hash } = genPassword(req.body.password);
      await myDB.createUser(req.body.email, salt, hash);
      res
        .status(201)
        .json({ message: "Успешная регистрация! Перейдите, чтобы войти в систему!" });
    } else {
      res.json({
        message: "Электронная почта пользователя уже существует, вы можете войти!",
        err: "Почта",
      });
    }
  } catch (err) {
    res.status(400).send({ err: err });
  }
};
