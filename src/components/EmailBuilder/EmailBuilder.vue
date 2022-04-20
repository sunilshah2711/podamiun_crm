<template>
  <div class="slds-grid slds-gutters">
    <div class="slds-col slds-size_3-of-12">
      <div class="slds-box slds-box_x-small">
        <h2>Add block</h2>
        <Container
          behaviour="copy"
          group-name="1"
          :get-child-payload="DropSource1"
          class="source-main"
        >
          <Draggable
            v-for="field in items1"
            :key="field.type"
            class="source-drag-box"
          >
            <div class="source-drag-sub-box" v-if="field.type === 'image'">
              <div>
                <svg
                  class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
                  aria-hidden="true"
                >
                  <use
                    xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#image"
                  ></use>
                </svg>
                <h3>Image</h3>
              </div>
            </div>
            <div class="source-drag-sub-box" v-if="field.type === 'text'">
              <div>
                <svg
                  class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
                  aria-hidden="true"
                >
                  <use
                    xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#display_text"
                  ></use>
                </svg>
                <h3>Text</h3>
              </div>
            </div>
            <div class="source-drag-sub-box" v-if="field.type === 'button'">
              <div>
                <svg
                  class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
                  aria-hidden="true"
                >
                  <use
                    xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#button_choice"
                  ></use>
                </svg>
                <h3>Button</h3>
              </div>
            </div>
            <div class="source-drag-sub-box" v-if="field.type === 'divider'">
              <div>
                <svg
                  class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
                  aria-hidden="true"
                >
                  <use
                    xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#dash"
                  ></use>
                </svg>
                <h3>Divider</h3>
              </div>
            </div>
            <div class="source-drag-sub-box" v-if="field.type === 'spacer'">
              <div>
                <svg
                  class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
                  aria-hidden="true"
                >
                  <use
                    xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#spacer"
                  ></use>
                </svg>
                <h3>Spacer</h3>
              </div>
            </div>
            <div class="source-drag-sub-box" v-if="field.type === 'social'">
              <div>
                <svg
                  class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
                  aria-hidden="true"
                >
                  <use
                    xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#socialshare"
                  ></use>
                </svg>
                <h3>Social</h3>
              </div>
            </div>
            <div
              class="source-drag-sub-box"
              v-if="field.type === 'unsubscribe'"
            >
              <div>
                <svg
                  class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
                  aria-hidden="true"
                >
                  <use
                    xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#turn_off_notifications"
                  ></use>
                </svg>
                <h3>Unsubscribe</h3>
              </div>
            </div>
          </Draggable>
        </Container>
      </div>
      <div class="slds-box slds-box_x-small slds-add-section">
        <h2>Add Section</h2>
        <Container
          behaviour="copy"
          group-name="1"
          :get-child-payload="DropSource2"
          class="source-main"
        >
          <Draggable
            v-for="field in items2"
            :key="field.type"
            class="source-drag-box"
          >
            <div class="source-drag-sub-box" v-if="field.type === 'section1'">
              <div>
                <svg
                  class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
                  aria-hidden="true"
                >
                  <use
                    xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#section"
                  ></use>
                </svg>
                <h3>100 by 100</h3>
              </div>
            </div>
            <div class="source-drag-sub-box" v-if="field.type === 'section2'">
              <div>
                <svg
                  class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
                  aria-hidden="true"
                >
                  <use
                    xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#section"
                  ></use>
                </svg>
                <h3>50 by 50</h3>
              </div>
            </div>
            <div class="source-drag-sub-box" v-if="field.type === 'section4'">
              <div>
                <svg
                  class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
                  aria-hidden="true"
                >
                  <use
                    xlink:href="../../assets/icons/utility-sprite/svg/symbols.svg#section"
                  ></use>
                </svg>
                <h3>20 by 80</h3>
              </div>
            </div>
          </Draggable>
        </Container>
      </div>
    </div>
    <div class="slds-col slds-size_9-of-12 slds-p-left_none">
      <div class="slds-box slds-box_x-small">
        <Container
          group-name="1"
          :get-child-payload="Dropzone1"
          @drop="onDrop('items3', $event)"
          class="dragble-main"
          orientation="vertical"
          drag-handle-selector=".column-drag-handle"
        >
          <Draggable v-for="field in items3" :key="field.type">
            <div class="form-line">
              <div>
                <div v-if="field.type === 'image'">
                  <Image :remove="removeConten1" :add="addImg" />
                </div>
                <div v-if="field.type === 'text'">
                  <Text :remove="removeConten1" :add="addText" />
                </div>
                <div v-if="field.type === 'button'">
                  <Button :remove="removeConten1" :add="addButton" />
                </div>
                <div v-if="field.type === 'divider'">
                  <Divider :remove="removeConten1" :add="addDivider" />
                </div>
                <div v-if="field.type === 'spacer'">
                  <Spacer :remove="removeConten1" :add="addSpacer" />
                </div>
                <div v-if="field.type === 'social'">
                  <Socail :remove="removeConten1" :add="addSocial" />
                </div>
                <div v-if="field.type === 'unsubscribe'">
                  <Unsubscribe :remove="removeConten1" :add="addUnsubscribe" />
                </div>
                <div v-if="field.type === 'section1'">
                  <Section100 :remove="removeConten1" />
                </div>
                <div v-if="field.type === 'section2'">
                  <Section50 :remove="removeConten1" />
                </div>
                <div v-if="field.type === 'section4'">
                  <Section2080 :remove="removeConten1" />
                </div>
              </div>
            </div>
          </Draggable>
        </Container>
      </div>
    </div>
  </div>
