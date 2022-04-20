<template>
  <div class="right-panel">
    <div class="email-heidng">
      <h1>Campaign : Admin Campaign</h1>
    </div>
    <TabGroup>
      <div class="slds-tabs_default">
        <TabList>
          <ul class="slds-tabs_default__nav">
            <Tab class="left-tab-active" v-slot="{ selected }">
              <li
                class="slds-tabs_default__item"
                :class="[selected ? 'slds-is-active' : '']"
                title="Item One"
                role="presentation"
              >
                <a class="slds-tabs_default__link">Schedule</a>
              </li>
            </Tab>
            <Tab class="left-tab-active" v-slot="{ selected }">
              <li
                class="slds-tabs_default__item"
                :class="[selected ? 'slds-is-active' : '']"
                title="Item Two"
                role="presentation"
              >
                <a class="slds-tabs_default__link">Sent</a>
              </li>
            </Tab>
            <Tab class="left-tab-active" v-slot="{ selected }">
              <li
                class="slds-tabs_default__item"
                :class="[selected ? 'slds-is-active' : '']"
                title="Item Three"
                role="presentation"
              >
                <a class="slds-tabs_default__link">Bounced</a>
              </li>
            </Tab>
            <Tab class="left-tab-active" v-slot="{ selected }">
              <li
                class="slds-tabs_default__item"
                :class="[selected ? 'slds-is-active' : '']"
                title="Item One"
                role="presentation"
              >
                <a class="slds-tabs_default__link">Delivered</a>
              </li>
            </Tab>
            <Tab class="left-tab-active" v-slot="{ selected }">
              <li
                class="slds-tabs_default__item"
                :class="[selected ? 'slds-is-active' : '']"
                title="Item Two"
                role="presentation"
              >
                <a class="slds-tabs_default__link">Open</a>
              </li>
            </Tab>
            <Tab class="left-tab-active" v-slot="{ selected }">
              <li
                class="slds-tabs_default__item"
                :class="[selected ? 'slds-is-active' : '']"
                title="Item Three"
                role="presentation"
              >
                <a class="slds-tabs_default__link">Click</a>
              </li>
            </Tab>
          </ul>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div class="data-email-main">
              <div class="data-tabel-search">
                <div class="slds-form-element">
                  <div
                    class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left"
                  >
                    <svg
                      class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
                      aria-hidden="true"
                    >
                      <use
                        xlink:href="../assets/icons/utility-sprite/svg/symbols.svg#search"
                      ></use>
                    </svg>
                    <input
                      type="text"
                      placeholder="Search this list..."
                      class="slds-input"
                    />
                  </div>
                  <h2>Total: 3</h2>
                </div>
              </div>
              <table
                class="slds-table slds-table_cell-buffer slds-table_bordered slds-table_col-bordered"
                aria-label="Example table of Opportunities with vertical borders"
              >
                <thead>
                  <tr class="slds-line-height_reset">
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Opportunity Name">
                        Name
                      </div>
                    </th>
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Account Name">
                        Email
                      </div>
                    </th>
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Close Date">
                        Date &amp; Time
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="slds-hint-parent">
                    <th data-label="Opportunity Name" scope="row">
                      <div class="slds-truncate" title="Cloudhub">
                        <a href="#" tabindex="-1">Cloudhub</a>
                      </div>
                    </th>
                    <td data-label="Account Name">
                      <div class="slds-truncate" title="Cloudhub">
                        user@support.com
                      </div>
                    </td>
                    <td data-label="Close Date">
                      <div class="slds-truncate" title="4/14/2015">
                        4/14/2015
                      </div>
                    </td>
                  </tr>
                  <tr class="slds-hint-parent">
                    <th data-label="Opportunity Name" scope="row">
                      <div
                        class="slds-truncate"
                        title="Cloudhub + Anypoint Connectors"
                      >
                        <a href="#" tabindex="-1"
                          >Cloudhub + Anypoint Connectors</a
                        >
                      </div>
                    </th>
                    <td data-label="Account Name">
                      <div class="slds-truncate" title="Cloudhub">
                        admin@support.com
                      </div>
                    </td>
                    <td data-label="Close Date">
                      <div class="slds-truncate" title="4/14/2015">
                        4/14/2015
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="data-email-main">
              <div class="data-tabel-search">
                <div class="slds-form-element">
                  <div
                    class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left"
                  >
                    <svg
                      class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
                      aria-hidden="true"
                    >
                      <use
                        xlink:href="../assets/icons/utility-sprite/svg/symbols.svg#search"
                      ></use>
                    </svg>
                    <input
                      type="text"
                      placeholder="Search this list..."
                      class="slds-input"
                    />
                  </div>
                  <h2>Total: 3</h2>
                </div>
              </div>
              <table
                class="slds-table slds-table_cell-buffer slds-table_bordered slds-table_col-bordered"
                aria-label="Example table of Opportunities with vertical borders"
              >
                <thead>
                  <tr class="slds-line-height_reset">
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Opportunity Name">
                        Name
                      </div>
                    </th>
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Account Name">
                        Email
                      </div>
                    </th>
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Close Date">
                        Date &amp; Time
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="slds-hint-parent">
                    <th data-label="Opportunity Name" scope="row">
                      <div class="slds-truncate" title="Cloudhub">
                        <a href="#" tabindex="-1">Cloudhub</a>
                      </div>
                    </th>
                    <td data-label="Account Name">
                      <div class="slds-truncate" title="Cloudhub">
                        user@support.com
                      </div>
                    </td>
                    <td data-label="Close Date">
                      <div class="slds-truncate" title="4/14/2015">
                        4/14/2015
                      </div>
                    </td>
                  </tr>
                  <tr class="slds-hint-parent">
                    <th data-label="Opportunity Name" scope="row">
                      <div
                        class="slds-truncate"
                        title="Cloudhub + Anypoint Connectors"
                      >
                        <a href="#" tabindex="-1"
                          >Cloudhub + Anypoint Connectors</a
                        >
                      </div>
                    </th>
                    <td data-label="Account Name">
                      <div class="slds-truncate" title="Cloudhub">
                        admin@support.com
                      </div>
                    </td>
                    <td data-label="Close Date">
                      <div class="slds-truncate" title="4/14/2015">
                        4/14/2015
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="data-email-main">
              <div class="data-tabel-search">
                <div class="slds-form-element">
                  <div
                    class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left"
                  >
                    <svg
                      class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
                      aria-hidden="true"
                    >
                      <use
                        xlink:href="../assets/icons/utility-sprite/svg/symbols.svg#search"
                      ></use>
                    </svg>
                    <input
                      type="text"
                      placeholder="Search this list..."
                      class="slds-input"
                    />
                  </div>
                  <h2>Total: 3</h2>
                </div>
              </div>
              <table
                class="slds-table slds-table_cell-buffer slds-table_bordered slds-table_col-bordered"
                aria-label="Example table of Opportunities with vertical borders"
              >
                <thead>
                  <tr class="slds-line-height_reset">
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Opportunity Name">
                        Name
                      </div>
                    </th>
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Account Name">
                        Email
                      </div>
                    </th>
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Close Date">
                        Date &amp; Time
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="slds-hint-parent">
                    <th data-label="Opportunity Name" scope="row">
                      <div class="slds-truncate" title="Cloudhub">
                        <a href="#" tabindex="-1">Cloudhub</a>
                      </div>
                    </th>
                    <td data-label="Account Name">
                      <div class="slds-truncate" title="Cloudhub">
                        user@support.com
                      </div>
                    </td>
                    <td data-label="Close Date">
                      <div class="slds-truncate" title="4/14/2015">
                        4/14/2015
                      </div>
                    </td>
                  </tr>
                  <tr class="slds-hint-parent">
                    <th data-label="Opportunity Name" scope="row">
                      <div
                        class="slds-truncate"
                        title="Cloudhub + Anypoint Connectors"
                      >
                        <a href="#" tabindex="-1"
                          >Cloudhub + Anypoint Connectors</a
                        >
                      </div>
                    </th>
                    <td data-label="Account Name">
                      <div class="slds-truncate" title="Cloudhub">
                        admin@support.com
                      </div>
                    </td>
                    <td data-label="Close Date">
                      <div class="slds-truncate" title="4/14/2015">
                        4/14/2015
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="data-email-main">
              <div class="data-tabel-search">
                <div class="slds-form-element">
                  <div
                    class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left"
                  >
                    <svg
                      class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
                      aria-hidden="true"
                    >
                      <use
                        xlink:href="../assets/icons/utility-sprite/svg/symbols.svg#search"
                      ></use>
                    </svg>
                    <input
                      type="text"
                      placeholder="Search this list..."
                      class="slds-input"
                    />
                  </div>
                  <h2>Total: 3</h2>
                </div>
              </div>
              <table
                class="slds-table slds-table_cell-buffer slds-table_bordered slds-table_col-bordered"
                aria-label="Example table of Opportunities with vertical borders"
              >
                <thead>
                  <tr class="slds-line-height_reset">
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Opportunity Name">
                        Name
                      </div>
                    </th>
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Account Name">
                        Email
                      </div>
                    </th>
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Close Date">
                        Date &amp; Time
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="slds-hint-parent">
                    <th data-label="Opportunity Name" scope="row">
                      <div class="slds-truncate" title="Cloudhub">
                        <a href="#" tabindex="-1">Cloudhub</a>
                      </div>
                    </th>
                    <td data-label="Account Name">
                      <div class="slds-truncate" title="Cloudhub">
                        user@support.com
                      </div>
                    </td>
                    <td data-label="Close Date">
                      <div class="slds-truncate" title="4/14/2015">
                        4/14/2015
                      </div>
                    </td>
                  </tr>
                  <tr class="slds-hint-parent">
                    <th data-label="Opportunity Name" scope="row">
                      <div
                        class="slds-truncate"
                        title="Cloudhub + Anypoint Connectors"
                      >
                        <a href="#" tabindex="-1"
                          >Cloudhub + Anypoint Connectors</a
                        >
                      </div>
                    </th>
                    <td data-label="Account Name">
                      <div class="slds-truncate" title="Cloudhub">
                        admin@support.com
                      </div>
                    </td>
                    <td data-label="Close Date">
                      <div class="slds-truncate" title="4/14/2015">
                        4/14/2015
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="data-email-main">
              <div class="data-tabel-search">
                <div class="slds-form-element">
                  <div
                    class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left"
                  >
                    <svg
                      class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
                      aria-hidden="true"
                    >
                      <use
                        xlink:href="../assets/icons/utility-sprite/svg/symbols.svg#search"
                      ></use>
                    </svg>
                    <input
                      type="text"
                      placeholder="Search this list..."
                      class="slds-input"
                    />
                  </div>
                  <h2>Total: 3</h2>
                </div>
              </div>
              <table
                class="slds-table slds-table_cell-buffer slds-table_bordered slds-table_col-bordered"
                aria-label="Example table of Opportunities with vertical borders"
              >
                <thead>
                  <tr class="slds-line-height_reset">
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Opportunity Name">
                        Name
                      </div>
                    </th>
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Account Name">
                        Email
                      </div>
                    </th>
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Close Date">
                        Date &amp; Time
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="slds-hint-parent">
                    <th data-label="Opportunity Name" scope="row">
                      <div class="slds-truncate" title="Cloudhub">
                        <a href="#" tabindex="-1">Cloudhub</a>
                      </div>
                    </th>
                    <td data-label="Account Name">
                      <div class="slds-truncate" title="Cloudhub">
                        user@support.com
                      </div>
                    </td>
                    <td data-label="Close Date">
                      <div class="slds-truncate" title="4/14/2015">
                        4/14/2015
                      </div>
                    </td>
                  </tr>
                  <tr class="slds-hint-parent">
                    <th data-label="Opportunity Name" scope="row">
                      <div
                        class="slds-truncate"
                        title="Cloudhub + Anypoint Connectors"
                      >
                        <a href="#" tabindex="-1"
                          >Cloudhub + Anypoint Connectors</a
                        >
                      </div>
                    </th>
                    <td data-label="Account Name">
                      <div class="slds-truncate" title="Cloudhub">
                        admin@support.com
                      </div>
                    </td>
                    <td data-label="Close Date">
                      <div class="slds-truncate" title="4/14/2015">
                        4/14/2015
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPanel>
          <TabPanel>
            <div class="data-email-main">
              <div class="data-tabel-search">
                <div class="slds-form-element">
                  <div
                    class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left"
                  >
                    <svg
                      class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
                      aria-hidden="true"
                    >
                      <use
                        xlink:href="../assets/icons/utility-sprite/svg/symbols.svg#search"
                      ></use>
                    </svg>
                    <input
                      type="text"
                      placeholder="Search this list..."
                      class="slds-input"
                    />
                  </div>
                  <h2>Total: 3</h2>
                </div>
              </div>
              <table
                class="slds-table slds-table_cell-buffer slds-table_bordered slds-table_col-bordered"
                aria-label="Example table of Opportunities with vertical borders"
              >
                <thead>
                  <tr class="slds-line-height_reset">
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Opportunity Name">
                        Name
                      </div>
                    </th>
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Account Name">
                        Email
                      </div>
                    </th>
                    <th class="" scope="col">
                      <div class="slds-truncate" title="Close Date">
                        Date &amp; Time
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="slds-hint-parent">
                    <th data-label="Opportunity Name" scope="row">
                      <div class="slds-truncate" title="Cloudhub">
                        <a href="#" tabindex="-1">Cloudhub</a>
                      </div>
                    </th>
                    <td data-label="Account Name">
                      <div class="slds-truncate" title="Cloudhub">
                        user@support.com
                      </div>
                    </td>
                    <td data-label="Close Date">
                      <div class="slds-truncate" title="4/14/2015">
                        4/14/2015
                      </div>
                    </td>
                  </tr>
                  <tr class="slds-hint-parent">
                    <th data-label="Opportunity Name" scope="row">
                      <div
                        class="slds-truncate"
                        title="Cloudhub + Anypoint Connectors"
                      >
                        <a href="#" tabindex="-1"
                          >Cloudhub + Anypoint Connectors</a
                        >
                      </div>
                    </th>
                    <td data-label="Account Name">
                      <div class="slds-truncate" title="Cloudhub">
                        admin@support.com
                      </div>
                    </td>
                    <td data-label="Close Date">
                      <div class="slds-truncate" title="4/14/2015">
                        4/14/2015
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </TabPanel>
        </TabPanels>
      </div>
    </TabGroup>
  </div>
</template>

<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
</script>

<style scoped>
.email-heidng {
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: 500;
}
.data-email-main {
  margin-top: 10px;
}
</style>
