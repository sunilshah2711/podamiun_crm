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
        <div class="slds-tabs_default">
            <ul class="slds-tabs_default__nav" role="tablist">
                <li class="slds-tabs_default__item slds-is-active" title="Item One" role="presentation">
                    <a class="slds-tabs_default__link" href="#" role="tab" tabindex="0" aria-selected="true" aria-controls="tab-default-1" id="tab1">Contacts</a>
                </li>
            </ul>
        </div>
        <div>
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
    </div>
</template>