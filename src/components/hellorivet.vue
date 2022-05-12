<template>
   <div>
     <h1>Hello Rivet</h1>
     <h2>Your account: {{account}}</h2>
   </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import Web3 from 'web3'
export default {
  name: "HelloWorld",
  setup(){
    const account = ref(null)
    onMounted(()=>{
        loadBlockChainData()
    })

    const loadBlockChainData = async ()=>{
            const web3 = new Web3('https://3ef2520cfadc409b99a02b68de8d25e3.eth.rpc.rivet.cloud/');
            const accounts = await web3.eth.getAccounts();
            account.value = accounts[0]
    }

    return {account}
  }
};
</script>

<style scoped lang="scss">
h1{
  font-size: 3em;
}
</style>
