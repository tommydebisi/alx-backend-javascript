export default function getFullResponseFromAPI(success) {
  const errMessage = new Error('The fake API is not working currently');
  const apiProm = new Promise((res, rej) => {
    if (success) {
      res({
        status: 200,
        body: 'success',
      });
    } else {
      rej(errMessage);
    }
  });

  apiProm.catch(() => {});
  return apiProm;
}
