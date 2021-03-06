// Vue
window.Vue = require("vue");

// Imports
import site_menu from "./components/SiteMenu";

import full_slider from "./components/FullSlider";
import info_slider from "./components/InfoSlider";
import slider from "./components/Slider";
import profile_modal from "./components/ProfileModal";
import content_modal from "./components/ContentModal";
import gallery_modal from "./components/GalleryModal";
import select_box from "./components/SelectBox";
import stat_card from "./components/StatCard.vue";
import range_slider from "./components/Range.vue";
import smooth_scroll from "./components/SmoothScroll";
import section_anchor_states from "./components/SectionAnchorStates";
import edit_lock_form_mode from "./components/EditLockFormModes";
import counter from "./components/Counter";
import accordion from "./components/Accordion";
import clone_blocks from "./components/CloneBlocks";

// Vue App
const app = new Vue({
  el: "#app",

  components: {
    site_menu,
    full_slider,
    info_slider,
    slider,
    profile_modal,
    content_modal,
    gallery_modal,
    select_box,
    stat_card,
    range_slider,
    smooth_scroll,
    counter,
    accordion
  }
});

// Other Initializations
section_anchor_states();
edit_lock_form_mode();
clone_blocks();
