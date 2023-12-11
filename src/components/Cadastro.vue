<template>
    <Painel titulo="Cadastro" verde>
        <div class="loja">

            <div class="item"><span>Preencha as informações dos produtos:</span></div>

            
                <span>Código:</span><br>
                <input class="menorInput" type="number" v-model="codigo"><br><br>
                
                <span> Nome:</span> <br>
                <input type="text" v-model="nome"><br><br>
           
                <span>  Descrição:</span><br>
                <input type="text" class="inputText" v-model="descricao"><br><br>
            
                <span>  Preço Unitário:</span><br>
                <input class="menorInput" type="number" v-model="precoUni"> <br><br>
            

            <button @click="adicionar">Cadastrar</button>
        </div>
    </Painel>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    data() {
        return {
            sequencia: 1,
        }
    },
    methods: {
        ...mapActions(['colocarProduto']),
        adicionar() {
            const produto = {
                codigo: this.codigo,
                nome: this.nome,
                descricao: this.descricao,
                precoUni: this.precoUni,
                quantidade: this.quantidade,
            }
            //this.sequencia++
            console.log('CADASTRANDO PRODUTO:', produto.codigo, 'quant:', produto.quantidade)
            this.$store.commit('adicionaProduto', produto)
            console.log('CADASTROU')
        }
    },
    ///** 
    //v-model
    computed:{
        codigo:{
            get(){
                return this.$store.state.codigo
            },
            set(valor){
                this.$store.commit('setCod', valor)
            },
        },
        nome:{
            get(){
                return this.$store.state.nome
            },
            set(valor){
                this.$store.commit('setNome', valor)
            },
        },
        descricao:{
            get(){
                return this.$store.state.descricao
            },
            set(valor){
                this.$store.commit('setDesc', valor)
            },
        },
        precoUni:{
            get(){
                return this.$store.state.precoUni
            },
            set(valor){
                this.$store.commit('setPrecoUni', valor)
            },
        },
        quantidade:{
            get(){
                return this.$store.state.quantidade
            },
            set(valor){
                this.$store.commit('setQtde', valor)
            },
        },
    }
    //*/
}
</script>

<style>
    .loja {
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    .item{
        margin: 10px 0px 15px 0px;
    }

    input{
        font-size: 2rem;
        width: 300px;
    }

    .inputText{
        font-size: 2rem;
        width: 500px;
    }

    .menorInput{
        width: 150px;
    }

    .linha {
        display:flex;
        justify-content: center;
        margin: 10px 0px 15px 0px;
    }

    button{
       padding: 30px 30px;
    }
</style>
