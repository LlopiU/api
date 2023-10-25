import {pool} from './database.js';

class LibroController{
   async getAll(req, res){
        const [result] = await pool.query('SELECT * FROM Libros');
        res.json(result);
    }

    async getOne(req, res) {
        const libro= req.body;
        try {
            const [result] = await pool.query(`SELECT * FROM Libros WHERE id=(?)`, [libro.id]);
            if (result.length > 0) {
                res.json({"Datos del Libro": result});
            } else {
                res.status(404).json({ "Mensaje": "No se encontró el libro con el ID especificado" });
            }
        } catch (error) {
            console.error("Error al buscar el libro por ID:", error);
            res.status(500).json({ "Mensaje": "Error en el servidor" });
        }
    }

    async add(req,res){
        const libro = req.body;
        try { 
            if (libro.nombre  && libro.autor  && libro.categoria  && libro.añopublicacion && libro.ISBN ) 
            {
                const [result] = await pool.query(`INSERT INTO Libros(nombre, autor, categoria, añopublicacion, ISBN) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.añopublicacion, libro.ISBN]);
                res.json({"id insert": result.insertId});
            } else {
                res.status(404).json({ "Mensaje": "No se puede registrar campos vacios" });
            }
        }
        catch (error){
            console.error("Error al agregar libro", error);
            res.status(500).json({ "Mensaje": "Error en el servidor" });
        }
        
    }

    async delete(req, res){
        const libro = req.body;
        try{
            const [result] = await pool.query(`SELECT * FROM Libros WHERE ISBN=(?)`, [libro.ISBN]);
            if (result.length > 0) {
                const [result] = await pool.query(`DELETE FROM Libros WHERE ISBN=(?)`, [libro.ISBN]);
                res.json({"Regsitros eliminados": result.affectedRows});
            } else {
                res.status(404).json({ "Mensaje": "No se encontró el libro con el ISBN especificado" });
            }}
        catch (error){ 
            console.error("Error al eliminar el libro por ISBN:", error);
            res.status(500).json({ "Mensaje": "Error en el servidor" });
        }
        
    }

    async update(req,res){
        const libro = req.body;
        try {
            const [result] = await pool.query(`SELECT * FROM Libros WHERE id=(?)`, [libro.id]);
            if (result.length > 0) {
                const [result] = await pool.query(`UPDATE Libros SET nombre=(?), autor=(?), categoria=(?), añopublicacion=(?), ISBN=(?) WHERE id=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.añopublicacion, libro.ISBN, libro.id]);
                res.json({"Registros Actualizados": result.affectedRows});
            } else {
                res.status(404).json({ "Mensaje": "No se encontró el libro con el id especificado" });
            }}
        catch (error){
            console.error("Error al actualizar el libro por id:", error);
            res.status(500).json({ "Mensaje": "Error en el servidor" });
        }
    }   
}


export const libro = new LibroController();