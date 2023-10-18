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
        const [result] = await pool.query(`INSERT INTO Libros(nombre, autor, categoria, añopublicacion, ISBN) VALUES (?, ?, ?, ?, ?)`, [libro.nombre, libro.autor, libro.categoria, libro.añopublicacion, libro.ISBN]);
        res.json({"id insert": result.insertId});
    }
    async delete(req, res){
        const libro = req.body;
        const [result] = await pool.query(`DELETE FROM Libros WHERE id=(?)`, [libro.id]);
        res.json({"Regsitros eliminados": result.affectedRows});
    }
    async update(req,res){
        const libro = req.body;
        const [result] = await pool.query(`UPDATE Libros SET nombre=(?), autor=(?), categoria=(?), añopublicacion=(?), ISBN=(?) WHERE id=(?)`, [libro.nombre, libro.autor, libro.categoria, libro.añopublicacion, libro.ISBN, libro.id]);
        res.json({"Registros actualizados": result.changedRows});

    }   
}


export const libro = new LibroController();