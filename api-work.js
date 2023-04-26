import axios from "axios";

const options = {
  method: "GET",
  url: "https://mystoreapi.com/catalog/categories",
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  const options = {
  method: 'GET',
  url: 'https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf',
  headers: {
    'content-type': 'application/octet-stream',
    'X-RapidAPI-Key': '1cb4e6dd79mshf632b3b12d5cc3bp18b3b9jsnbcef6b35b91e',
    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
  }
};

// Get the button element
const apiButton = document.getElementById("apiButton");

// Add a click event listener to the button
apiButton.addEventListener("click", () => {
  axios.request(options)
    .then(response => {
      const typeOf = response.data.typeOf;
      const typeOfElement = document.getElementById("typeOf");
      typeOfElement.textContent = typeOf;
    })
    .catch(error => {
      console.error(error);
    });
});

  .catch(function (error) {
    console.error(error);
  });
