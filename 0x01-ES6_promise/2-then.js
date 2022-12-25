export default function handleResponseFromAPI(promise) {
  const errMessage = 'Got a response from the API';
  const apiProm = new Promise((fufilled, rejected) => {
    if (promise) {
      fufilled({
        status: 200,
        body: 'success',
      });
    } else {
      rejected(new Error());
    }
  });

  return apiProm.then((fufilledObj) => fufilledObj)
    .catch((err) => err)
    .finally(() => console.log(errMessage));
}
