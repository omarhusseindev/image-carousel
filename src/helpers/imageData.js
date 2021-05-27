export const imageData = () => {
    return fetch('https://cors-anywhere.herokuapp.com/http://dk-frontend-test.s3-eu-west-1.amazonaws.com/index.json')
     .then(response => response.json())
     .then((response) => {
        console.log(response[0].galleryImages[0].image.source)
      return response[0]
   })
};
