const PokeImg = ({ url='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/', id } ) => (
    <div className="poke-img">
        <img src={`${url}${id}.png`}></img>
    </div>
)