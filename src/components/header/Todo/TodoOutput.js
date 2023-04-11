
export default function TodoOutput(props){
    return(
        <div className='output'>
            {props.data.map((e, index) =>(
                <div className='task' key={index}>
                    <div>{e}</div>
                    <button onClick={() => props.handleClick(index)}>Delete</button>
                </div>
            ))}
        </div>
    )
}