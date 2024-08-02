import './form-input.scss'

function FormInput({label, ...otherProps}){
    return(
        <div className="group form-input-label"> 
        {label}
        <input className="form-input" {...otherProps}/>
        
        
        </div>
    )
}

export default FormInput