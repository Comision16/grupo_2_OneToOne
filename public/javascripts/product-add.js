// VALIDACIONES PENDIENTES!!





// VISTA PREVIA DE IMÁGENES
const inputImage = document.getElementById('image');
const inputImages = document.getElementById('images');
const boxImage = document.getElementById('box-image');
const boxImages = document.getElementById('box-images');

inputImage.addEventListener('change', (e) => {
    boxImage.innerHTML = null;
    const img = document.createElement('img');
    img.setAttribute('src', URL.createObjectURL(e.target.files[0]));
    img.setAttribute('height', "200px") 
    boxImage.appendChild(img)
});

inputImages.addEventListener('change', (e) => {
    boxImages.innerHTML = null;

    for (let i = 0; i < e.target.files.length; i++) {
        const img = document.createElement('img');
        img.setAttribute('src', URL.createObjectURL(e.target.files[i]));
        img.setAttribute('width', "200px") 
        boxImages.appendChild(img)
    }

   
});