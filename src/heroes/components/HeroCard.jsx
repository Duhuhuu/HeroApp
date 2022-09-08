import { Link } from "react-router-dom";

// Para mostrar solo un dato si el alter ego es diferente del character forma 2 con un componente.
const CharactersByHero = ( { alter_ego, characters } ) => {
    // if(alter_ego === characters) return (<></>);
    // return <p> { characters } </p>

    // Misma forma que la de arriba, nada mas que usando un ternario
    return (alter_ego === characters)
    ? <></>
    : <p> { characters } </p>;
}

export const HeroCard = ({ id, 
    superhero, 
    publisher, 
    alter_ego, 
    first_appearance, 
    characters 
}) => {

    const heroImagenUrl = `/assets/heroes/${id}.jpg`;
    // Para mostrar solo un dato si el alter ego es diferente del character
    // const charactesByHero = (<p> {characters } </p>);

  return (
    <div className="col"> 
        <div className="card" >

            <div className="row no-gutters">
                <div className="col-4" >
                    <img src={heroImagenUrl} className="card-img" alt={superhero} />
                </div>   

                <div className="col-8" >
                    <div className="card-body">
                        <h5 className="card-title" >{ superhero } </h5>
                        <p className="card-text" > { alter_ego } </p>

                        {/* Para mostrar solo un dato si el alter ego es diferente del character */}
                        {/* {
                            (alter_ego !== characters) && charactesByHero
                        } */}

                        <CharactersByHero characters={ characters } alter_ego ={alter_ego} />


                        <p className="card-text" >
                            <small className="text-muted"> { first_appearance }</small>

                        </p>

                            <Link to={`/hero/${id}`} >
                                 Mas..
                            </Link>
                    </div>

                </div>

            </div>


        </div>

    </div>
  )
}
