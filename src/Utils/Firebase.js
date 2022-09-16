import storage from '@react-native-firebase/storage';

export const uploadImageToStorage = (path, imageName, call_back) => {
    let reference = storage().ref(path);
    let task = reference.putFile(imageName);

    task.then(() => {
        console.log('Image uploaded to the bucket!');

        reference.getDownloadURL().then((image_url) => {

            call_back({
                status: 'success',
                firebase_image_url: image_url
            })
        })
            .catch((error) => { throw error });
    }).catch((e) => {

        call_back({
            status: 'error',
            error: e
        })
        console.log('uploading image error => ', e)
    });
}
