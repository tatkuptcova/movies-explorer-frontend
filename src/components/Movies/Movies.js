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
    like: false,
    duration: 8,
  },

  {
    cover:
      "https://avatars.mds.yandex.net/get-ott/224348/2a00000162251916ca202d6a4216b799a90b/678x380",
    title: "Дом",
    like: true,
    duration: 93,
  },
  {
    cover:
      "https://upload.wikimedia.org/wikipedia/ru/a/a3/Piper_cartoon.jpg",
    title: "Песочник",
    like: false,
    duration: 6,
  },
  {
    cover:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW3UtXSD9lL-DuEantxZ7Dif5HNr2HaXDqlUm57lK9oAYK0IhpPOk4PbRBdNPcsoXBWb4&usqp=CAU",
    title: "Рождество Анжелы",
    like: true,
    duration: 30,
  },
  {
    cover:
      "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/efdc97d9-5174-49e1-80fc-09e83f4e37e6/300x450",
    title: "Лу",
    like: false,
    duration: 7,
  },
];

function Movies() {
  return (
    <>
      <Search />
      <MoviesList movies={testData} />
    </>
  );
}
export default withRouter(Movies);
