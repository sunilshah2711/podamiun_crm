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
                xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#section"
              ></use>
            </svg>
          </div>
        </div>
        <div class="slds-media__body">
          <h2 class="slds-card__header-title">
            <span>Section 80 by 20</span>
          </h2>
        </div>
        <div class="slds-action-box">
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
      <div class="slds-grid slds-gutters">
        <div class="slds-col slds-size_8-of-12">
          <Container
            group-name="1"
            :get-child-payload="Dropzone3"
            @drop="onDrop('items5', $event)"
            class="dragble-main"
            orientation="vertical"
          >
            <Draggable v-for="field in items5" :key="field.type">
              <div class="form-line">
                <div>
                  <div v-if="field.type === 'image'">
                    <Image :remove="removeContent3" />
                  </div>
                  <div v-if="field.type === 'text'">
                    <Text :remove="removeContent3" />
                  </div>
                  <div v-if="field.type === 'button'">
                    <Button :remove="removeContent3" />
                  </div>
                  <div v-if="field.type === 'divider'">
                    <Divider :remove="removeContent3" />
                  </div>
                  <div v-if="field.type === 'spacer'">
                    <Spacer :remove="removeContent3" />
                  </div>
                  <div v-if="field.type === 'social'">
                    <Socail :remove="removeContent3" />
                  </div>
                  <div v-if="field.type === 'unsubscribe'">
                    <Unsubscribe :remove="removeContent3" />
                  </div>
                </div>
              </div>
            </Draggable>
          </Container>
        </div>
        <div class="slds-col slds-size_4-of-12">
          <Container
            group-name="1"
            :get-child-payload="Dropzone4"
            @drop="onDrop('items6', $event)"
            class="dragble-main"
            orientation="vertical"
          >
            <Draggable v-for="field in items6" :key="field.type">
              <div class="form-line">
                <div>
                  <div v-if="field.type === 'image'">
                    <Image :remove="removeContent4" />
                  </div>
                  <div v-if="field.type === 'text'">
                    <Text :remove="removeContent4" />
                  </div>
                  <div v-if="field.type === 'button'">
                    <Button :remove="removeContent4" />
                  </div>
                  <div v-if="field.type === 'divider'">
                    <Divider :remove="removeContent4" />
                  </div>
                  <div v-if="field.type === 'spacer'">
                    <Spacer :remove="removeContent4" />
                  </div>
                  <div v-if="field.type === 'social'">
                    <Socail :remove="removeContent4" />
                  </div>
                  <div v-if="field.type === 'unsubscribe'">
                    <Unsubscribe :remove="removeContent4" />
                  </div>
                </div>
              </div>
            </Draggable>
          </Container>
        </div>
      </div>
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
import { Container, Draggable } from "vue3-smooth-dnd";
import { applyDrag } from "./utils/helpers";
import Image from "./Image.vue";
import Text from "./Text.vue";
import Button from "./Button.vue";
import Divider from "./Divider.vue";
import Spacer from "./Spacer.vue";
import Socail from "./Social.vue";
import Unsubscribe from "./Unsubscribe.vue";

const dropzone3 = [];
const dropzone4 = [];
export default {
  name: "section",
  props: {
    remove: Function,
  },
  components: {
    Container,
    Draggable,
    Image,
    Text,
    Button,
    Divider,
    Spacer,
    Socail,
    Unsubscribe,
  },
  data() {
    return {
      items5: [...dropzone3],
      items6: [...dropzone4],
    };
  },
  methods: {
    onDrop(collection, dropResult) {
      this[collection] = applyDrag(this[collection], dropResult);
    },
    Dropzone3(index) {
      return this.items5[index];
    },
    Dropzone4(index) {
      return this.items6[index];
    },
    removeContent3(index) {
      this.items5.splice(index, 1);
    },
    removeContent4(index) {
      this.items6.splice(index, 1);
    },
  },
};
</script>
