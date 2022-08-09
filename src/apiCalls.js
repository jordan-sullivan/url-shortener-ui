export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => {
        if(response.ok){
         return response.json()
        } else {
          throw new Error("Something went wrong, please try again.")
        }
      })
}

export const postURL = (urlToPost) => {
  return fetch("http://localhost:3001/api/v1/urls", {
    method: "POST",
    body: JSON.stringify({
      long_url: urlToPost.urlToShorten,
      title: urlToPost.title
    }),
    headers:{
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    if(response.ok) {
      return response.json()
    } 
    else {
      throw new Error("Something went wrong, please try again.")
    }
  })
}