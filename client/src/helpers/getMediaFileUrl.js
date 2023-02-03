import { MEDIA_URL } from "constants/urls";

const getMediaFileUrl = (productId, mediaFilename) => {
  return `${MEDIA_URL}/product${productId}/${mediaFilename}`;
};

export default getMediaFileUrl;
