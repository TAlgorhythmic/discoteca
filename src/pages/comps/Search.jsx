import "./Search.css";
import 

function Search() {

    function submit(input) {
        // TODO: call api
    }

    return (
        <>
            <div className="search-div">
                <label className="search-label" htmlFor="buscar">Busca discotecas</label>
                <input className="search-input" type="text" id="buscar" name="buscar"/>
                <button onClick={() => submit(document.getElementById("buscar").value)} className="search-button"></button>
            </div>
        </>
    )
}

export default Search;