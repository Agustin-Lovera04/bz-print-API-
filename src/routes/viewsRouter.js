import { Router } from 'express';
export const router=Router()

router.get('/',(req,res)=>{

    res.status(200).render('home')
})


const productos = [
    {
      id: 1,
      precio: 25.99,
      title: "Camiseta",
      descripcion: "Camiseta de algodón 100% en varios colores.",
      stock: 50
    },
    {
      id: 2,
      precio: 49.99,
      title: "Pantalón",
      descripcion: "Pantalón de mezclilla con diseño clásico.",
      stock: 30
    },
    {
      id: 3,
      precio: 15.99,
      title: "Gorra",
      descripcion: "Gorra ajustable en varios colores.",
      stock: 100
    },
    {
      id: 4,
      precio: 120.0,
      title: "Chaqueta",
      descripcion: "Chaqueta de cuero sintético, ideal para el invierno.",
      stock: 10
    },
    {
      id: 5,
      precio: 9.99,
      title: "Calcetines",
      descripcion: "Pack de calcetines de algodón.",
      stock: 200
    }
  ];
  



router.get('/products', async (req,res) => {
    return res.status(200).render('products', {productos});
})

router.get('/products/:id', async ( req, res) => {
    let { id } = req.params

    /* let product = await */

    // Aca podremos modificar, nombres, precios, stock
    return res.status(200).json({ok: 'Get Product by ID'});
})