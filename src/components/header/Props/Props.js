import Movie from "../Movie/Movie"

export default function Props(){
    const data = [
        {
            name:"Iron Man 1",
            rating: 8.3
        },
        {
            name:"Avengers: End Game",
            rating: 9.1
        },{
            name:"Ra. One",
            rating: 7.1
        }
    ]
    return(
        <div>
            <Movie name={data[0].name} rating={data[0].rating} />
            <Movie name={data[1].name} rating={data[1].rating} />
            <Movie name={data[2].name} rating={data[2].rating} />
        </div>
    )
}