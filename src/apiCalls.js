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
