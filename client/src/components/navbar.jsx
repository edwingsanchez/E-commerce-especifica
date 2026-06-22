import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div style={{
            padding: '10px 20px',
            display: 'flex', 
            justifyContent:'space-between', 
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit',
            backgroundColor: 'gray'            
            }}>

           
            <Link to="/"><h1>Logo</h1></Link>

            <nav style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '50px'}}>

                <Link to="/carrito" style={{
                    textDecoration: 'none',
                    color: 'inherit', 
                    fontSize:'30px'}}>Carrito</Link>
                    
                <Link to="/perfil" style={{
                    textDecoration: 'none',
                    color: 'inherit',
                    fontSize:'30px'}}>Cuenta</Link>
            </nav>
            
        </div>
    );

}

export default Navbar;