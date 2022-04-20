<template>
  <div class="slds-card">
    <div class="slds-card__header slds-grid">
      <div
        class="slds-media slds-media_center slds-has-flexi-truncate slds-image-header-flex"
      >
        <div class="slds-image-header-box">
          <div class="slds-media__figure column-drag-handle">
            <svg
              class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
              aria-hidden="true"
            >
              <use
                xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#move"
              ></use>
            </svg>
          </div>
          <div class="slds-media__figure">
            <svg
              class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
              aria-hidden="true"
            >
              <use
                xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#display_text"
              ></use>
            </svg>
          </div>
        </div>
        <div class="slds-media__body">
          <h2 class="slds-card__header-title">
            <span>Text</span>
          </h2>
        </div>
        <div class="slds-action-box">
          <div class="slds-media__figure" @click="add(index)">
            <svg
              class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
              aria-hidden="true"
            >
              <use
                xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#copy"
              ></use>
            </svg>
          </div>
          <div class="slds-media__figure" @click="remove(index)">
            <svg
              class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
              aria-hidden="true"
            >
              <use
                xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#delete"
              ></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="slds-card__body slds-card__body_inner">
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
    </div>
  </div>
</template>

<style scoped>
.slds-image-header-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.slds-image-header-box {
  display: flex;
  align-items: center;
}
.slds-action-box {
  display: flex;
  align-items: center;
}
.slds-action-box .slds-media__figure {
  margin-right: 0;
  margin-left: 10px;
}
.slds-image-header-box .slds-media__figure svg {
  width: 24px;
}
.slds-action-box .slds-media__figure svg {
  width: 18px;
}
</style>

<script>
export default {
  name: "image",
  props: {
    remove: Function,
    add: Function,
  },
};
</script>
