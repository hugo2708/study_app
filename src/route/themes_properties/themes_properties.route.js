const themes_propertiesController = require("../../controller/themes_properties/themes_properties.controller");

module.exports = function (app){
    app.get("/themes_properties/list", themes_propertiesController.listar);
    app.get("/themes_properties/actualizar", themes_propertiesController.actualizar);
    app.get("/themes_properties/buscarporCodigo", themes_propertiesController.buscarPorCodigo);
    app.get("/themes_properties/eliminar", themes_propertiesController.eliminar);
}