export const GlobalData = () => {
  return fetch("https://api.covid19api.com/summary", {
    method: "GET",
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
