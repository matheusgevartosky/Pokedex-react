import react from "react";
import { handleGenerateBg } from "../../util";


class Pokemon extends react.Component{
    render(){

        const typePokemon = handleGenerateBg(this.props.tipo[0])
        console.log(typePokemon)
        return(
            <div className="pokemon" style={{ backgroundColor: typePokemon }}>
            <img 
            className="pokemon-image"
            src={this.props.foto}
            alt={`pokemon ${this.props.nome}`}
            />
          <h2>{this.props.nome}</h2>
          <ul className="pokemon-info">
            <li>HP: {this.props.hp}</li>
            <li>Attack: {this.props.ataque}</li>
            <li>Defense: {this.props.defesa}</li>
          </ul>
          <div>
            {this.props.tipo.join('/')}
          </div>
          </div>
        )
    }
    

    
}export default Pokemon