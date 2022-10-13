var btn = document.getElementById('rand_btn');
var result = document.getElementById('result');
var body = document.body;
var array = '0123456789ABCDEF';//ma hex
function RGBrandom(){
    var r = Math.floor(Math.random()*254);//chon mau red
    var g = Math.floor(Math.random()*254);//chon mau green
    var b = Math.floor(Math.random()*254);//chon mau blue
    
    //chuyen ma hex
    hex = array[Math.floor((r/16))]+ array[r%16] +array[Math.floor((g/16))]+ array[g%16]+array[Math.floor((b/16))]+ array[b%16];
    text = "#"+hex;
    return text;
}

btn.addEventListener('click',function(){
    text = RGBrandom();
    result.innerHTML = text + ` <button class="btn btn-default" type="button" id="copy_btn">Copy HEX code</button>`;
    body.style.backgroundColor = text;
    // btn.style.backgroundColor = text;
    body.style.backgroundImage='None';
    var copy_btn = document.getElementById('copy_btn');
    copy_btn.addEventListener('click',function(){
        navigator.clipboard.writeText(text);//sao chep ma hex
    })
})

//chon mau gradient ??
var gradient_btn = document.getElementById('gradient_btn');
gradient_btn.addEventListener('click',function(){
    color1 = RGBrandom();
    color2 = RGBrandom();
    body.style.backgroundImage = 'linear-gradient('+color1+','+color2+')';
})