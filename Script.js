
function changeBg(color){
    document.body.style.backgroundColor = color;

    var text = document.getElementsByClassName('text');

    if(color == '#000000'){
        
        for(let ele of text){
            ele.style.color = '#ffffff';
        }
    }
    else{
        for(let ele of text){
            ele.style.color = '#000000';
        }
    }

}