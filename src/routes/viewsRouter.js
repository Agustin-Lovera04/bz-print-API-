import { Router } from 'express';
export const router=Router()

router.get('/',(req,res)=>{

    res.status(200).json({ok: 'ok'})
})

router.get('/products', async (req,res) => {
    return res.status(200).json({ok: 'Get Products'});
})

router.get('/products/:id', async ( req, res) => {
    let { id } = req.params

    /* let product = await */

    // Aca podremos modificar, nombres, precios, stock
    return res.status(200).json({ok: 'Get Product by ID'});
})