export const imageData = () => {
   return fetch(
     "/index.json", {
        mode: 'no-cors'
     }
   )
     .then((response) => response.json())
     .then((response) => {
       console.log(response[0].galleryImages[0].image.source);
       return response[0];
     });
 };
 