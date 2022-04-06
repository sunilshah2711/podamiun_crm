<template>
    <div class="right-panel">
        <div class="data-tabel-search">
            <div class="slds-form-element">
                <div class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left">
                    <svg class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"></use>
                    </svg>
                    <input type="text" placeholder="Search this list..." class="slds-input" />
                </div>
                <h2>Total: 3</h2>
            </div>
            <button class="slds-button slds-button_brand" @click="isShowing = !isShowing">New</button>
        </div>
        <table aria-multiselectable="true" class="slds-table slds-table_bordered slds-table_fixed-layout slds-table_resizable-cols" role="grid" aria-label="Example advanced table of Opportunities in actionable mode">
            <thead>
                <tr class="slds-line-height_reset">
                <th class="slds-text-align_right slds-cell_action-mode" scope="col" style="width:3.25rem">
                    <span id="column-group-header" class="slds-assistive-text">Choose a row</span>
                    <div class="slds-th__action slds-th__action_form">
                    <div class="slds-checkbox">
                        <input type="checkbox" name="options" id="checkbox-unique-id-297" value="checkbox-unique-id-297" tabindex="0" aria-labelledby="check-select-all-label column-group-header" />
                        <label class="slds-checkbox__label" for="checkbox-unique-id-297" id="check-select-all-label">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label slds-assistive-text">Select All</span>
                        </label>
                    </div>
                    </div>
                </th>
                <th aria-label="Name" aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                    <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                    <span class="slds-assistive-text">Sort by: </span>
                    <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                        <span class="slds-truncate" title="Name">Name</span>
                        <span class="slds-icon_container slds-icon-utility-arrowdown">
                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                        </svg>
                        </span>
                    </div>
                    </a>
                    <div class="slds-resizable">
                    <input type="range" aria-label="Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-540" max="1000" min="20" tabindex="0" />
                    <span class="slds-resizable__handle">
                        <span class="slds-resizable__divider"></span>
                    </span>
                    </div>
                </th>
                <th aria-label="Account Name" aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                    <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                    <span class="slds-assistive-text">Sort by: </span>
                    <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                        <span class="slds-truncate" title="Account Name">Account Name</span>
                        <span class="slds-icon_container slds-icon-utility-arrowdown">
                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                        </svg>
                        </span>
                    </div>
                    </a>
                    <div class="slds-resizable">
                    <input type="range" aria-label="Account Name column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-541" max="1000" min="20" tabindex="0" />
                    <span class="slds-resizable__handle">
                        <span class="slds-resizable__divider"></span>
                    </span>
                    </div>
                </th>
                <th aria-label="Close Date" aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                    <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                    <span class="slds-assistive-text">Sort by: </span>
                    <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                        <span class="slds-truncate" title="Close Date">Close Date</span>
                        <span class="slds-icon_container slds-icon-utility-arrowdown">
                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                        </svg>
                        </span>
                    </div>
                    </a>
                    <div class="slds-resizable">
                    <input type="range" aria-label="Close Date column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-542" max="1000" min="20" tabindex="0" />
                    <span class="slds-resizable__handle">
                        <span class="slds-resizable__divider"></span>
                    </span>
                    </div>
                </th>
                <th aria-label="Stage" aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                    <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                    <span class="slds-assistive-text">Sort by: </span>
                    <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                        <span class="slds-truncate" title="Stage">Stage</span>
                        <span class="slds-icon_container slds-icon-utility-arrowdown">
                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                        </svg>
                        </span>
                    </div>
                    </a>
                    <div class="slds-resizable">
                    <input type="range" aria-label="Stage column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-543" max="1000" min="20" tabindex="0" />
                    <span class="slds-resizable__handle">
                        <span class="slds-resizable__divider"></span>
                    </span>
                    </div>
                </th>
                <th aria-label="Confidence" aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                    <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                    <span class="slds-assistive-text">Sort by: </span>
                    <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                        <span class="slds-truncate" title="Confidence">Confidence</span>
                        <span class="slds-icon_container slds-icon-utility-arrowdown">
                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                        </svg>
                        </span>
                    </div>
                    </a>
                    <div class="slds-resizable">
                    <input type="range" aria-label="Confidence column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-544" max="1000" min="20" tabindex="0" />
                    <span class="slds-resizable__handle">
                        <span class="slds-resizable__divider"></span>
                    </span>
                    </div>
                </th>
                <th aria-label="Contact" aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                    <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                    <span class="slds-assistive-text">Sort by: </span>
                    <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                        <span class="slds-truncate" title="Contact">Contact</span>
                        <span class="slds-icon_container slds-icon-utility-arrowdown">
                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                        </svg>
                        </span>
                    </div>
                    </a>
                    <div class="slds-resizable">
                    <input type="range" aria-label="Contact column width" class="slds-resizable__input slds-assistive-text" id="cell-resize-handle-546" max="1000" min="20" tabindex="0" />
                    <span class="slds-resizable__handle">
                        <span class="slds-resizable__divider"></span>
                    </span>
                    </div>
                </th>
                <th aria-label="Amount" aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                    <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                    <span class="slds-assistive-text">Sort by: </span>
                    <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                        <span class="slds-truncate" title="Amount">Actions</span>
                        <span class="slds-icon_container slds-icon-utility-arrowdown">
                        <svg class="slds-icon slds-icon-text-default slds-is-sortable__icon " aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#arrowdown"></use>
                        </svg>
                        </span>
                    </div>
                    </a>
                </th>
                </tr>
            </thead>
            <tbody>
                <tr aria-selected="false" class="slds-hint-parent">
                <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
                    <div class="slds-checkbox">
                    <input type="checkbox" name="options" id="checkbox-01" value="checkbox-01" tabindex="0" aria-labelledby="check-button-label-01 column-group-header" />
                    <label class="slds-checkbox__label" for="checkbox-01" id="check-button-label-01">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label slds-assistive-text">Select item 1</span>
                    </label>
                    </div>
                </td>
                <th class="slds-cell_action-mode" scope="row">
                    <div class="slds-truncate" title="Acme - 1,200 Widgets">
                    <a href="#" tabindex="0">Acme - 1,200 Widgets</a>
                    </div>
                </th>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="Acme">Acme</div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="4/10/15">4/10/15</div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="Value Proposition">Value Proposition</div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="30%">30%</div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="jrogers@acme.com">
                    <a href="#" tabindex="0">jrogers@acme.com</a>
                    </div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="$25,000,000"><button class="slds-button slds-button_outline-brand" @click="isShowing2 = !isShowing2">View</button></div>
                </td>
                </tr>
                <tr aria-selected="false" class="slds-hint-parent">
                <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
                    <div class="slds-checkbox">
                    <input type="checkbox" name="options" id="checkbox-02" value="checkbox-02" tabindex="0" aria-labelledby="check-button-label-02 column-group-header" />
                    <label class="slds-checkbox__label" for="checkbox-02" id="check-button-label-02">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label slds-assistive-text">Select item 2</span>
                    </label>
                    </div>
                </td>
                <th class="slds-cell_action-mode" scope="row">
                    <div class="slds-truncate" title="Acme - 200 Widgets">
                    <a href="#" tabindex="0">Acme - 200 Widgets</a>
                    </div>
                </th>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="Acme">Acme</div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="1/31/15">1/31/15</div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="Prospecting">Prospecting</div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="60%">60%</div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="bob@acme.com">
                    <a href="#" tabindex="0">bob@acme.com</a>
                    </div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="$5,000,000"><button class="slds-button slds-button_outline-brand" @click="isShowing2 = !isShowing2">View</button></div>
                </td>
                </tr>
                <tr aria-selected="false" class="slds-hint-parent">
                <td class="slds-text-align_right slds-cell_action-mode" role="gridcell">
                    <div class="slds-checkbox">
                    <input type="checkbox" name="options" id="checkbox-03" value="checkbox-03" tabindex="0" aria-labelledby="check-button-label-03 column-group-header" />
                    <label class="slds-checkbox__label" for="checkbox-03" id="check-button-label-03">
                        <span class="slds-checkbox_faux"></span>
                        <span class="slds-form-element__label slds-assistive-text">Select item 3</span>
                    </label>
                    </div>
                </td>
                <th class="slds-cell_action-mode" scope="row">
                    <div class="slds-truncate" title="salesforce.com - 1,000 Widgets">
                    <a href="#" tabindex="0">salesforce.com - 1,000 Widgets</a>
                    </div>
                </th>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="salesforce.com">salesforce.com</div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="1/31/15 3:45PM">1/31/15 3:45PM</div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="Id. Decision Makers">Id. Decision Makers</div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="70%">70%</div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="nathan@salesforce.com">
                    <a href="#" tabindex="0">nathan@salesforce.com</a>
                    </div>
                </td>
                <td class="slds-cell_action-mode" role="gridcell">
                    <div class="slds-truncate" title="$25,000"><button class="slds-button slds-button_outline-brand" @click="isShowing2 = !isShowin2">View</button></div>
                </td>
                </tr>
            </tbody>
        </table>
        <TransitionRoot
            :show="isShowing"
            enter="transition-opacity duration-75"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity duration-150"
            leave-from="opacity-100"
            leave-to="opacity-0"
        >
            <div class="campaign-sidebar-outer" @click="isShowing = !isShowing"></div>
        </TransitionRoot>
        <TransitionRoot
            :show="isShowing"
            enter="transition-opacity duration-75000"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity duration-150000"
            leave-from="opacity-100"
            leave-to="opacity-0"
        >
            <div class="campaign-sidebar-right">
                <div class="campaign-hedding">
                    <div class="campaign-hedding-wrap">
                        <h2>Email Campaign</h2>
                        <button @click="isShowing = !isShowing"><font-awesome-icon :icon="['fa', 'xmark']" /></button>
                    </div>
                </div>
                <div class="campaign-body">
                    <div class="slds-form-element">
                        <label class="slds-form-element__label" for="text-input-id-47">Campaign Name</label>
                        <div class="slds-form-element__control">
                            <input type="text" id="text-input-id-47" placeholder="Enter campaign Name" class="slds-input" />
                        </div>
                    </div>
                    <div class="slds-form-element">
                        <label class="slds-form-element__label" for="select-01">Email Template</label>
                        <div class="slds-form-element__control">
                            <div class="slds-select_container">
                                <select class="slds-select" id="select-01">
                                    <option value="">Select template</option>
                                    <option>Option One</option>
                                    <option>Option Two</option>
                                    <option>Option Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="slds-form-element">
                        <label class="slds-form-element__label" for="select-01">Sender</label>
                        <div class="slds-form-element__control">
                            <div class="slds-select_container">
                                <select class="slds-select" id="select-01">
                                    <option value="">Select sender</option>
                                    <option>Option One</option>
                                    <option>Option Two</option>
                                    <option>Option Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="slds-form-element">
                        <label class="slds-form-element__label" for="select-01">List</label>
                        <div class="slds-form-element__control">
                            <div class="slds-select_container">
                                <select class="slds-select" id="select-01">
                                    <option value="">Select list</option>
                                    <option>Option One</option>
                                    <option>Option Two</option>
                                    <option>Option Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="campaign-input-wrap">
                        <div class="slds-form-element">
                            <label class="slds-form-element__label" for="text-input-id-47">Send a test email</label>
                            <div class="slds-form-element__control">
                                <input type="text" id="text-input-id-47" placeholder="Enter email by separated comma" class="slds-input" />
                            </div>
                        </div>
                        <button class="slds-button slds-button_outline-brand">Send Now</button>
                    </div>
                    <div class="slds-form-element">
                        <label class="slds-form-element__label" for="text-input-id-47">Date &amp; Time</label>
                        <div class="slds-form-element__control">
                            <input type="datetime-local" id="text-input-id-47" placeholder="Enter campaign Name" class="slds-input" />
                        </div>
                    </div>
                </div>
                <div class="campaign-btn">
                    <button class="slds-button slds-button_brand">Cancel</button>
                    <button class="slds-button slds-button_outline-brand">Save As Draft</button>
                    <button class="slds-button slds-button_outline-brand">Activate</button>
                </div>
            </div>
        </TransitionRoot>
        
        <TransitionRoot
            :show="isShowing2"
            enter="transition-opacity duration-75"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity duration-150"
            leave-from="opacity-100"
            leave-to="opacity-0"
        >
            <div class="campaign-sidebar-outer" @click="isShowing2 = !isShowing2"></div>
        </TransitionRoot>
        <TransitionRoot
            :show="isShowing2"
            enter="transition-opacity duration-75000"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="transition-opacity duration-150000"
            leave-from="opacity-100"
            leave-to="opacity-0"
        >
            <div class="campaign-sidebar-right">
                <div class="campaign-hedding">
                    <div class="campaign-hedding-wrap">
                        <h2>Email Campaign</h2>
                        <button @click="isShowing2 = !isShowing2"><font-awesome-icon :icon="['fa', 'xmark']" /></button>
                    </div>
                </div>
                <div class="campaign-body">
                    <div class="slds-form-element">
                        <label class="slds-form-element__label" for="text-input-id-47">Campaign Name</label>
                        <div class="slds-form-element__control">
                            <input type="text" id="text-input-id-47" placeholder="Enter campaign Name" class="slds-input" />
                        </div>
                    </div>
                    <div class="slds-form-element">
                        <label class="slds-form-element__label" for="select-01">Email Template</label>
                        <div class="slds-chart-wrap">
                            <div class="slds-form-element__control">
                                <div class="slds-select_container">
                                    <select class="slds-select" id="select-01">
                                        <option value="">Select template</option>
                                        <option>Option One</option>
                                        <option>Option Two</option>
                                        <option>Option Three</option>
                                    </select>
                                </div>
                            </div>
                            <router-link to="/email-campaigns" custom v-slot="{ navigate }">
                                <button @click="navigate" class="slds-button slds-button_icon slds-button_icon-brand" title="Chart">
                                    <svg class="slds-button__icon" aria-hidden="true">
                                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chart"></use>
                                    </svg>
                                    <span class="slds-assistive-text">Chart</span>
                                </button>
                            </router-link>
                        </div>
                    </div>
                    <div class="slds-form-element">
                        <label class="slds-form-element__label" for="select-01">Sender</label>
                        <div class="slds-form-element__control">
                            <div class="slds-select_container">
                                <select class="slds-select" id="select-01">
                                    <option value="">Select sender</option>
                                    <option>Option One</option>
                                    <option>Option Two</option>
                                    <option>Option Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="slds-form-element">
                        <label class="slds-form-element__label" for="select-01">List</label>
                        <div class="slds-form-element__control">
                            <div class="slds-select_container">
                                <select class="slds-select" id="select-01">
                                    <option value="">Select list</option>
                                    <option>Option One</option>
                                    <option>Option Two</option>
                                    <option>Option Three</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="campaign-input-wrap">
                        <div class="slds-form-element">
                            <label class="slds-form-element__label" for="text-input-id-47">Send a test email</label>
                            <div class="slds-form-element__control">
                                <input type="text" id="text-input-id-47" placeholder="Enter email by separated comma" class="slds-input" />
                            </div>
                        </div>
                        <button class="slds-button slds-button_outline-brand">Send Now</button>
                    </div>
                    <div class="slds-form-element">
                        <label class="slds-form-element__label" for="text-input-id-47">Date &amp; Time</label>
                        <div class="slds-form-element__control">
                            <input type="datetime-local" id="text-input-id-47" placeholder="Enter campaign Name" class="slds-input" />
                        </div>
                    </div>
                </div>
                <div class="campaign-btn">
                    <button class="slds-button slds-button_brand">Cancel</button>
                    <button class="slds-button slds-button_outline-brand">Save As Draft</button>
                    <button class="slds-button slds-button_outline-brand">Activate</button>
                </div>
            </div>
        </TransitionRoot>
    </div>
