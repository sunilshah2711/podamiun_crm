<template>
    <div class="slds-context-bar">
        <div class="slds-context-bar__primary">
            <div class="slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click slds-no-hover">
            <div class="slds-context-bar__icon-action">
                <button class="slds-button slds-icon-waffle_container slds-context-bar__button" title="Description of the icon when needed">
                <svg class="logo" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 728.04 797">
                    <path
                        class="cls-1"
                        d="M502.86,22.45c-1.55,0-310.83-.06-312.35.12C116.74,25.11,57,87.1,57,161.56v.25c0,515.84-.51,520.06,1,524.2,3,73.77,63.58,133.44,138.09,133.44,76.21,0,138.21-62.41,138.21-139.11,0-.09,0-36.71,0-36.79V590.36H502.86C658.41,590.36,785,463,785,306.41S658.41,22.45,502.86,22.45Zm-1,262.7A22.19,22.19,0,0,1,524,307.41c0,10.11-7.24,22.24-24.82,22.24l-148.24.08-.09-44.58Zm1,272.22c-80.91,0-247.21-1.31-305.2,3.53-44.59,3.76-86.58,20.43-107.86,53.49V437.26C99,366.83,170.21,362.48,219,362.48l278.57-.28c50.72-3.51,86.94-29.86,107.49-67.57,41.57-76.3,19.68-180.6-63-236.06C661,77.55,752.18,181.44,752.18,306.41,752.18,444.79,640.34,557.37,502.86,557.37Z"
                        transform="translate(-56.93 -22.44)"
                    />
                </svg>
                </button>
            </div>
            </div>
        </div>
        <nav class="slds-context-bar__secondary" role="navigation">
            <ul class="slds-grid">
                <router-link to="/" custom v-slot="{ href, navigate, isActive }">
                    <li class="slds-context-bar__item" :class="[isActive && 'slds-is-active']">
                        <a :href="href" @click="navigate" class="slds-context-bar__label-action">
                            <span class="slds-truncate" title="Home">Contacts</span>
                        </a>
                    </li>
                </router-link>
                <!-- <router-link to="/contact-list" custom v-slot="{ href, navigate, isActive }">
                    <li class="slds-context-bar__item" :class="[isActive && 'slds-is-active']">
                        <a :href="href" @click="navigate" class="slds-context-bar__label-action">
                        <span class="slds-truncate" title="Menu Item">Contact Lists</span>
                        </a>
                    </li>
                </router-link> -->
                <router-link to="/campaigns" custom v-slot="{ href, navigate, isActive }">
                    <li class="slds-context-bar__item" :class="[isActive && 'slds-is-active']">
                        <a :href="href" @click="navigate" class="slds-context-bar__label-action">
                            <span class="slds-truncate" title="Menu Item">Campaigns</span>
                        </a>
                    </li>
                </router-link>
                <router-link to="/automations" custom v-slot="{ href, navigate, isActive }">
                    <li class="slds-context-bar__item" :class="[isActive && 'slds-is-active']">
                        <a :href="href" @click="navigate" class="slds-context-bar__label-action">
                            <span class="slds-truncate" title="Menu Item">Automations</span>
                        </a>
                    </li>
                </router-link>
                <router-link to="/support" custom v-slot="{ href, navigate, isActive }">
                    <li class="slds-context-bar__item" :class="[isActive && 'slds-is-active']">
                        <a :href="href" @click="navigate" class="slds-context-bar__label-action">
                            <span class="slds-truncate" title="Menu Item">Chat with Support</span>
                        </a>
                    </li>
                </router-link>
                <li class="slds-is-open slds-context-bar__item slds-context-bar__dropdown-trigger slds-dropdown-trigger slds-dropdown-trigger_click">
                    <Menu>
                        <MenuButton class="slds-context-bar__label-action nav-dropdown-btn" title="Menu Item">
                            <span class="slds-truncate" title="Menu Item">More</span>
                        </MenuButton>
                        <div class="slds-context-bar__icon-action slds-p-left_none">
                            <button class="slds-button slds-button_icon slds-button_icon slds-context-bar__button" aria-haspopup="true" title="Open menu item submenu">
                                <svg class="slds-button__icon" aria-hidden="true">
                                    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevrondown"></use>
                                </svg>
                            </button>
                        </div>
                        <MenuItems class="slds-dropdown slds-dropdown_left">
                            <ul class="slds-dropdown__list" role="menu">
                                <MenuItem>
                                    <li class="slds-dropdown__item" role="presentation">
                                        <a href="/" role="menuitem">
                                            <span class="slds-truncate" title="Menu Item One">Templates</span>
                                        </a>
                                    </li>
                                </MenuItem>
                                <MenuItem>
                                    <li class="slds-dropdown__item" role="presentation">
                                        <a href="/sender" role="menuitem">
                                            <span class="slds-truncate" title="Menu Item Two">Senders</span>
                                        </a>
                                    </li>
                                </MenuItem>
                                <MenuItem>
                                    <li class="slds-dropdown__item" role="presentation">
                                        <a href="/" role="menuitem">
                                            <span class="slds-truncate" title="Menu Item Three">Image Library</span>
                                        </a>
                                    </li>
                                </MenuItem>
                            </ul>
                        </MenuItems>
                    </Menu>
                </li>
            </ul>
        </nav>
        <div class="slds-context-bar__trenery">
            <ul class="slds-global-actions">
                <li class="slds-global-actions__item">
                    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
                        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__help slds-global-actions__item-action" aria-haspopup="true" title="Help and Training">
                        <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#announcement"></use>
                        </svg>
                        <span class="slds-assistive-text">Announcement</span>
                        </button>
                    </div>
                </li>
                <li class="slds-global-actions__item">
                    <div class="slds-dropdown-trigger slds-dropdown-trigger_click">
                        <button class="slds-button slds-button_icon slds-button_icon slds-button_icon-container slds-button_icon-small slds-global-actions__notifications slds-global-actions__item-action" title="no new notifications" aria-live="assertive" aria-atomic="true">
                        <svg class="slds-button__icon slds-global-header__icon" aria-hidden="true">
                            <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#notification"></use>
                        </svg>
                        <span class="slds-assistive-text">no new notifications</span>
                        </button>
                        <span aria-hidden="true" class="slds-notification-badge">0</span>
                    </div>
                </li>
                <li class="slds-global-actions__item">
                    <div class="slds-is-open slds-dropdown-trigger slds-dropdown-trigger_click">
                        <Menu>
                            <MenuButton class="slds-button slds-global-actions__avatar slds-global-actions__item-action" title="person name" aria-haspopup="true">
                                <span class="slds-avatar slds-avatar_circle slds-avatar_medium">
                                    <img alt="Person name" src="/assets/images/avatar2.jpg" title="User avatar" />
                                </span>
                            </MenuButton>

                            <MenuItems class="slds-dropdown slds-dropdown_right">
                                <ul class="slds-dropdown__list" role="menu" aria-label="Show More">
                                    <MenuItem>
                                        <li class="slds-dropdown__item" role="presentation">
                                            <a href="/" role="menuitem" tabindex="0">
                                                <span class="slds-truncate" title="Menu Item One">Profile</span>
                                            </a>
                                        </li>
                                    </MenuItem>
                                    <MenuItem>
                                        <li class="slds-dropdown__item" role="presentation">
                                            <a href="/admin" role="menuitem" tabindex="-1">
                                                <span class="slds-truncate" title="Menu Item Two">Admin</span>
                                            </a>
                                        </li>
                                    </MenuItem>
                                    <MenuItem>
                                        <li class="slds-dropdown__item" role="presentation">
                                            <a href="/workspace" role="menuitem" tabindex="-1">
                                                <span class="slds-truncate" title="Menu Item Three">Switch Workspace</span>
                                            </a>
                                        </li>
                                    </MenuItem>
                                    <MenuItem>
                                        <li class="slds-dropdown__item" role="presentation">
                                            <a href="/" role="menuitem" tabindex="-1">
                                                <span class="slds-truncate" title="Menu Item Four">Recycle Bin</span>
                                            </a>
                                        </li>
                                    </MenuItem>
                                    <MenuItem>
                                    <li class="slds-dropdown__item" role="presentation">
                                        <a href="/login" role="menuitem" tabindex="-1">
                                            <span class="slds-truncate" title="Menu Item Four">Log Out</span>
                                        </a>
                                    </li>
                                    </MenuItem>
                                </ul>
                            </MenuItems>
                        </Menu>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
    svg.logo{
        width: 24px;
        height: 24px;
    }
    .cls-1 {
        fill: #A85914;
    }
    .slds-context-bar{
        padding: 0 12px;
    }
    .slds-context-bar__trenery{
        display: flex;
        align-items: center;
    }
    .slds-global-actions{
        height: 100%;
    }
    .nav-dropdown-btn{
        border: none;
        background: transparent;
    }
</style>

<script setup>
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>