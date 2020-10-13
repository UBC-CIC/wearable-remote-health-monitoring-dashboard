import { Storage } from "aws-amplify";

export const retrieveImageService = async (key) => {
    const imageData = await Storage.get(key);
    return imageData;
}