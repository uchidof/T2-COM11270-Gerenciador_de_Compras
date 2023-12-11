import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        codigo: 0,
        nome:'',
        descricao:'',
        precoUni: 0,

        quantidade:1,

        produtos: [],
        carrinho: [],
    },
    getters:{
        valorTotal(state){
            return state.carrinho.map(p => p.quantidade * p.precoUni)
                .reduce((total, atual) => total + atual, 0)
        },
    },
    mutations:{
        adicionaProduto(state, payload){
            let existe = -1;
            const procura = state.produtos.find((p) => p.codigo === payload.codigo);
            if(procura != undefined){
                existe = payload.codigo
            } 
            if (existe == -1) {
                state.produtos.push(payload);
                //console.log('ARMAZENANDO PRODUTO...')
            }
        },

        addCart(state, payload) {
            const existingProduct = state.carrinho.find((p) => p.codigo === payload.codigo);
        
            if (existingProduct) {
              existingProduct.quantidade += payload.quantidade;
            } else {
              state.carrinho.push(payload);
            }
            //console.log('ADICIONOU AO CARRINHO');
        },

        subCart(state, payload){
            const existingProduct = state.carrinho.findIndex((p) => p.codigo === payload.codigo);
            //console.log('Produto para excluir:', 'POSICAO =', existingProduct);
            state.carrinho.splice(existingProduct,1)
            //console.log('EXCLUIU do CARRINHO');
        },

        subProd(state, payload){
            const prodEstoque = state.produtos.findIndex((p) => p.codigo === payload.codigo);
            state.produtos.splice(prodEstoque,1)
            const prodCart = state.carrinho.findIndex((p) => p.codigo === payload.codigo);
            state.carrinho.splice(prodCart,1)
            //console.log('ACABOU O ESTOQUE');
        },
        
        setCod(state, payLoad){
            state.codigo = payLoad
        }, 
        setNome(state, payLoad){
            state.nome = payLoad
        },
        setDesc(state, payLoad){
            state.descricao = payLoad
        },
        setPrecoUni(state, payLoad){
            state.precoUni = payLoad
        },
        setQtde(state, payLoad){
            state.quantidade = payLoad
        },
    },
    
})