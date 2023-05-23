<template>
  <Page>
    <ScrollView>
      <FlexboxLayout
        flexDirection="column"
        class="loginContainer"
        height="100%"
      >
        <Image class="logo" :src="logo" height="200" alignSelf="flex-start" />
        <HtmlView
          html="<div><h1>CAMPAIGN<br/>MANAGEMENT<br/>PORTAL</h1></div>"
          class="title"
        />
        <StackLayout class="formContainer">
          <TextField
            v-model="email"
            hint="Email"
            keyboardType="email"
            autocorrect="false"
            height="50"
            class="login-info"
          />
          <TextField
            v-model="password"
            hint="Password"
            secure="true"
            height="50"
            class="login-info"
            autofocus
          />
          <Button text="Login" @tap="login" class="btn-gold btn" />
        </StackLayout>
      </FlexboxLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { logoUrl } from "./logoUrl";
import Home from "./Home.vue"

export default {
  components: {
    Home
  },
  data() {
    return {
      logo: logoUrl,
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$navigateTo(Home);
    },
  },
};
</script>

<style scoped lang="scss">
.logo {
  height: 200;
  float: left;
}
.loginContainer {
  height: 100%; /* Added height: 100% */
}
.login-info {
  margin: 0 20 10 20;
}


.formContainer {
  margin-top: 50;
}
</style>
