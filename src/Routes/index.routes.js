import { Router } from 'express'
import { pool } from '../DB/db.js'

const router = Router()

router.get('/ping', async ( req,res ) => {
    const [ result ] = await pool.query(`SELECT * FROM tbl_empleado`)
    res.json( result )
})

export default router