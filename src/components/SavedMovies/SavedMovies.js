import { withRouter } from "react-router";
import Search from "../Search/Search";
import MoviesList from "../MoviesList/MoviesList";

const testData = [
  {
    cover:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/651dca43-c7c8-41c1-b0e6-2c677f4733ef/600x900",
    title: "Если что-то случится, я люблю вас",
    like: true,
    duration: 12,
  },

  {
    cover:
      "https://upload.wikimedia.org/wikipedia/ru/2/27/Baoposter.jpg",
    title: "Бао",
    like: true,
    duration: 8,
  },

  {
    cover:
      "https://avatars.mds.yandex.net/get-ott/224348/2a00000162251916ca202d6a4216b799a90b/678x380",
    title: "Дом",
    like: true,
    duration: 93,
  },
];

function SavedMovies() {
  return (
    <>
      <Search />
      <MoviesList movies={testData} more={false} mode='delete' />
    </>
  );
}
export default withRouter(SavedMovies);
