const Card = ({ id, name, type, base_experience } ) => (
    <div className="card">
        <PokeName name={name}/>
        <PokeImg    id={id}/>
        <PokeType type={type}/>
        <PokeExp   exp={base_experience}/>
    </div>
)