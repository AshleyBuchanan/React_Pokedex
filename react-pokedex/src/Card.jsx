import PokeName from './PokeName';
import PokeImg  from './PokeImg';
import PokeType from './PokeType';
import PokeExp  from './PokeExp';

const Card = ({ id, name, type, base_experience } ) => (
    <div className="card">
        <PokeName name={name}/>
        <PokeImg    id={id}/>
        <PokeType type={type}/>
        <PokeExp   exp={base_experience}/>
    </div>
)

export default Card;