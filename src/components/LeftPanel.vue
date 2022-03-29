<script>
    export default {
        data () {
            return {
                items: [
                    { id:1, label: 'Unassigned'},
                    { id:2, label: 'Untouched' },
                    { id:3, label: 'Unread' },
                    { id:4, label: 'No Next Activity' },
                    { id:5, label: 'No Activity - All Time' },
                    { id:6, label: 'No Activity - Last 7 Days' },
                    { id:7, label: 'No Activity - Last 30 Days' },
                    { id:8, label: 'Some Activity - Last 7 Days' },
                    { id:9, label: 'Some Activity - Last 30 Days' },
                    { id:10, label: 'No Progress Updates - Last 7 Days' },
                    { id:11, label: 'No Progress Updates - Last 30 Days' },
                    { id:12, label: 'Close Date - This Month' },
                    { id:13, label: 'Close Date - This Quarter' },
                ],
                allSelected: false,
                itemIds: []
            }
        },
        methods: {
            selectAll: function() {
                this.itemIds = [];

                if (this.allSelected) {
                    for (item in this.items) {
                        this.itemIds.push(this.items[item].id.toString());
                    }
                }
            }
        },
    };
</script>

<template>
    <div class="left-panel">
        <TabGroup>
            <div class="slds-tabs_default">
                <TabList>
                    <ul class="slds-tabs_default__nav">
                        <Tab class="left-tab-active"  v-slot="{ selected }">
                            <li class="slds-tabs_default__item" :class="[selected ? 'slds-is-active' : '']" title="Item One" role="presentation">
                                <a class="slds-tabs_default__link">Filters</a>
                            </li>
                        </Tab>
                        <Tab class="left-tab-active"  v-slot="{ selected }">
                            <li class="slds-tabs_default__item" :class="[selected ? 'slds-is-active' : '']" title="Item Two" role="presentation">
                                <a class="slds-tabs_default__link">Groups</a>
                            </li>
                        </Tab>
                        <Tab class="left-tab-active" v-slot="{ selected }">
                            <li class="slds-tabs_default__item" :class="[selected ? 'slds-is-active' : '']" title="Item Three" role="presentation">
                                <a class="slds-tabs_default__link">Columns</a>
                            </li>
                        </Tab>
                    </ul>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <div id="tab-default-1" class="slds-tabs_default__content slds-show">
                        <div class="slds-form-element" v-for="item in items" :key="item.id">
                            <div class="slds-form-element__control">
                                <div class="slds-checkbox">
                                    <input type="checkbox" name="options" :id="item.id" v-model="itemIds" :value="item.id"/>
                                    <label class="slds-checkbox__label" :for="item.id">
                                        <span class="slds-checkbox_faux"></span>
                                        <span class="slds-form-element__label">{{ item.label }}</span>
                                        <span class="slds-form-element__label check-filter" @click="selectAll">only this</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    </TabPanel>
                    <TabPanel>
                    <div id="tab-default-1" class="slds-tabs_default__content slds-show">
                        <div class="slds-form-element" v-for="item in items" :key="item.id">
                            <div class="slds-form-element__control">
                                <div class="slds-checkbox">
                                    <input type="checkbox" name="options" :id="item.id" v-model="itemIds" :value="item.id"/>
                                    <label class="slds-checkbox__label" :for="item.id">
                                        <span class="slds-checkbox_faux"></span>
                                        <span class="slds-form-element__label">{{ item.label }}</span>
                                        <span class="slds-form-element__label check-filter" @click="selectAll">only this</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    </TabPanel>
                </TabPanels>
                <div class="slds-tabs_default__content slds-hide">Item Two Content</div>
                <div class="slds-tabs_default__content slds-hide" >Item Three Content</div>
            </div>
        </TabGroup>
        <b-tabs 
            nav-wrapper-class="slds-tabs_default"
            nav-class="slds-tabs_default__nav"
            content-class="slds-tabs_default__content"
        >
            <b-tab active :title-item-class="{ 'slds-is-active' : active_el == 1, 'slds-tabs_default__item': defaultClass }">
                <template #title>
                    <a class="slds-tabs_default__link"  @click="activate(1)">Item One</a>
                </template>
            </b-tab>

            <b-tab :title-item-class="{ 'slds-is-active' : active_el == 2, 'slds-tabs_default__item': defaultClass}">
                <template #title>
                    <a class="slds-tabs_default__link"  @click="activate(2)">Item Two</a>
                </template>
            </b-tab>
        </b-tabs>
    </div>
</template>

<script setup>
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
</script>

<style>
    .left-panel{
        width: 25%;
        min-height: 100vh;
        max-height: 100%;
        background: #FFFFFF;
        border-radius: 5px;
        padding: 5px;
        margin: 12px;
        margin-bottom: 0;
        -webkit-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.02);
        -moz-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.02);
        box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.02);
    }
    .check-filter{
        visibility: hidden;
        transition: ease-in-out 0.3s;
    }
    .check-filter:hover{
        color: #A85914;
        text-decoration: underline;
    }
    .slds-checkbox__label:hover .check-filter{
        visibility: visible;
        cursor: pointer;
    }
    .left-tab-active{
        padding: 0;
        border: none;
        margin: 0;
        background: transparent;
    }
</style>