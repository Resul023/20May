
let pictureClik = document.getElementById('imgId')
let input = document.getElementById('inputId');
input.addEventListener('change',function(){

    [...this.files].forEach(file => {
        if(file.type.startsWith('image/')){
            let reader = new FileReader();

            reader.onload = function(){
                let box = document.createElement('div')
                box.style.margin = 10 +'px';
                box.style.position = 'relative'
                let img = document.createElement('img');
                img.setAttribute('src',reader.result);
                box.appendChild(img)
                
                let span = document.createElement('span')
                span.innerText = 'X';
                span.classList.add('span')
                box.appendChild(span)

                span.addEventListener('click',function(){
                    box.remove();
                })
                document.querySelector('.main').appendChild(box)
            }
            reader.readAsDataURL(file);
        }
        else{
            console.log('Format is not true');
        }
    });
})

pictureClik.addEventListener('click',function(){
    input.click();
})

