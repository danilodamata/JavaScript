function contar() {
  var inicio = parseInt(document.getElementById('ni').value);
  var fim = parseInt(document.getElementById('nf').value);
  var passo = parseInt(document.getElementById('pas').value);
  var i = inicio;
  document.getElementById("res").innerHTML = i;
  console.log(i);
  i += passo;
  while (i < fim) {
    document.getElementById("res").innerHTML += ", " + i;
    console.log(i);
    i += passo;
  }



}