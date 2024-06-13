import "./Search.css";

function Search() {

    function submit(input) {
        if (input === undefined || input.length === 0) {
            alert("Por favor ingrese texto.");
            return;
        }
        
        // TODO: call api
    }

    return (
        <>
            <div className="search-div">
                <label className="search-label" htmlFor="buscar">Busca discotecas</label>
                <input className="search-input" type="text" id="buscar" name="buscar"/>
                <button onClick={() => submit(document.getElementById("buscar").value)} className="search-button">Buscar</button>
            </div>
        </>
    )
}

export default Search;