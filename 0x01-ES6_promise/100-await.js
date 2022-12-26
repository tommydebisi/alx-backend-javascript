import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const uploadProm = await uploadPhoto();
    const createProm = await createUser();

    return {
      photo: uploadProm,
      user: createProm,
    };
  } catch (_err) {
    return {
      photo: null,
      user: null,
    };
  }
}
