
export default function SubmitButton(props){
    return(
        <div className='right'>
            <button className="button" type="submit" onClick={props.handleClick} >Submit</button>
        </div>
    )
}