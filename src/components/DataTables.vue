<template>
  <div class="right-panel">
    <table id="datatable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Job Title</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.status }}</td>
          <td>{{ user.date }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    //API Call
    axios.get("http://localhost:3001/users").then((res) => {
      this.users = res.data;
      setTimeout(() => {
        $("#datatable").DataTable({
          lengthMenu: [
            [5, 10, 25, 50, -1],
            [5, 10, 25, 50, "All"],
          ],
          pageLength: 5,
        });
      });
    });
  },
  data: function () {
    return {
      users: [],
    };
  },
};
</script>
