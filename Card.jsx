const Card = ({ name, type, base_experience } ) => (
    <div className="card">
        <PokeName name={name}/>
        <PokeImg/>
        <PokeType type={type}/>
        <PokeExp   exp={base_experience}/>
    </div>
)