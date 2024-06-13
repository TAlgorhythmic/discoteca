import "./Search.css";

function Search() {
    return (
        <>
            
            <div className="search-div">
                <label className="search-label" htmlFor="buscar">Busca discotecas</label>
                <input className="search-input" type="text" id="buscar" name="buscar"/>
            </div>
        </>
    )
}

export default Search;