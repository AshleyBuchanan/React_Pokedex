import Hand from './Hand.jsx';
const PokeGame = ({defaults}) => {
    //const shuffled = [...defaults].sort(() => Math.random() - 0.5);

    function fisherYatesShuffle(array) {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [copy[i], copy[j]] = [copy[j], copy[i]];
        }
        return copy;
    }

    const shuffled = fisherYatesShuffle(defaults || []);
    const half = Math.ceil(shuffled.length / 2);
    const hand1 = shuffled.slice(0, half);
    const hand2 = shuffled.slice(half);
    return (
        <>
            <div id="title">Pokedex</div>
            <div id="container">
                <Hand handName="One" cards={hand1}></Hand>
                <Hand handName="Two" cards={hand2}></Hand>
            </div>
        </>
    )
}

export default PokeGame;