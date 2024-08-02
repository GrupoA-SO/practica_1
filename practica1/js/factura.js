var precio;
var cantidad;
var total;
productos=['Samsung', 'Xiaomi', 'Phonoe', 'Redmi'];
producto='Xioami Redmi';
precio=[299.99,100.99, 150.99, 89.99];
cantidad=[4,5,2,10];
total=precio*cantidad;
var texto='';
var el=document.getElementById('cost');
for(let i=0; i<productos.length;i++)
{
    texto+=productos[i]+' $'+(precio[i]*cantidad[i])+' ';
}
el.textContent=texto;
