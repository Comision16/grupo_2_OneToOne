document.getElementById('image').addEventListener('change', (e) => {
   document.getElementById('image-prev').setAttribute('src', URL.createObjectURL(e.target.files[0]));
});


function onChangeImage(i, e) {
    console.log(i);
    document.getElementById('image-prev' + i).setAttribute('src', URL.createObjectURL(e.target.files[0]));
}