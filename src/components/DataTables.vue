<template>
  <div class="right-panel">
    <table id="contacts" class="dataTable">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Date</th>
          <th>Action</th>
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
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-buttons/js/dataTables.buttons.js";
import "datatables.net-buttons/js/buttons.colVis.js";
import "datatables.net-buttons/js/buttons.flash.js";
import "datatables.net-buttons/js/buttons.html5.js";
import "datatables.net-buttons/js/buttons.print.js";
import $ from "jquery";
import axios from "axios"; //for api calling
export default {
  mounted() {
    //Web api calling for dynamic data and you can also use into your demo project
    axios.get("http://localhost:3001/users").then((res) => {
      this.users = res.data;
      $(document).ready(function () {
        $.noConflict();
        setTimeout(function () {
          $("#example").DataTable({
            pagingType: "full_numbers",
            pageLength: 5,
            processing: true,
            dom: "Bfrtip",
            buttons: ["copy", "csv", "print"],
          });
        }, 1000);
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
