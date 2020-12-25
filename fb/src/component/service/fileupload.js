class Fileupload{
   async upload(file){
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "v3gp9stl");
        const result = await fetch(
        'https://api.cloudinary.com/v1_1/djuy3j2qd/image/upload',
        {
            method: 'POST',
            body: formData,
        }
        );
    return await result.json();

    };
};
export default Fileupload