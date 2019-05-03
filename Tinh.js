function Tinh() {
    let So=parseInt(document.getElementById('Input').value);
    let sum = 0;
    if ( So < 0 || !So ){
        alert('Hay nhap lai so');
    } else {
        for ( i=1 ; i<=So ; i +=1 ){
            sum += i;
        }
        document.getElementById('ketqua').innerHTML=sum;
    }
}