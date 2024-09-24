const btn = document.querySelector(".submit_input")

btn.addEventListener("click", event => {
	event.preventDefault()
	let nome = document.querySelector("#nome")
	let wpp = document.querySelector("#wpp")
	let email = document.querySelector("#e-mail")
	let nome_menor = document.querySelector("#nome_menor")
	let idade = document.querySelector("#idade")
	idade = idade.value.match(/\d+/g)[0]
	let idade_query
	if (Number(idade) > 1 || !Number(idade)){
		idade_query = idade + " anos"
	} else if (idade) {
		idade_query = idade + " ano"
	}
	let medico = document.querySelector("#medico")
	let quando_comecou = document.querySelector("#options")
	let tempo = ""
	if (quando_comecou.value === "Nunca usou") {
		tempo = "Este é o seu primeiro óculos."
	} else if (quando_comecou.value === "Desde sempre") {
		tempo = "Sempre usou óculos."
	} else {
		let calc = Number(idade) - Number(quando_comecou.value)
		tempo = "Usa óculos há " + String(calc)
		if (calc > 1) {
			tempo += " anos"
		} else if (calc < 0) {
			tempo = "Não tenho certeza"
		} else {
			tempo += " ano"
		}
	}
	let texto = `Olá! Quero resgatar o meu cupom.%0A
Nome: ${nome.value}%0A
Telefone: ${wpp.value}%0A
E-mail: ${email.value}%0A
Nome do menor: ${nome_menor.value}%0A
Idade: ${idade_query}%0A
Médico: ${medico.value}%0A
Nome do menor: ${nome_menor.value}%0A
${tempo}`
	window.location.href = "https://wa.me/553598254687?text=" + texto
})

