<template>
  <Page>
    <ScrollView>
      <FlexboxLayout
        flexDirection="column"
        class="loginContainer"
        height="100%"
      >
        <HtmlView html="<div><h1>ADD A LEAD</h1></div>" class="title" />
        <StackLayout class="formContainer">
          <TextField
            hint="First Name"
            autocorrect="false"
            height="50"
            class="form-info"
            autofocus
          />
          <TextField hint="Last Name" height="50" class="form-info" autofocus />
          <TextField
            hint="Date of Birth"
            keyboardType="datetime"
            height="50"
            class="form-info"
            autofocus
          />
          <TextField
            hint="Zip Code"
            keyboardType="number"
            height="50"
            class="form-info"
            autofocus
          />
          <TextField
            hint="Email"
            keyboardType="email"
            height="50"
            class="form-info"
            autofocus
          />
          <TextField
            hint="Phone"
            keyboardType="phone"
            height="50"
            class="form-info"
            autofocus
          />
          <Button text="CONTINUE" @tap="login" class="btn-gold btn" />
        </StackLayout>
      </FlexboxLayout>
    </ScrollView>
  </Page>
</template>

<style scoped>
.form-info {
  margin: 0 20 10 20;
  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 25px;
  color: #d8d8d8;
  background: rgba(255, 255, 255, 0.15);
  padding-left: 10;
}
</style>
