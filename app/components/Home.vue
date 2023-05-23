<template>
  <Page>
    <ScrollView>
      <FlexboxLayout flexDirection="column" class="homeContainer">
        <HtmlView html="<div><h1>HOME</h1></div>" class="title" />
        <HtmlView html="<div><h1>WELCOME,<br/>DANIEL</h1></div>" class="title" />
        <Button text="ADD LEAD" class="btn-gold btn" @tap="nextPage"/>
      </FlexboxLayout>
    </ScrollView>
  </Page>
</template>

<script>
import Campaigns from "./Campaigns.vue"

export default {
  components: {
    Campaigns
  },
  data() {
    return {
    };
  },
  methods: {
    nextPage() {
      this.$navigateTo(Campaigns);
    },
  },
};
</script>

<style lang="scss" scoped>
.homeContainer {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.btn {
  margin-top: auto; /* This pushes the button to the bottom */
}
</style>
