<template>
  <div>
    <h1>Hello Rivet</h1>
    <h2>Your account: {{ account }}</h2>
    <h2>Your ChainID: {{ ChainID }}</h2>
  </div>
</template>

<script>
import { onMounted, ref } from "@vue/runtime-core";
import Web3 from "web3";
export default {
  name: "HelloWorld",
  setup() {
    const account = ref(null);
    const ChainID = ref(null);
    onMounted(() => {
      loadBlockChainData();
    });

    const loadBlockChainData = async () => {
      const web3 = new Web3(
        Web3.givenProvider ||
          "https://b33d666174eb46be8eb0bccb3e1f03dd.eth.rpc.rivet.cloud/"
      );
      const chainId = await web3.eth.getChainId();
      ChainID.value = chainId;
      const accounts = await web3.eth.requestAccounts();
      account.value = accounts[0];
    };

    return { account, ChainID };
  },
};
</script>

<style scoped lang="scss">
h1 {
  font-size: 3em;
}
</style>
