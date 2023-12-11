<template>
	<div id="app">
		<h1>Lojinha da UFES</h1>
		<div>			
			<Cadastro/>
			<Estoque />
			<Carrinho/>
		</div>
	</div>
</template>

<script>
//import Parametros from './components/Parametros'
import Cadastro from './components/Cadastro'
import Estoque from './components/Estoque'
import Carrinho from './components/Carrinho'
//import Resumo from './components/Resumo'

export default {
	name: 'app',
	components: { Cadastro, Estoque, Carrinho }
}
</script>

<style>
* {
	font-family: 'Oswald', sans-serif;
}

body {
	font-size: 2rem;
	background: linear-gradient(to right, rgb(0, 0, 0), rgb(39, 39, 39));
}

#app {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #FFF;
}

h1 {
	font-weight: 200;
	font-family: monospace;
}

.linha {
	display: flex;
}

button {
	font-size: 1.8rem;
	padding: 5px 15px;
	border-radius: 5px;
	color: #222;
	background-color: #FAFAFA;
	outline: none;
	border: none;
}
</style>
