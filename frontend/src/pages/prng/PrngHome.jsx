import { useState } from "react";

const PrngHome = () => {

    const [prngResultArrayArray, setPrngResultArrayArray] = useState([]);
    const [prngResultArray, setPrngResultArray] = useState([]);
    const [prngVariables, setPrngVariables] = useState
        (
            {
                dice_sides: 6,
                dice_count: 10,
                seed_type: "",
                seed: "",
                prng_type: "Math.random"
            }
        );

    // useEffect(() => {
    //     setPrngResultArrayArray(previous => [...previous, prngResultArray]);
    // },[prngResultArray])

    /*
    seedType pulldown
    Fix deletion keeping "0" at front.
    -1 for no seed.  But is this allowed?
    Data is a many to many relationship, relationship tracked
    in separate table.
    PRNG type another, and analysis yet another.
    */

    const handleTextChange = (event) => {
        setPrngVariables({ ...prngVariables, [event.target.id]: event.target.value });
    };

    const generatePrngResultArray = () => {
        const returnArray = [];
        for (let i = 0; i < prngVariables.dice_count; i++) {
            returnArray.push(Math.floor(Math.random() * prngVariables.dice_sides) + 1);
        }
        setPrngResultArray(returnArray)
        setPrngResultArrayArray(previous => {
            return [...previous, returnArray];
        });
    };

    // const addPrngResultArrayArray = () => {
    //     setPrngResultArrayArray(previous => [...previous, prngResultArray]);
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        generatePrngResultArray();
        /*
        When prngResultArray updates, prngResultArrayArray is incremeneted. setState is not a promise, so async await cannot be used with it.  Using multiple setState may be used with setState(previous => etc).  Creating a holding variable and assigning the holding variable to separate setState(s) within the "etc" callback works. Calling sequential setState using previous may also work. Try it.
        */
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="dice_sides">Dice Sides:
                    <input
                        id="dice_sides"
                        value={prngVariables.dice_sides}
                        type="number"
                        onChange={handleTextChange}
                        placeholder="Enter dice sides."
                        required
                    />
                    <br />
                </label>
                <label htmlFor="dice_count">Dice Count:
                    <input
                        id="dice_count"
                        value={prngVariables.dice_count}
                        type="number"
                        onChange={handleTextChange}
                        placeholder="Enter dice count."
                        required
                    />
                    <br />
                </label>
                <label htmlFor="seed_type">Seed Type:
                    <input
                        id="seed_type"
                        value={prngVariables.seed_type}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Enter seed type"
                    />
                    <br />
                </label>
                <label htmlFor="seed">Seed:
                    <input
                        id="seed"
                        value={prngVariables.seed}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Enter seed"
                    />
                    <br />
                </label>
                <label htmlFor="prng_type">PRNG Type:
                    <input
                        id="prng_type"
                        value={prngVariables.prng_type}
                        type="text"
                        onChange={handleTextChange}
                        placeholder="Enter PRNG type."
                        required
                    />
                    <br />
                </label>
                <button onSubmit={handleSubmit}>Generate PRNG Array</button>
            </form>
            <div>Currrent PRNGArray: {JSON.stringify(prngResultArray)}</div>
            <div>
                Current PRNGArrayArray:
            </div>
            {prngResultArrayArray.map((element, index) => {
                return (
                    <div key={`PRNG${index}`}>
                        {JSON.stringify(element)}
                    </div>
                )
            })}
        </div>
    )
};
export default PrngHome;