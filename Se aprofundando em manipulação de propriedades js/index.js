const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
  input.value = input.value =="" ? "Valor mudado!" : ""
})
document.getElementById('type').addEventListener('click', function(){
  input.type = input.type == "text" ? "radio" : "text"
})
document.getElementById('placeholder').addEventListener('click', function(){
  input.placeholder = input.placeholder == "" || null ? "Placeholder Mudado!" : ""
})
document.getElementById('disable').addEventListener('click', function(){
  input.disabled = input.disabled == true ? input.disabled = false : input.disabled = true
})
document.getElementById('data').addEventListener('click', function(){
  if(input.dataset.something == "Outro valor kkk"){
    alert("Para de me mudar doido!")
  }else{
    alert("O atributo data é: "+ input.dataset.something)
    input.dataset.something = "Outro valor kkk"
    alert("O atributo (data) foi mudado para: "+ input.dataset.something)
  }

  
  
})