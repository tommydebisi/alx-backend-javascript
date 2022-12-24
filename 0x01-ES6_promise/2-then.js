export default function handleResponseFromAPI(promise) {
  return new Promise((fufilled, rejected) => {
    if (promise) {
      fufilled({
        status: 200,
        body: 'success',
      });
    } else {
      rejected(new Error());
    }
  }).then(() => console.log('Got a response from the API'));
}
