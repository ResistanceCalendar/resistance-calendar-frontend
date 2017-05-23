// NOTE: This is unused but will likely come back when we have a cloudinary/s3 hybrid service for images
function getImageUrl(url, imageFormat) {
  // See: http://cloudinary.com/documentation/image_transformation_reference
  // example URL: https://res.cloudinary.com/hqrdtqlz0/image/upload/c_thumb,g_faces:center,z_0.75,h_80,w_80/facebook:162777260891158
  const separator = '/image/upload';
  const [url1, url2] = url.split(separator);

  return `${url1}${separator}/${imageFormat}/${url2}`;
}

export default {
  getImageUrl
};
