<template>
  <select
    :id="opt.id"
    :name="opt.name"
    class="selectdrop">
    <slot />
  </select>
  <!-- v-model="selected" -->
</template>
<script>
  import Choices from 'choices.js'
  export default {
    props: {
      value: {
        type: String,
        required: false
      },
      opt: {
        type: Object,
        required: false,
        default() {
          return {
          }
        }
      }
    },
    computed: {
        selected: {
            get() {
            return this.value
            },
            set(value) {
            this.$emit('input', value)
            }
        }
    },
    mounted() {
        const _this = this
        const selectDrop = _this.$el
      
        window.addEventListener('load', function () {

            // Handle Placeholder
            if (typeof (_this.opt.prependPlaceholder) !== 'undefined') {
                var placeholderVal = _this.opt.prependPlaceholder
            } else {
                var placeholderVal = ''
            }


            // Initialize Select
            const choices = new Choices(selectDrop, {
                searchResultLimit: 10,
                searchEnabled: _this.opt.searchEnabled,
                classNames: {
                    containerOuter: 'choices ' + _this.opt.variant,
                },
                shouldSort: false,
                callbackOnCreateTemplates: function (template) {
                    return {
                    item: (classNames, data) => {
                        return template(`
                        <div 
                            class="${classNames.item} ${data.highlighted ? classNames.highlightedState : classNames.itemSelectable}" 
                            data-item 
                            data-id="${data.id}" 
                            data-value="${data.value}" 
                            ${data.active ? 'aria-selected="true"' : ''} 
                            ${data.disabled ? 'aria-disabled="true"' : ''}>
                            ${placeholderVal} 
                            ${data.label }
                        </div>
                        `)
                    },

                    }
                }
            })

            // Handle Scroll Anchors
            if (typeof (_this.opt.scrollAnchors) !== 'undefined') {

                selectDrop.addEventListener('change', function (event) {

                    // Scroll
                    const anchor = choices.getValue(true),
                    anchor_element = document.getElementById(anchor),
                    offset = 0

                    window.scroll({
                    behavior: 'smooth',
                    left: 0,
                    top: anchor_element.offsetTop - offset
                    })

                })
            }

            // Handle Links
            if (typeof (_this.opt.linkList) !== 'undefined') {
                
                selectDrop.addEventListener('change', function (event) {

                    // Location
                    const anchor = choices.getValue(true);
                    window.location = anchor;

                })

            }


        })
    }
  }
</script>