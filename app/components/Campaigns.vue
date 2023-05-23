<template>
  <Page>
    <ScrollView>
      <FlexboxLayout flexDirection="column" class="homeContainer">
        <HtmlView html="<div><h1>ADD LEAD</h1></div>" class="title" />
        <Button v-if="!showList" text="Campaings" @tap="showMe" class="test" />
        <ListPicker
          v-if="showList"
          :items="listOfItems"
          selectedIndex="0"
          @selectedIndexChange="selectedIndexChanged"
          class="campaignList"
        />
        <Button text="CONTINUE" class="btn-gold btn" @tap="nextPage" />
      </FlexboxLayout>
    </ScrollView>
  </Page>
</template>

<script>
import AddLead from "./AddLead.vue";
export default {
  components: {
    AddLead,
  },
  data() {
    return {
      listOfItems: ["test1", "test2", "test3", "test4", "test5", "test6"],
      showList: false,
    };
  },
  methods: {
    showMe() {
      this.showList = true;
    },
    nextPage() {
      this.$navigateTo(AddLead);
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
.campaigns {
  color: white;
  background: transparent;
}
.test {
  background-color: black;
}

.campaignList {
  height: 100;
  background-color: rgba(36, 34, 34, 0.523);
  font-size: 50;
  color: white;
}
</style>
