<template>
  <div class="login-screen">
    <div class="login-main">
      <svg
        class="login-logo"
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 728.04 797"
      >
        <path
          class="cls-1"
          d="M502.86,22.45c-1.55,0-310.83-.06-312.35.12C116.74,25.11,57,87.1,57,161.56v.25c0,515.84-.51,520.06,1,524.2,3,73.77,63.58,133.44,138.09,133.44,76.21,0,138.21-62.41,138.21-139.11,0-.09,0-36.71,0-36.79V590.36H502.86C658.41,590.36,785,463,785,306.41S658.41,22.45,502.86,22.45Zm-1,262.7A22.19,22.19,0,0,1,524,307.41c0,10.11-7.24,22.24-24.82,22.24l-148.24.08-.09-44.58Zm1,272.22c-80.91,0-247.21-1.31-305.2,3.53-44.59,3.76-86.58,20.43-107.86,53.49V437.26C99,366.83,170.21,362.48,219,362.48l278.57-.28c50.72-3.51,86.94-29.86,107.49-67.57,41.57-76.3,19.68-180.6-63-236.06C661,77.55,752.18,181.44,752.18,306.41,752.18,444.79,640.34,557.37,502.86,557.37Z"
          transform="translate(-56.93 -22.44)"
        />
      </svg>
      <h1>Welcome to <span>podamium</span></h1>
      <div>
        <h1>Is Initialized: {{ Vue3GoogleOauth.isInit }}</h1>
        <h1>Is Authorized: {{ Vue3GoogleOauth.isAuthorized }}</h1>
        <h2 v-if="user">Logged in user: {{ user }}</h2>
        <h2 v-if="code">Auth code: {{ code }}</h2>
        <button
          @click="
            handleSignIn();
            handleClickGetAuth();
          "
          :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized"
        >
          <font-awesome-icon :icon="['fab', 'google']" />Login with google
        </button>
        <button
          @click="
            handleSignIn();
            handleClickGetAuth();
          "
          :disabled="!Vue3GoogleOauth.isInit || Vue3GoogleOauth.isAuthorized"
        >
          <font-awesome-icon :icon="['fab', 'google']" />Register with google
        </button>
        <button
          @click="handleSignOut()"
          :disabled="!Vue3GoogleOauth.isAuthorized"
        >
          Sign Out
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import axios from "axios";

export default {
  name: "GoogleAuth",
  data() {
    return {
      user: "",
      code: "",
    };
  },
  methods: {
    async handleClickGetAuth() {
      try {
        const authCode = await this.$gAuth.getAuthCode();
        axios
          .post("https://dev.podamium.com/api/v1/auth/google/signin-callback", {
            headers: {
              "Content-Type": "application/json",
            },
            code: JSON.stringify(authCode),
          })
          .then((response) => {
            if (response.data.token) {
              localStorage.setItem("user", JSON.stringify(response.data.token));
              this.$router.push({
                name: "workspace",
                params: { authCode },
              });
            }
            return response.data;
          });
        console.log(JSON.stringify(authCode));
        this.code = authCode;
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    async handleSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        // console.log(this.$gAuth.signIn);
        if (!googleUser) {
          this.$router.push({ name: "login", query: { redirect: "/login" } });
          return null;
        }

        this.user = googleUser.getBasicProfile().getEmail();
        console.log(googleUser.getBasicProfile().getEmail());
      } catch (error) {
        console.log(error);
        return null;
      }
    },
    async handleSignOut() {
      try {
        await this.$gAuth.signOut();
        localStorage.removeItem("user");
        // console.log(this.$gAuth.signOut);
        this.user = "";
        this.code = "";
      } catch (error) {
        console.log(error);
      }
    },
  },
  setup() {
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");
    return {
      Vue3GoogleOauth,
    };
  },
};
</script>

<style>
.login-screen {
  height: 100vh;
  display: grid;
  place-items: center;
}
.login-main {
  width: 350px;
  height: auto;
  background: #ffffff;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.02);
  -moz-box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.02);
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.02);
  padding: 10px;
  text-align: center;
}
.login-logo {
  width: 64px;
  height: auto;
  margin: 15px 0;
}
.login-main h1 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}
.login-main button {
  width: 100%;
  padding: 10px;
  font-weight: 500;
  border-radius: 5px;
  margin-bottom: 20px !important;
  border: 2px solid #a85914;
  transition: ease-in-out 0.3s;
  background-color: #ffffff;
}
.login-main button svg {
  margin: 0 5px;
}
.login-main button:hover {
  background: #a85914;
  color: #ffffff;
}
</style>
