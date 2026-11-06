import { Component } from "react";
import style from "./Button.module.css"

class Button extends Component {
    render(){
        return(
            <button onClick={this.props.onClick} className={style.button} type="button">load more</button>
        )
    }
}

export default Button