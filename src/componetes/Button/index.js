import './button.css'

const Button = (props) =>{
    return(
        <div className="button-wrapper">
            <button className="button-style">{props.children}</button>
        </div>
    )
}

export default Button