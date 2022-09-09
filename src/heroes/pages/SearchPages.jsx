import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components/HeroCard"
import { getHeroesByName } from "../helpers";


export const SearchPages = () => {
  // hook del navigate para usarlo y navegar entre rutas
  const navigate = useNavigate();
  // useLocation para ver los datos de donde estamos ubicados
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({

    searchText: q
    
  });

  const onSearchSummit = (event) =>{
    event.preventDefault();
    // if( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`);

  }



  return (
    <>
     <h1>Search</h1>
      <hr />

     <div className="row">
      <div className="col-5">
        <h4>Searching</h4>
        <hr />
        <form onSubmit={ onSearchSummit } >
            <input type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange= { onInputChange }
            />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7"> 
          <h4>Results</h4>
          <hr />
          
          {/* Mensajes condicionales con un ternario y 2 condiciones!! */}
          {/* {
            (q==='')
            ? <div className="alert alert-primary"> Search a Hero </div> 
            : (heroes.length === 0) 
            && <div className="alert alert-danger"> No existen los heroes <b> { q } </b></div>

          } */}

          {/* Otra forma de mostrar mensajes condicionales */}
          
            <div className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display: showSearch ? '' : 'none' }}>
              Search a hero
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" 
                style={{ display: showError ? '' : 'none' }}>
              No hero with <b>{ q }</b>
            </div>



           

          

          {
            heroes.map(hero => ( 
              <HeroCard key={hero.id} {...hero} /> 
            ))
          }
         

        </div>  
    </div> 
    

    </>
  )
}
