<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import AuthHeader from "./AuthHeader.vue";
</script>

<template>
  <div class="right-panel">
    <!-- <table id="datatable">
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
    </table> -->
    <table
      id="datatable"
      class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols"
    >
      <thead>
        <tr class="slds-line-height_reset">
          <th class="slds-is-resizable slds-is-sortable slds-cell_action-mode">
            <a
              class="slds-th__action slds-text-link_reset"
              role="button"
              tabindex="0"
            >
              <div
                class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate"
              >
                <span class="slds-truncate">Name</span>
                <span class="slds-icon_container slds-icon-utility-arrowdown">
                  <svg
                    class="slds-icon slds-icon-text-default slds-is-sortable__icon"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="../assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                    ></use>
                  </svg>
                </span>
              </div>
            </a>
          </th>
          <th class="slds-is-resizable slds-is-sortable slds-cell_action-mode">
            <a
              class="slds-th__action slds-text-link_reset"
              role="button"
              tabindex="0"
            >
              <div
                class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate"
              >
                <span class="slds-truncate">Modify Date</span>
                <span class="slds-icon_container slds-icon-utility-arrowdown">
                  <svg
                    class="slds-icon slds-icon-text-default slds-is-sortable__icon"
                    aria-hidden="true"
                  >
                    <use
                      xlink:href="../assets/icons/utility-sprite/svg/symbols.svg#arrowdown"
                    ></use>
                  </svg>
                </span>
              </div>
            </a>
          </th>
          <th class="slds-is-resizable slds-is-sortable slds-cell_action-mode">
            <a
              class="slds-th__action slds-text-link_reset"
              role="button"
              tabindex="0"
            >
              <div
                class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate"
              >
                <span class="slds-truncate">Actions</span>
              </div>
            </a>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="slds-hint-parent"
          v-for="contact in contacts"
          :key="contact.id"
        >
          <p>{{ contacts }}</p>
          <td class="slds-cell_action-mode">
            <div class="slds-truncate">{{ contact.id }}</div>
          </td>
          <td class="slds-cell_action-mode">
            <div class="slds-truncate">{{ contact.name }}</div>
          </td>
          <td class="slds-cell_action-mode">
            <div
              class="slds-dropdown-trigger slds-dropdown-trigger_click slds-is-open"
            >
              <Menu>
                <MenuButton
                  class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  <svg class="slds-button__icon" aria-hidden="true">
                    <use
                      xlink:href="../assets/icons/utility-sprite/svg/symbols.svg#down"
                    ></use>
                  </svg>
                  <span class="slds-assistive-text">Show More</span>
                </MenuButton>
                <MenuItems class="slds-dropdown slds-dropdown_left">
                  <ul
                    class="slds-dropdown__list"
                    role="menu"
                    aria-label="Show More"
                  >
                    <MenuItem>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="#" role="menuitem" tabindex="0">
                          <span class="slds-truncate" title="Menu Item One"
                            >View</span
                          >
                        </a>
                      </li>
                    </MenuItem>
                    <MenuItem>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="#" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Two"
                            >Rename</span
                          >
                        </a>
                      </li>
                    </MenuItem>
                    <MenuItem>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="#" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Three"
                            >Delete</span
                          >
                        </a>
                      </li>
                    </MenuItem>
                    <MenuItem>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="#" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Three"
                            >Import via CSV</span
                          >
                        </a>
                      </li>
                    </MenuItem>
                    <MenuItem>
                      <li class="slds-dropdown__item" role="presentation">
                        <a href="#" role="menuitem" tabindex="-1">
                          <span class="slds-truncate" title="Menu Item Three"
                            >Import via Salesforce</span
                          >
                        </a>
                      </li>
                    </MenuItem>
                  </ul>
                </MenuItems>
              </Menu>
            </div>
          </td>
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
    axios
      .post("https://dev.podamium.com/api/v1/y9aslt6al/contacts", {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo0LCJ1c2VyX3V1aWQiOiJpOHA2bDY1anMiLCJlbWFpbCI6ImplbWlzaG1hbGF2aXlhMzVAZ21haWwuY29tIiwiaWF0IjoxNjUwMjY1NjYzLCJleHAiOjE2ODE4MDE2NjN9.HYgFeFLBHWN3sGzqBPyJ9eFFYlxbLPcmf88f6LA7ujg",
        },
        // body: JSON.stringify({
        //   query: "{boards(limit:1){id name}}",
        // }),
      })
      .then((res) => {
        this.contacts = res.data;
        setTimeout(() => {
          $("#datatable").DataTable({
            lengthMenu: [
              [5, 10, 25, 50, -1],
              [5, 10, 25, 50, "All"],
            ],
            paging: false,
            pageLength: 5,
            sDom: '<input type="text" id="myInputTextField">',
            dom: "Bfrtips",
            buttons: ["pdf", "csv", "excel"],
          });
        });
      });
    AuthHeader();
  },
  data: function () {
    return {
      contacts: [],
    };
  },
};
</script>
