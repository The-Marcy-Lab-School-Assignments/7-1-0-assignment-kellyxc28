// TODO: This component should render a single pokemon's stats and image.
import { useState } from "react";

const PokemonCard = ({name, hp, front, back}) => {
    const [img, setImage] = useState(front);

    const clickHandle = () => {
        if (img === front) setImage(back);
        else setImage(front);
    }

    return (
        <div className="ui card">
            <div onClick ={clickHandle}>
                <div className="image">
                    <img alt="pokemon name" src={img} />
                </div>
                <div className="content">
                    <div className="header">{name}</div>
                    
                </div>
                <div className="extra content">
                    <span>
                        <i className="icon heartbeat red" />
                        {hp}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard