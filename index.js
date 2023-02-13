const apiKey = "47c5a2ba753eb8d288d94b6237d9666d";
let globalArray = [];

const webUI = (array) => {
  const mainContainer = document.getElementById("main-container");
  mainContainer.innerHTML = "";

  // console.log(array, "data"); // 確認data在console裡顯示什麼，發現顯示的是物件，不是array
  // 所以下一行使用data.results取得results的array
  array.forEach(({ title, poster_path }) => {
    mainContainer.innerHTML += `
            <section class="movieAll">
                <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="The ${title}'s poster">
                <h1>${title}</h1>
                </section>`;
  });

  //   const movieName = document.createElement("h1");
  //   const movieImg = document.createElement("div");
  //   movieImg.innerHTML = "<i class='movieImg'></i>";

  //   movieName.textContent = data.results[0].title;
  //   console.log(data.results[0].title);

  //   let resultsArray = data.map((element) => {
  //     return data.results;
  //   });

  //   container.appendChild(movieName);
};

const fetchTMDB = async () => {
  try {
    const fetchData = await fetch(
      //`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    );
    const jsonData = await fetchData.json();
    const movieData = jsonData;
    const { results } = movieData;
    globalArray = results;
    console.log(globalArray);
    webUI(globalArray);
  } catch (error) {
    console.log(error);
  }
};

fetchTMDB();

function searchMovies() {
  const searchKeyword = document.getElementById("search-keyword");
  //   console.log(searchKeyword.value);

  let showArray = globalArray.filter((item) => {
    return item.title.toLowerCase().includes(searchKeyword.value.toLowerCase());
  });

  // console.log(showArray);

  webUI(showArray);
}

function upTo8() {
  let upTo8Array = globalArray.filter((item) => {
    return item.vote_average >= 8;
  });
  console.log(upTo8Array);
  webUI(upTo8Array);
}

function upTo7() {
  let upTo7Array = globalArray.filter((item) => {
    return item.vote_average >= 7;
  });
  console.log(upTo7Array);
  webUI(upTo7Array);
}

function upTo6() {
  let upTo6Array = globalArray.filter((item) => {
    return item.vote_average >= 6;
  });
  console.log(upTo6Array);
  webUI(upTo6Array);
}

function less6() {
  let less6Array = globalArray.filter((item) => {
    return item.vote_average < 6;
  });
  console.log(less6Array);
  webUI(less6Array);
}

function reset() {
  let resetArray = globalArray.map((item) => {
    return item;
  });
  console.log(resetArray);
  webUI(resetArray);
}

// const webUIWindows = (array) => {
//   const mainContainer = document.getElementById("main-container");
//   mainContainer.innerHTML = "";

//   array.forEach(
//     ({
//       title,
//       poster_path,
//       release_date,
//       overview,
//       backdrop_path,
//       popularity,
//       vote_count,
//       vote_average,
//     }) => {
//       mainContainer.innerHTML += `
//             <section class="movieWindows">
//                 <h1>${title}</h1>
//                 <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="The ${title}'s poster">
//                 <p>Release Date: ${release_date}</p>
//                 <p>Overview: ${overview}</p>
//                 <p>Popularity: ${popularity}</p>
//                 <p>Vote Count: ${vote_count}</p>
//                 <p>Vote Average: ${vote_average}</p>
//                 <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" alt="The ${title}'s backdrop">
//             </section>
//         `;
//     }
//   );
// };
