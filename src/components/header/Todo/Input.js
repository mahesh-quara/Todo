
export default function Input(props){
    return(
        <div className='left'>
            <input 
                type="text"
                id="task"
                name="task"
                value={props.inputData}
                placeholder="Enter Task"
                onChange={props.handleClick}
            />
        </div>
    )
}