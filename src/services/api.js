const API_KEY = "55978789-34cee20f3e80b0b0a22936120";

export function fetchImages(searchValue, page = 1) {
  const url = `https://pixabay.com/api/?q=${searchValue}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
return fetch(url).then((res)=>res.json())
.then((res)=>res.hits)
}
