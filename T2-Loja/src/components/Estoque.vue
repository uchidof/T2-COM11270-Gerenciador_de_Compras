<template>
    <Painel titulo="Estoque (Produtos Disponíveis)" azul :notificacao="produtos.length">
        <div class="carrinho">
            <table>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Preço Unitário</th>
                        <th>Comprar?</th>
                        <th>Excluir?</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="produto in produtos" :key="produto.codigo">
                        <td>{{ produto.codigo }}</td>
                        <td>{{ produto.nome }}</td>
                        <td>{{ produto.descricao}}</td>
                        <td>{{ produto.precoUni | dinheiro }}</td>
                        <td><button @click="addCart(produto)">Comprar</button></td>
                        <td><button @click="subProd(produto)">Excluir</button></td>
                    </tr>
                </tbody>
            </table>
            <hr>
        </div>
    </Painel>
</template>

<script>


export default {
    methods:{
        addCart(produto){
            const produtoNoCarrinho = {
                codigo: produto.codigo,
                nome: produto.nome,
                descricao: produto.descricao,
                precoUni: produto.precoUni,
                quantidade: produto.quantidade,
            };            
            console.log('Colocando no CARRINHO', produtoNoCarrinho),
            this.$store.commit('addCart',produtoNoCarrinho)
        },

        subProd(produto){
            this.$store.commit('subProd', produto)
        },

    },
    computed: {

        produtos(){
            return this.$store.state.produtos
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
        width: 10%;
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
