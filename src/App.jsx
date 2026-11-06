import './App.css'
import Searchbar from './components/Searchbar/Searchbar'
import ImageGallery from './components/ImageGallery/ImageGallery'
import { Component } from 'react'
import { fetchImages } from './services/api'
import Loader from './components/Loader/Loader'
import Button from './components/Button/Button'
import Modal from './components/Modal/Modal'

class App extends Component{
  state = {
    images: [],
    loading: false,
    page: 1,
    searchValue: "",
    largImage: "",
  }


  handleBigImage = (img) => {
    console.log(img);
    
    this.setState({
      largImage: img,      
    })
  } 


  handleSearchSubmit = (searchValue) => {
    this.setState({
      loading: true,
      page: 1,
      searchValue: searchValue,
      images: [],
    })
      fetchImages(searchValue, 1).then((images) => {
        this.setState({
          images: images,
          loading: false,
        })
      })
  }

  handleLoadMore = () => {
  this.setState(
    (prev) => ({
      page: prev.page + 1,
      loading: true,
    }),
    () => {
      fetchImages(this.state.searchValue, this.state.page)
        .then((images) => {
          this.setState((prev) => ({
            images: [...prev.images, ...images],
            loading: false,
          }));
        });
    }
  );
};


  render(){
    return(
      <>
      <Searchbar onSubmit={this.handleSearchSubmit}/>
     { this.state.loading && <Loader/> }
      <ImageGallery images={this.state.images}/>
      {this.state.images.length > 0 && <Button onClick={this.handleLoadMore}/>}
     {this.state.largImage && <Modal onClick={this.handleBigImage} largImage={this.state.largImage}/>}
      </>
    )
  }
}

export default App