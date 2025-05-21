const Hand = ({handName, cards}) => (
    (
        <>
            <div className="hand">
                {cards.map(item => (
                    <Card 
                        key             = {item.id}
                        id              = {item.id}
                        name            = {item.name}
                        type            = {item.type}
                        base_experience = {item.base_experience}
                    />
                ))}
                <div className="hand-name">{handName}</div>
            </div>
            
        </>
 
    )
)