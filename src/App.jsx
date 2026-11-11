// import "./App.css";
// import Searchbar from "./components/Searchbar/Searchbar";
// import ImageGallery from "./components/ImageGallery/ImageGallery";
// import { Component } from "react";
// import { fetchImages } from "./services/api";
// import Loader from "./components/Loader/Loader";
// import Button from "./components/Button/Button";
// import Modal from "./components/Modal/Modal";

// class App extends Component {
//   requestId = 0;
//   state = {
//     images: [],
//     loading: false,
//     page: 1,
//     searchValue: "",
//     largImage: "",
//     error: "",
//     hasMore: false,
//   };

//   handleCloseModal = () => {
//     this.setState({
//       largImage: "",
//     });
//   };

//   handleBigImage = (img) => {
//     this.setState({
//       largImage: img,
//     });
//   };

//   handleSearchSubmit = (searchValue) => {
//   const requestId = ++this.requestId;

//   this.setState({
//     loading: true,
//     error: "",
//     page: 1,
//     searchValue: searchValue,
//     images: [],
//   });

//   fetchImages(searchValue, 1)
//     .then((images) => {
//       if (requestId !== this.requestId) return;

//       this.setState({
//         images: images,
//       });
//     })
//     .catch((error) => {
//       if (requestId !== this.requestId) return;

//       console.error(error);

//       this.setState({
//         error: "Не вдалося завантажити зображення. Спробуйте ще раз.",
//       });
//     })
//     .finally(() => {
//       if (requestId !== this.requestId) return;

//       this.setState({
//         loading: false,
//       });
//     });
// };

//   handleLoadMore = () => {
//   const requestId = this.requestId;
//   const nextPage = this.state.page + 1;

//   this.setState({
//     loading: true,
//     error: "",
//   });

//   fetchImages(this.state.searchValue, nextPage)
//     .then((images) => {
//       if (requestId !== this.requestId) return;

//       this.setState((prev) => {
//         const newImages = images.filter(
//           (image) =>
//             !prev.images.some(
//               (prevImage) => prevImage.id === image.id
//             )
//         );

//         return {
//           images: [...prev.images, ...newImages],
//           page: nextPage,
//         };
//       });
//     })
//     .catch((error) => {
//       if (requestId !== this.requestId) return;

//       console.error(error);

//       this.setState({
//         error: "Не вдалося завантажити наступні зображення.",
//       });
//     })
//     .finally(() => {
//       if (requestId !== this.requestId) return;

//       this.setState({
//         loading: false,
//       });
//     });
// };

//   render() {
//     return (
//       <>
//         <Searchbar onSubmit={this.handleSearchSubmit} />
//         {this.state.loading && <Loader />}
//         {this.state.error && <p>{this.state.error}</p>}
//         <ImageGallery
//           images={this.state.images}
//           onClick={this.handleBigImage}
//         />
//         {!this.state.loading &&
//           !this.state.error &&
//           this.state.searchValue &&
//           this.state.images.length === 0 && (
//             <p>За вашим запитом нічого не знайдено.</p>
//           )}

//         {this.state.images.length > 0 && (
//           <Button onClick={this.handleLoadMore} disabled={this.state.loading} />
//         )}
//         {this.state.largImage && (
//           <Modal
//             onClick={this.handleBigImage}
//             largImage={this.state.largImage}
//             onClose={this.handleCloseModal}
//           />
//         )}
//       </>
//     );
//   }
// }

// export default App;

import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Component } from "react";
import { fetchImages } from "./services/api";
import Loader from "./components/Loader/Loader";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";

class App extends Component {
  requestId = 0;

  state = {
    images: [],
    loading: false,
    page: 1,
    searchValue: "",
    largImage: "",
    error: "",
    hasMore: false,
  };

  handleCloseModal = () => {
    this.setState({
      largImage: "",
    });
  };

  handleBigImage = (img) => {
    this.setState({
      largImage: img,
    });
  };

  handleSearchSubmit = (searchValue) => {
    const requestId = ++this.requestId;

    this.setState({
      loading: true,
      error: "",
      page: 1,
      searchValue: searchValue,
      images: [],
      hasMore: false,
    });

    fetchImages(searchValue, 1)
      .then((data) => {
        if (requestId !== this.requestId) return;

        this.setState({
          images: data.hits,
          hasMore: data.totalHits > data.hits.length,
        });
      })
      .catch((error) => {
        if (requestId !== this.requestId) return;

        console.error(error);

        this.setState({
          error: "Не вдалося завантажити зображення. Спробуйте ще раз.",
        });
      })
      .finally(() => {
        if (requestId !== this.requestId) return;

        this.setState({
          loading: false,
        });
      });
  };

  handleLoadMore = () => {
    if (this.state.loading || !this.state.hasMore) return;
    const requestId = this.requestId;
    const nextPage = this.state.page + 1;

    this.setState({
      loading: true,
      error: "",
    });

    fetchImages(this.state.searchValue, nextPage)
      .then((data) => {
        if (requestId !== this.requestId) return;

        this.setState((prev) => {
          const newImages = data.hits.filter(
            (image) =>
              !prev.images.some((prevImage) => prevImage.id === image.id),
          );

          const updatedImages = [...prev.images, ...newImages];

          return {
            images: updatedImages,
            page: nextPage,
            hasMore: updatedImages.length < data.totalHits,
          };
        });
      })
      .catch((error) => {
        if (requestId !== this.requestId) return;

        console.error(error);

        this.setState({
          error: "Не вдалося завантажити наступні зображення.",
        });
      })
      .finally(() => {
        if (requestId !== this.requestId) return;

        this.setState({
          loading: false,
        });
      });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit} />

        {this.state.loading && <Loader />}

        {this.state.error && <p>{this.state.error}</p>}

        <ImageGallery
          images={this.state.images}
          onClick={this.handleBigImage}
        />

        {!this.state.loading &&
          !this.state.error &&
          this.state.searchValue &&
          this.state.images.length === 0 && (
            <p>За вашим запитом нічого не знайдено.</p>
          )}

        {this.state.hasMore && (
          <Button onClick={this.handleLoadMore} disabled={this.state.loading} />
        )}

        {this.state.largImage && (
          <Modal
            onClick={this.handleBigImage}
            largImage={this.state.largImage}
            onClose={this.handleCloseModal}
          />
        )}
      </>
    );
  }
}

export default App;
