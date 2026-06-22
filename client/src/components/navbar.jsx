import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav style={{
            display: 'flex', 
            justifyContent:'space-between', 
            alignItems: 'center',
            margin: '50px',
            marginRight: '200px',
            textDecoration: 'none',
            color: 'inherit'
            
            }}>


            <Link to="/">Home</Link>

            <div style={{
            display: 'flex',
            flexdirection: 'roW',
            gap: '50px',
            textDecoration: 'none',
            color: 'inherit' }}>

            <Link to="/carrito" style={{
                textDecoration: 'none',
                color: 'inherit' }}>Carrito</Link>
                
            <Link to="/perfil" style={{
                textDecoration: 'none',
                color: 'inherit' }}>Perfil</Link>

            </div>

        </nav>
        
    );
}

export default Navbar;