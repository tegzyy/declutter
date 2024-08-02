/** 
 default button
 grayscale button
 inverted button
 green button
 */
import './buttons.styles.scss'

const BUTTON_TYPE_CLASSES = {
    grayscale: 'grayscale',
    inverted: 'inverted',
    green: 'green',
    googleSignIn: 'google-sign-in'
}


function Button({children, buttonType }){
    return(
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}>
        {children}
        </button>
    )
}

export default Button