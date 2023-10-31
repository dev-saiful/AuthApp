import {  Router  } from "express";
const router = Router();
import {login,signup} from "../controllers/Auth";

// create route and map to handler or controller
router.post("login",login);
router.post("signup",signup);

module.exports = router;