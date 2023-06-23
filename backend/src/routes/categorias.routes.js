import {Router} from"express";
import {methodsHTTP as categoriasController} from "../controllers/categoria.controllers.js"

const router= Router();

router.get("/",categoriasController.getCategorias)

export default router;