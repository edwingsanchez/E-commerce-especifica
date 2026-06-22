function Carrito(){
    return (
        <div>
            <h1>Carrito</h1>
            <div className="carritoDock">
                <div className="carrito-item">
                    <img src="ruta/a/imagen.jpg" alt="Producto" />
                    <p><span>Nombre Producto</span></p>
                    <p><span>Precio</span></p>
                    <button>Eliminar</button>
                </div>
            </div>
            <div className="resumen-pedido">
                <h2>Subtotal</h2>
                <hr></hr>
                <p><span>Precio total</span></p>
            </div>
        </div>
    )
}
export default Carrito