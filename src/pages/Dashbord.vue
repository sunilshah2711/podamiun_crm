<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <svg
          class="logo"
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 728.04 797"
        >
          <path
            class="cls-1"
            d="M502.86,22.45c-1.55,0-310.83-.06-312.35.12C116.74,25.11,57,87.1,57,161.56v.25c0,515.84-.51,520.06,1,524.2,3,73.77,63.58,133.44,138.09,133.44,76.21,0,138.21-62.41,138.21-139.11,0-.09,0-36.71,0-36.79V590.36H502.86C658.41,590.36,785,463,785,306.41S658.41,22.45,502.86,22.45Zm-1,262.7A22.19,22.19,0,0,1,524,307.41c0,10.11-7.24,22.24-24.82,22.24l-148.24.08-.09-44.58Zm1,272.22c-80.91,0-247.21-1.31-305.2,3.53-44.59,3.76-86.58,20.43-107.86,53.49V437.26C99,366.83,170.21,362.48,219,362.48l278.57-.28c50.72-3.51,86.94-29.86,107.49-67.57,41.57-76.3,19.68-180.6-63-236.06C661,77.55,752.18,181.44,752.18,306.41,752.18,444.79,640.34,557.37,502.86,557.37Z"
            transform="translate(-56.93 -22.44)"
          />
        </svg>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <router-link to="/" custom v-slot="{ href, navigate, isActive }">
            <li class="nav-item">
              <a
                class="nav-link"
                :class="[isActive && 'active']"
                :href="href"
                @click="navigate"
              >
                Contacts
              </a>
            </li>
          </router-link>
          <router-link
            to="/campaigns"
            custom
            v-slot="{ href, navigate, isActive }"
          >
            <li class="nav-item">
              <a
                class="nav-link"
                :class="[isActive && 'active']"
                :href="href"
                @click="navigate"
              >
                Campaigns
              </a>
            </li>
          </router-link>
          <router-link
            to="/automations"
            custom
            v-slot="{ href, navigate, isActive }"
          >
            <li class="nav-item">
              <a
                class="nav-link"
                :class="[isActive && 'active']"
                :href="href"
                @click="navigate"
              >
                Automations
              </a>
            </li>
          </router-link>
          <router-link
            to="/automations"
            custom
            v-slot="{ href, navigate, isActive }"
          >
            <li class="nav-item">
              <a
                class="nav-link"
                :class="[isActive && 'active']"
                :href="href"
                @click="navigate"
              >
                Chat with Support
              </a>
            </li>
          </router-link>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="/">Templates</a></li>
              <li><a class="dropdown-item" href="/">Senders</a></li>
              <li><a class="dropdown-item" href="/">Image Library</a></li>
            </ul>
          </li>
        </ul>
        <div class="d-flex">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Profile
            </button>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton1"
            >
              <li><a class="dropdown-item" href="/">Profile</a></li>
              <li><a class="dropdown-item" href="/">Admin</a></li>
              <li><a class="dropdown-item" href="/">Switch Workspace</a></li>
              <li><a class="dropdown-item" href="/">Recycle Bin</a></li>
              <li><a class="dropdown-item" href="/">Log Out</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar-brand .logo {
  width: 24px;
  height: 24px;
}
</style>
