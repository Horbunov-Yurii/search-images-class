import { Component } from "react";
import style from "./Modal.module.css"

class Modal extends Component {
    componentDidMount(){
        window.addEventListener("keydown", this.handleEscapeModalClose)
    }

    componentWillUnmount(){
        window.removeEventListener("keydown", this.handleEscapeModalClose)
    }

    handleEscapeModalClose = (e) => {
        if (e.code === "Escape") {
            this.props.onClose()
        }
    }

    handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            this.props.onClose()
        }
    }

    render(){
        const { largImage } = this.props
        return(
            <div className={style.beackdrop} onClick={this.handleBackdropClick}>
                <div className={style.modal}>
                    <img className={style.img} src={largImage} alt="" />
                </div>
            </div>
        )
    }
}

export default Modal