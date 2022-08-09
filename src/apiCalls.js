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

export const postURL = (urlData) => {
  return fetch("http://localhost:3001/api/v1/urls", {
    method: "POST",
    body: JSON.stringify({
      id: urlData.id,
      long_url: urlData.long_url,
      short_url: urlData.short_url,
      title: urlData.title
    }),
    headers:{
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    if(response.ok) {
      return response.json()
    } else {
      throw new Error("Something went wrong, please try again.")
    }
  })
}