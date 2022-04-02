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
                        <span class="slds-truncate" title="Name">Senders</span>
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
                        <span class="slds-truncate" title="Account Name">Address</span>
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
                        <span class="slds-truncate" title="Close Date">Nickname</span>
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
                <th aria-label="Close Date" aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                    <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                    <span class="slds-assistive-text">Sort by: </span>
                    <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                        <span class="slds-truncate" title="Close Date">Verified</span>
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
                <th aria-label="Close Date" aria-sort="none" class="slds-is-resizable slds-is-sortable slds-cell_action-mode" scope="col">
                    <a class="slds-th__action slds-text-link_reset" href="#" role="button" tabindex="0">
                    <span class="slds-assistive-text">Sort by: </span>
                    <div class="slds-grid slds-grid_vertical-align-center slds-has-flexi-truncate">
                        <span class="slds-truncate" title="Close Date">Action</span>
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
                    <div class="slds-truncate">
                        <div><span class="slds-badge slds-theme_success slds-m-bottom_small">From</span> admin@podamium.com</div>
                        <div><span class="slds-badge slds-badge_inverse">Reply</span> manger@podamium.com</div>
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
                    <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 1,200 Widgets">
                    <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                    </svg>
                    <span class="slds-assistive-text">More actions for Acme - 1,200 Widgets</span>
                    </button>
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
                    <div class="slds-truncate">
                        <div><span class="slds-badge slds-theme_success slds-m-bottom_small">From</span> admin@podamium.com</div>
                        <div><span class="slds-badge slds-badge_inverse">Reply</span> manger@podamium.com</div>
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
                    <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for Acme - 200 Widgets">
                    <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                    </svg>
                    <span class="slds-assistive-text">More actions for Acme - 200 Widgets</span>
                    </button>
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
                    <div class="slds-truncate">
                        <div><span class="slds-badge slds-theme_success slds-m-bottom_small">From</span> admin@podamium.com</div>
                        <div><span class="slds-badge slds-badge_inverse">Reply</span> manger@podamium.com</div>
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
                    <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-haspopup="true" tabindex="0" title="More actions for salesforce.com - 1,000 Widgets">
                    <svg class="slds-button__icon slds-button__icon_hint slds-button__icon_small" aria-hidden="true">
                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#down"></use>
                    </svg>
                    <span class="slds-assistive-text">More actions for salesforce.com - 1,000 Widgets</span>
                    </button>
                </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>