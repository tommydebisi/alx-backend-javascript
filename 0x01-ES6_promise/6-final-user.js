import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const statusArr = [];
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((prom) => {
      prom.forEach((result) => {
        statusArr.push({
          status: result.status,
          value: result.status === 'fulfilled' ? result.value : result.reason,
        });
      });

      return statusArr;
    });
}
