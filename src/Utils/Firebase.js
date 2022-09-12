import storage from '@react-native-firebase/storage';

export const uploadImageToStorage = (path, imageName, call_back) => {
    let reference = storage().ref(imageName);
    let task = reference.putFile(path);

    task.then(() => {
        console.log('Image uploaded to the bucket!');
        call_back({
            status: 'success'
        })
    }).catch((e) => {

        call_back({
            status: 'error',
            error: e
        })
        console.log('uploading image error => ', e)
    });
}
