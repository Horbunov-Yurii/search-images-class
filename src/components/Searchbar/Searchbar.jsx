import { Component } from "react";
import style from "./Searchbar.module.css";
class Searchbar extends Component {
  state = {
    searchValue: "",
  };

  handleSubmit = (evt)=>{
    evt.preventDefault()
    this.props.onSubmit(this.state.searchValue)
    
  }

  render() {
    return (
      <>
        <header className={style.searchbar}>
          <form onSubmit={this.handleSubmit} className={style.form}>
            <button type="submit" className={style.button}>
              <span>Search</span>
            </button>

            <input
              value={this.state.searchValue}
              onChange={(evt) =>
                this.setState({ searchValue: evt.target.value })
              }
              className={style.input}
              type="text"
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </>
    );
  }
}

export default Searchbar;