</template>

<style scoped>
    .data-tabel-search{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .campaign-sidebar-outer{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 60%;
        height: 100%;
        background: rgba(0, 0, 0, 0.1);
        z-index: 10;
    }
    .campaign-sidebar-right{
        position: fixed;
        bottom: 0;
        right: 0;
        width: 40%;
        height: 100%;
        background: #fff;
        z-index: 10;
    }
    .campaign-hedding{
        padding: 10px 20px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }
    .campaign-hedding-wrap{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .campaign-hedding .campaign-hedding-wrap h2{
        font-size: 24px;
    }
    .campaign-hedding .campaign-hedding-wrap button{
        background: transparent;
        border: none;
        padding: 10px;
        margin: 0;
    }
    .campaign-hedding .campaign-hedding-wrap button svg{
        font-size: 18px;
        color: rgba(0, 0, 0, 0.1);
        transition: ease-in-out 0.3s;
    }
    .campaign-hedding .campaign-hedding-wrap button:hover svg{
        background: transparent;
        border: none;
        padding: 0;
        margin: 0;
        transition: ease-in-out 0.3s;
        color: rgba(0, 0, 0, 0.8);
    }
    .campaign-body{
        padding: 10px 20px;
    }
    .slds-form-element{
        margin-bottom: 12px;
    }
    .slds-form-element .slds-form-element__label{
        margin-bottom: 4px;
    }
    .campaign-input-wrap{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        width: 100%;
        margin-bottom: 12px;
    }
    .campaign-input-wrap .slds-form-element{
        width: 81%;
        margin-bottom: 0;
    }
    .campaign-btn{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        border-top: 1px solid rgba(0, 0, 0, 0.1);
        padding: 16px 20px;
    }
    .slds-chart-wrap{
        width: 100%;
        display: flex;
    }
    .slds-chart-wrap .slds-form-element__control{
        width: 100%;
    }
    .slds-chart-wrap button{
        margin-left: 5px;
    }
</style>

<script setup>
  import { ref } from 'vue'
  import { TransitionRoot } from '@headlessui/vue'

  const isShowing = ref(false)
  const isShowing2 = ref(false)
</script>