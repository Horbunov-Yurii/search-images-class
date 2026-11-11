const API_KEY = "55978789-34cee20f3e80b0b0a22936120";

export function fetchImages(searchValue, page = 1) {
  const params = new URLSearchParams({
    q: searchValue,
    page: page,
    key: API_KEY,
    image_type: "photo",
    orientation: "horizontal",
    per_page: 12,
  });

  const url = `https://pixabay.com/api/?${params}`;

  return fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }

      return res.json();
    })
    .then((res) => ({
      hits: res.hits,
      totalHits: res.totalHits,
    }));
}