</template>

<style scoped>
.source-main {
  display: flex;
  flex-wrap: wrap;
}
.source-drag-box {
  width: 33.33%;
  padding: 6px;
}
.slds-add-section {
  margin-top: 12px;
}
.source-drag-box .source-drag-sub-box {
  width: 100%;
  height: 100px;
  border-radius: 5px;
  border: 1px solid #e5e5e5;
  display: grid;
  place-items: center;
}
.source-drag-box .source-drag-sub-box div {
  text-align: center;
}
.source-drag-box .source-drag-sub-box div h3 {
  margin-top: 10px;
  margin-bottom: 0;
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
import Section100 from "./Section100.vue";
import Section50 from "./Section50.vue";
// import Section8020 from "./Section8020.vue";
import Section2080 from "./Section2080.vue";
// import Section33 from "./Section33.vue";

const dropsource1 = [
  { type: "image" },
  { type: "text" },
  { type: "button" },
  { type: "divider" },
  { type: "spacer" },
  { type: "social" },
  { type: "unsubscribe" },
];
const dropsource2 = [
  { type: "section1" },
  { type: "section2" },
  { type: "section4" },
];
const dropzone1 = [];
const dropzone2 = [];
export default {
  name: "email",
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
    Section100,
    Section50,
    Section2080,
  },
  data() {
    return {
      items1: [...dropsource1],
      items2: [...dropsource2],
      items3: [...dropzone1],
      items4: [...dropzone2],
    };
  },
  methods: {
    onDrop(collection, dropResult) {
      this[collection] = applyDrag(this[collection], dropResult);
    },
    DropSource1(index) {
      console.log(this.items1[index]);
      return this.items1[index];
    },
    DropSource2(index) {
      console.log(this.items2[index]);
      return this.items2[index];
    },
    Dropzone1(index) {
      console.log(this.items3[index]);
      return this.items3[index];
    },
    Dropzone2(index) {
      // console.log(this.items4[index]);
      return this.items4[index];
    },
    removeConten1(index) {
      this.items3.splice(index, 1);
    },
    removeContent2(index) {
      this.items4.splice(index, 1);
    },
    addImg() {
      this.items3.push({ type: "image" });
    },
    addText() {
      this.items3.push({ type: "text" });
    },
    addButton() {
      this.items3.push({ type: "button" });
    },
    addDivider() {
      this.items3.push({ type: "divider" });
    },
    addSpacer() {
      this.items3.push({ type: "spacer" });
    },
    addSocial() {
      this.items3.push({ type: "social" });
    },
    addUnsubscribe() {
      this.items3.push({ type: "unsubscribe" });
    },
  },
};
</script>
