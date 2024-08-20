import { useState } from "react";
import handleFetch from "../utils/handleFetch";

const PokemonForm = () => {
    const [name, setName] = useState('');
    const [hp, setHp] = useState('');
    const [front, setFront] = useState('');
    const [back, setBack] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const postOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: name, hp: hp, front: front, back: back }),
        };

        handleFetch('http://localhost:4000/pokemon', postOption);
        
        // const url = "http://example.com/api";
        // const response = await fetch(url, exampleOptions);
        // const data = await response.json();
    
        // reset the state values after submission.
        setName('');
        setHp('');
        setFront('');
        setBack('');

        // console.log('SUBMITTED!');
      }

    return (
        <div>
            <h3>Add a Pokemon!</h3>
            <form className="ui form" onSubmit={handleSubmit}>
                <div className="four fields" widths="equal">
                    <div className="field ui fluid">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div className="field ui fluid">
                        <label>HP</label>
                        <input type="text" name="hp" placeholder="HP" value={hp} onChange={(e) => setHp(e.target.value)} />
                    </div>
                    <div className="field ui fluid">
                        <label>Front Image URL</label>
                        <input type="text" name="front" placeholder="url" value={front} onChange={(e) => setFront(e.target.value)} />
                    </div>
                    <div className="field ui fluid">
                        <label>Back Image URL</label>
                        <input type="text" name="back" placeholder="url" value={back} onChange={(e) => setBack(e.target.value)} />
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default PokemonForm
