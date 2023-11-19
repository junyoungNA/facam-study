export const uploadImage = async (image : File) => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload` 
    const formData = new FormData();

    formData.append('file', image);
    formData.append('upload_preset',process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!)
    formData.append('api_key',process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY!)
    formData.append('api_secret',process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET!)
    
    const response = await fetch(url, {
        method:'POST',
        body: formData,
    });

    const data = await response.json();
    console.log(data);
    return data.url;
}

export default uploadImage;