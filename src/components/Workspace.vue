<template>
  <div class="workspace-screen">
    <div class="workspace-main">
      <h1>Workspace</h1>
      <router-link to="/" custom v-slot="{ navigate }">
        <button @click="navigate">
          <font-awesome-icon :icon="['fa', 'file-lines']" />Test 1
        </button>
      </router-link>
      <button>
        <font-awesome-icon :icon="['fa', 'file-lines']" />Create new workspace
      </button>
    </div>
  </div>
</template>

<style>
.workspace-screen {
  height: 100vh;
  display: grid;
  place-items: center;
}
.workspace-main {
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
.workspace-main h1 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
}
.workspace-main button {
  width: 100%;
  padding: 10px;
  font-weight: 500;
  border-radius: 5px;
  margin-bottom: 20px !important;
  border: 2px solid #a85914;
  transition: ease-in-out 0.3s;
  background-color: #ffffff;
}
.workspace-main button svg {
  margin: 0 5px;
}
.workspace-main button:hover {
  background: #a85914;
  color: #ffffff;
}
</style>
