const Usuario = require('./Usuario.model');
const Comentario = require('./Comentario.model');
const Publicacion = require('./Publicacion.model');

Usuario.hasMany(Publicacion);
Usuario.hasMany(Comentario);
Comentario.belongsTo(Usuario);
Comentario.belongsTo(Publicacion);
Publicacion.hasMany(Comentario);
Publicacion.belongsTo(Usuario)

