import "./main_page.css";

function Layout(isLogged, isAdmin) {
    return (
        <>
        <body>
        <div>
            <nav className="navbar">
                <p><a className="item">Discotecas</a></p>
                <p><a className="item">Contáctanos</a></p>
                <p><a className="item">Subir reseña</a></p>
            </nav>
        </div>

        <footer className="footer">
            <img className="logo"/>
            <p>Telefono: telefono</p>
        </footer>
        </body>
        </>
    )
}

export default Layout;