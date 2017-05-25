// Backend may return image URLs from two different services -- Cloudinary or AWS
// If it's a Cloudinary image, we can apply image transformations
function getImageUrl(url, imageFormat) {
  // Check if is Cloudinary image URL
  if (url.includes('res.cloudinary.com/')) {
    // See: http://cloudinary.com/documentation/image_transformation_reference
    // example URL: https://res.cloudinary.com/hqrdtqlz0/image/upload/c_thumb,g_faces:center,z_0.75,h_80,w_80/facebook:162777260891158
    const separator = '/image/upload';
    const [url1, url2] = url.split(separator);

    return `${url1}${separator}/${imageFormat}/${url2}`;
  }

  // Default URL which doesn't support image transformations (probably from AWS)
  return url;
}

export default {
  getImageUrl
};
