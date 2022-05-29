<template>
  <h3>AWS Amplify - Vue Js Boldr Application</h3>
  <input type="email" v-model="email" placeholder="Email address" required />
  <button @click="subscribe">Subscribe</button>
  <h4>Subscribed Emails</h4>
  <div v-for="email in emails" :key="email.id">
    <h5>
      {{ email.email }}
    </h5>
  </div>
</template>

<script>
import { DataStore } from "@aws-amplify/datastore";
import { BOLDR } from "./models";

export default {
  name: "App",
  data: function () {
    return { email: "", emails: [] };
  },
  components: {},
  methods: {
    async subscribe() {
      const emails = await DataStore.query(BOLDR, (boldr) =>
        boldr.email("eq", this.email)
      );
      if (emails.length == 0) {
        await DataStore.save(
          new BOLDR({
            email: this.email,
          })
        );
         this.querySubscribeEmails();
         this.email = "";
      } else {
        alert("Email exists");
        this.email = "";
      }
    },
    async querySubscribeEmails() {
      const models = await DataStore.query(BOLDR);

      this.emails = models;
     
    },
  },
  mounted() {
    this.querySubscribeEmails();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
