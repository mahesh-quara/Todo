

export default function Movie(props){
    return(
        <div className="movies">
            <h1>Movie: {props.name}</h1>
            <h2>Rating: {props.rating}</h2>
        </div>
    )
}