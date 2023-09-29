import './Jogos.css';

function Jogos (props){
    return(
        <div className="Jogos">
            <h1> Five Nights at Freddy's </h1>
            <p className="a"> <strong> Por: </strong> Scott Cawthon  </p>
            <h4>Preço: R$10,89</h4>
            <p> <strong> Descrição: </strong> {props.desc} </p>
            <p> <strong> Categorias: </strong> {props.categoria} </p>
        
        </div>
    )
}

export default Jogos;