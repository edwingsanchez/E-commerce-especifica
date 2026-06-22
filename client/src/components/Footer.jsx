function footer(){
    return(
        <footer
        style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor: 'purple',
            height: '100px'
            
            }}>

            <p>Derechos Reservados</p>

            <div style={{
                display: 'flex',
                flexDirection: 'column'

            }}>
                <a href="Facebook.com">Facebook</a>
                <a href="Instagram.com">Instagram</a>
                <a href="Discord.com">Discord</a>
                
            </div>


        </footer>
    )
}
export default footer