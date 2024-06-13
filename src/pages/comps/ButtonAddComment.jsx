import "./../../../public/layout_global.css";
import "./Search.css";

export default function Button() {
    function add(msg) {

    }

    return (
        <>
            <div className="column">
                <div className="row">
                    <label htmlFor="value" className="content">Escribe un comentario: </label>
                </div>
                <textarea type="text" id="value" className="comments-div"></textarea>
                <button onClick={() => add(document.getElementById("value").value)} className="size-bigger search-button margin-bottom">Postear</button>
            </div>
        </>
    )
}