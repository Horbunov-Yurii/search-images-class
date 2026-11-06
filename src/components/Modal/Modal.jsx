import { Component } from "react";
import style from "./Modal.module.css"

class Modal extends Component {
    render(){
        const {largImage} = this.props
        return(
            <div className={style.beackdrop}>
                <div className={style.modal}>
                    <img className={style.img} src={largImage} alt="" />
                </div>
            </div>
        )
    }
}

export default Modal