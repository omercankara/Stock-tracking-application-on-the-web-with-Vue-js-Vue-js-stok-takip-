<template>
        <div>
                <appHeader></appHeader>
                <transition name="fade" mode="out-in">
                        <router-view></router-view>
                </transition>
                <appFooter></appFooter>
        </div>
</template>

<script>
import header from "./Shared/header.vue";
import footer from "./Shared/footer.vue";
import urunGiris from "./Components/productPurhcase.vue";
import urunList from "./Components/productList.vue";
import urunCikis from "./Components/productSell.vue";
export default {
        components: {
                appHeader: header,
                appFooter: footer,
                urunGiris: urunGiris,
                urunList: urunList,
                urunCikis: urunCikis,
        },
        created() {
                this.$store.dispatch("getTradeResult");
                this.$store.dispatch("initApp");
        },
};
</script>

<style >
body{
        background-color: rgba(189, 253, 226, 0.39);
}
.fade-enter{
        opacity:0;
}
.fade-enter-active{
        transition: opacity .3s ease;
}
.fade-leave{

}
.fade-leave-active{
  transition: opacity .3s ease;
  opacity:0;
}
</style>