import "./Discotecas.css";

export default function Discoteca(props) {
    const name = props.name;
    const address = props.address;
    const telephoneNumber = props.telephoneNumber;
    const rate = props.rate;
    return (
        <>
            <div className="discoteca-div">
                <p className="entry">Nombre:</p>
                <p className="content">{name}</p>
                <p className="entry">Direción</p>
                <p className="content">{address}</p>
                <p className="entry">Teléfono</p>
                <p className="content">{telephoneNumber}</p>
                <p className="entry">Puntuación</p>
                <p className="content">{rate}/5</p>
            </div>
        </>
    )
}