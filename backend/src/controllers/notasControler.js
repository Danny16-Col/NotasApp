import Notas from "../models/Notas.js";


// Crear una nueva nota
export const createNota = async ( req, res ) => {
    try {
        const { title, description, dueDate } = req.body;
        const newNota = new Notas( {
            title,
            description,
            dueDate,
            owner: req.user._id
        } );
        const savedNota = await newNota.save();
        res.status( 201 ).json( savedNota );
    }catch ( error ) {
        res.status( 500 ).json( { message: "Error al crear la nota", error } );
    }
};
// Obtener todas las notas del usuario autenticado
export const getNotas = async ( req, res ) => {
    try {
        const notas = await Notas.find( { owner: req.user._id } ).sort( { createdAt: -1 } );
        res.status( 200 ).json( notas );
    }catch ( error ) {
        res.status( 500 ).json( { message: "Error al obtener las notas", error } );
    }  
};  

// Actualizar una nota existente
export const updateNota = async ( req, res ) => {
    try {
        const { id } = req.params;
        const { title, description, completed, dueDate } = req.body;
        const updatedNota = await Notas.findOneAndUpdate(
            { _id: id, owner: req.user._id },
            { title, description, completed, dueDate },
            { new: true }
        );
        if ( !updatedNota ) {
            return res.status( 404 ).json( { message: "Nota no encontrada" } );
        } 
        res.status( 200 ).json( updatedNota );
    }catch ( error ) {
        res.status( 500 ).json( { message: "Error al actualizar la nota", error } );
    }
};
// Eliminar una nota
export const deleteNota = async ( req, res ) => {
    try {
        const { id } = req.params;
        const deletedNota = await Notas.findOneAndDelete( { _id: id, owner: req.user._id } );
        if ( !deletedNota ) {
            return res.status( 404 ).json( { message: "Nota no encontrada" } );
        }
        res.status( 200 ).json( { message: "Nota eliminada correctamente" } );
    }catch ( error ) {
        res.status( 500 ).json( { message: "Error al eliminar la nota", error } );
    }   
};
