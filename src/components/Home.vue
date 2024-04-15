<template>
  <Layout>
    <template #header>
      <Header></Header>
    </template>
    <template #resume>
      <Resume :total-amount="1000000" :amount="amount" />
    </template>
    <template #movements>
      <Movements />
    </template>
  </Layout>
</template>

<script>
import Layout from "./Layout.vue";
import Header from "./Header.vue";
import Resume from "./Resume/Index.vue";
import Movements from "./Movements.vue";

export default {
  components: {
    Layout,
    Header,
    Resume,
    Movements,
  },
  data() {
    return {
      amount: null,
    };
  },
};
</script>

<!-- //si no tiene ningun valor especifico va a deri ahorro total, cuandp ya tenga un nvalor especifico pues utilice la fecha que debe mostraR D4L MONTO SELECCIONDO. -->
