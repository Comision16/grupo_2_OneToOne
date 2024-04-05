document.getElementById('image').addEventListener('change', (e) => {
   document.getElementById('image-prev').setAttribute('src', URL.createObjectURL(e.target.files[0]));
});


async function onUpdateImageMainProduct(e, idProduct) {

    try {
        const data = new FormData();
        data.append("image", e.target.files[0])
        
        const response = await fetch(`http://localhost:3000/apis/images/${idProduct}/main`,{
            method: 'POST',
            body : data
        });

        const result = await response.json();
        console.log(result);
        document.getElementById('image-prev' + i).setAttribute('src', URL.createObjectURL(e.target.files[0]));

    } catch (error) {
        console.log(error)

    }
}

async function onAddImageProduct(e,i, idProduct) {

    console.log(i, idProduct);
    try {
        const data = new FormData();
        data.append("image", e.target.files[0])

        const response = await fetch(`http://localhost:3000/apis/images/${idProduct}`,{
            method: 'POST',
            body : data
        });

        const result = await response.json();

        console.log(result);
        document.getElementById('image-prev' + i).setAttribute('src', `/img/${result.image.file}`);
        document.getElementById('btn-trash' + i).hidden = false;        
        document.getElementById('label' + i).setAttribute('hidden',true);

        document.getElementById('btn-trash' + i).setAttribute('onclick',`onRemoveImageProduct(${i},${idProduct},${result.image.id})`);


        
    } catch (error) {
        console.log(error)
    }
    
}


async function onRemoveImageProduct(i, idProduct, idImage) {

    try {


        const response = await fetch(`http://localhost:3000/apis/images?idProduct=${idProduct}&idImage=${idImage}`,{
            method: 'DELETE',
        });

        const result = await response.json();

        console.log(result);
        document.getElementById('image-prev' + i).setAttribute('src', `/img/default.jpg`);
        document.getElementById('btn-trash' + i).hidden = true;        
        document.getElementById('label' + i).hidden = false;   

        
    } catch (error) {
        
    }
    
}