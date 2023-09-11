//--------------------------------------------------------------------//
function exibe (){
    var nome = document.getElementById("nome").value; 
    var tel = document.getElementById("telefone").value;
    var cpf = document.getElementById("cpf").value;
    var cep = document.getElementById("cep").value;
    var numerocasa = document.getElementById("numerocasa").value;
    var CodVendedor = document.getElementById("CodVendedor").value;
    var numeroNFE = document.getElementById("numeroNFE").value;
    

        if (nome == "" || tel == "" || cpf == "" || cep == "" || numerocasa == "" || CodVendedor == "" || numeroNFE == "")
    {
        alert ("Por favor, preencha todos os campos obrigatórios (*)")

    } 
        else {
        alert ("Salvo com sucesso!");
		
      }
}
//---------------------------------------------------------------------//
document.addEventListener("DOMContentLoaded", function(){
    var sel1 = document.querySelector("select[id='idservico1']");
    var qtd1 = document.querySelector("input[name='quant1']");
    sel1.onchange = multi;
    qtd1.oninput = multi;	
	var sel2 = document.querySelector("select[id='idservico2']");
    var qtd2 = document.querySelector("input[name='quant2']");
    sel2.onchange = multi;
    qtd2.oninput = multi;	
	var sel3 = document.querySelector("select[id='idservico3']");
    var qtd3 = document.querySelector("input[name='quant3']");
    sel3.onchange = multi;
    qtd3.oninput = multi;	
    function multi(){
       var papel1 = parseFloat(sel1.value.replace(",","."));
       var quant1 = qtd1.value;
       var res1 = papel1 * quant1;
	   var papel2 = parseFloat(sel2.value.replace(",","."));
       var quant2 = qtd2.value;
       var res2 = papel2 * quant2;
	   var papel3 = parseFloat(sel3.value.replace(",","."));
       var quant3 = qtd3.value;
       var res3 = papel3 * quant3;	   
	   document.querySelector("input[name='valor1']").value = !isNaN(res1) ? res1.toFixed(2).replace(".", ",") : 0;
	   document.querySelector("input[name='valor2']").value = !isNaN(res2) ? res2.toFixed(2).replace(".", ",") : 0;
       document.querySelector("input[name='valor3']").value = !isNaN(res3) ? res3.toFixed(2).replace(".", ",") : 0;
       document.getElementById('final').innerHTML = (res1+res2+res3);
    }
 });
 //--------------------------------------------------------------
function limpa_formulário_cep() {
        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('uf').value=("");
        document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        document.getElementById('rua').value=(conteudo.logradouro);
        document.getElementById('bairro').value=(conteudo.bairro);
        document.getElementById('cidade').value=(conteudo.localidade);
        document.getElementById('uf').value=(conteudo.uf);
    }
    else {
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}
    
function pesquisacep(valor) {
    var cep = valor.replace(/\D/g, '');
    if (cep != "") {
        var validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)) {
            document.getElementById('rua').value="...";
            document.getElementById('bairro').value="...";
            document.getElementById('cidade').value="...";
            document.getElementById('uf').value="...";
            var script = document.createElement('script');
            script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';
            document.body.appendChild(script);

        }
        else {
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    }
    else {
        limpa_formulário_cep();
    }
};

$(document).ready(function(){
    $('.cpf').mask('000.000.000-00');
    $('.telefone').mask('(00) 00000-0000');
    $('.cep').mask('00000-000');
});