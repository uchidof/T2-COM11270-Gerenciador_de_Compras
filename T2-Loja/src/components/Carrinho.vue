<template>
    <Painel titulo="Carrinho" roxo :notificacao="carrinho.length">
        <div class="carrinho">
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço Unitário</th>
                        <th>Qtde</th>
                        <th>Excluir?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="produto in carrinho" :key="produto.codigo">
                        <td>{{ produto.codigo }}</td>
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.descricao}}</td>
                        <td>{{ produto.precoUni | dinheiro }}</td>
                        <td>{{ produto.quantidade }}</td>
                        <td><button @click="subCart(produto)">Excluir</button></td>
                    </tr>
                </tbody>
            </table>
            <hr>
            <div class="total">
                <span>Total: <strong>{{ total | dinheiro }}</strong></span>
            </div>
        </div>
    </Painel>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    props:{
        produto: Object
    },
    methods:{
        subCart(produto){
            this.$store.commit('subCart', produto)
        },
    },
    computed: {
        ...mapGetters({
            total: 'valorTotal'
        }),

        carrinho(){
            return this.$store.state.carrinho
        }
    },
}
</script>

<style>
    table {
        width: 100%;
    }

    td {
        border-top: 1px solid #EEE;
        width: 33%;
    }

    hr {
        margin-top: 30px;
    }

    .total {
        display: flex;
        justify-content: flex-end;
    }

    button{
       padding: 30px 30px;
    }
</style>