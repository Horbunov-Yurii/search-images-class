import { Component } from "react";
import { Oval } from 'react-loader-spinner'
import style from "./Loader.module.css"

class Loader extends Component {
    render(){
        return(
            <div className={style.loader}>
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
        )
    }
}


export default Loader