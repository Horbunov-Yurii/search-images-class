import './App.css'
import Searchbar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import { Component } from 'react'

class App extends Component{
  state = {
    images: [{
      id: 1,
      webformatURL: "https://tse2.mm.bing.net/th/id/OIP.oS_FaCbNmjKrsgh0G5emaQHaF7?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
      tags: "picture"
    }, {
       id: 2,
      webformatURL: "https://i.pinimg.com/originals/82/3b/a1/823ba127b4d249ac98b259bf1cf780d7.jpg",
      tags: "picture"
    }],
  }

  handleSearchSubmit = (searchValue) => {
    console.log("отримали в APP", searchValue);
    
  }
  render(){
    return(
      <>
      <Searchbar onSubmit={this.handleSearchSubmit}/>
      <ImageGallery images={this.state.images}/>
      </>
    )
  }
}

export default App