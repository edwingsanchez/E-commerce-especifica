function Checkout(){
    return (
        <div>
            <h1>Checkout</h1>
            <div className="checkout-form">
                <p>Nombre Completo</p>
                <textarea></textarea>

                <p>Dirección de Envío</p>
                <textarea></textarea>
                
                <p>Información de Pago</p>
                <textarea></textarea>
                
                <button>Realizar Pedido</button>
            </div>

            <div className="resumen-pedido">
                <h2>Resumen del Pedido</h2>
                <p><span>Precio de envío</span></p>
                <p><span>Precio productos</span></p>
                <hr></hr>
                <p><span>Precio total</span></p>
            </div>
            
        </div>
    )
}
export default Checkout