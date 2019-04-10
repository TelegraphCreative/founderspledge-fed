---
title: Form - Select Field
slug: select-field
draft: false
---

<!-- Header -->
<div class="styleguide__content border-b border-oat-light pb-8 mb-12">
  <h1>Select Field Base</h1>
  <p><u>SASS Partial:</u> <code>vendor/choices</code></p>
  <p><u>Related SASS Partial:</u> <code>standard-form-base</code></p>
  
  <p><u>Description:</u> This is a Vue component that uses Vue Properties to set the variant classes. Check out the Select Field for all variant styles.</p>
  
  <p>By default, the select element includes these attributes:<p>
  <ul>
    <li><code>tabindex="-1"</code></li>
    <li><code>aria-hidden="true"</code></li>
  </ul>

  <p><u>Property Object:</u> This is an object that can accept the following settings: </p>

  <ul>
    <li><b>id:</b> string, html attribute value appended to the hidden <code>&lt;select&gt;</code> element</li>
    <li><b>name:</b> string, html attribute value appended to the hidden <code>&lt;select&gt;</code> element</li>
    <li><b>variant:</b> string, adds dropdown css variation class added to the parent select box div</li>
    <li><b>prependPlaceholder:</b> string, prepended as instructional text to the dropdown when inactive</li>
    <li><b>linklist:</b> boolean, use option values as links to alter window.location</li>
    <li><b>searchEnabled:</b> boolean, enables search for a long list of select options</li>
    <li><b>scrollAnchors:</b> boolean, use option values as page anchor links to scroll to sections</li>
  </ul>

  <h2>Default</h2>

</div>

<!-- Result -->
<div class="styleguide__result">
    <select_box :opt="{ variant: '', name: 'hello name', id: 'user_PhoneCode__c' }">
        <option value="es" selected>Germany</option>
        <option value="en">United States of America</option>
        <option value="ma">France</option>
        <option value="de">Spain</option>
        <option value="fr">Italy</option>
    </select_box>
</div>

<!-- Markup -->

{{< highlight html  >}}
<select_box :opt="{ variant: '', name: 'user[PhoneCode__c]', id: 'user_PhoneCode__c' }">
    <option value="es" selected>Germany</option>
    <option value="en">United States of America</option>
    <option value="ma">France</option>
    <option value="de">Spain</option>
    <option value="fr">Italy</option>
</select_box>
{{< /highlight >}}


<div class="styleguide__content">
    <h2>Default Dark</h2>
</div>


<!-- Result -->
<div class="styleguide__result">
<select_box :opt="{ variant: '-dark' }">
    <option value="es" selected>Germany</option>
    <option value="en">United States of America</option>
    <option value="ma">France</option>
    <option value="de">Spain</option>
    <option value="fr">Italy</option>
</select_box>
</div>

<!-- Markup -->

{{< highlight html  >}}
<select_box :opt="{ variant: '-dark' }">
    <option value="es" selected>Germany</option>
    <option value="en">United States of America</option>
    <option value="ma">France</option>
    <option value="de">Spain</option>
    <option value="fr">Italy</option>
</select_box>
{{< /highlight >}}



<div class="styleguide__content">
    <h2>Default Center</h2>
</div>


<!-- Result -->
<div class="styleguide__result">
<select_box :opt="{ variant: '-center' }">
    <option value="es" selected>Germany</option>
    <option value="en">United States of America</option>
    <option value="ma">France</option>
    <option value="de">Spain</option>
    <option value="fr">Italy</option>
</select_box>
</div>

<!-- Markup -->

{{< highlight html  >}}
<select_box :opt="{ variant: '-center' }">
    <option value="es" selected>Germany</option>
    <option value="en">United States of America</option>
    <option value="ma">France</option>
    <option value="de">Spain</option>
    <option value="fr">Italy</option>
</select_box>
{{< /highlight >}}


<div class="styleguide__content">
    <h2>Default Dark Center</h2>
</div>


<!-- Result -->
<div class="styleguide__result">
<select_box :opt="{ variant: '-dark -center' }">
    <option value="es" selected>Germany</option>
    <option value="en">United States of America</option>
    <option value="ma">France</option>
    <option value="de">Spain</option>
    <option value="fr">Italy</option>
</select_box>
</div>

<!-- Markup -->

{{< highlight html  >}}
<select_box :opt="{ variant: '-dark -center' }">
    <option value="es" selected>Germany</option>
    <option value="en">United States of America</option>
    <option value="ma">France</option>
    <option value="de">Spain</option>
    <option value="fr">Italy</option>
</select_box>
{{< /highlight >}}


<div class="styleguide__content">
    <h2>Standard</h2>
    <p>Styled to match the Standard Form Base</p>
</div>
<!-- Result -->
<div class="styleguide__result">
    <form action="" class="standard-form-base">
        <div class="form-group">
            <div class="field-group">
                <label class="standard-label" for="country">
                Country
                </label>
                <select_box :opt="{ variant: '-standard' }">
                <option value="es" selected>Germany</option>
                <option value="en">United States of America</option>
                <option value="ma">France</option>
                <option value="de">Spain</option>
                <option value="fr">Italy</option>
                </select_box>
            </div>
        </div>
    </form>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="form-group">
    <div class="field-group">
        <label class="standard-label" for="country">
        Country
        </label>
        <select_box :opt="{ variant: '-standard' }">
        <option value="es" selected>Germany</option>
        <option value="en">United States of America</option>
        <option value="ma">France</option>
        <option value="de">Spain</option>
        <option value="fr">Italy</option>
        </select_box>
    </div>
</div>
{{< /highlight >}}



<div class="styleguide__content">
    <h2>Standard Medium</h2>
</div>


<!-- Result -->
<div class="styleguide__result">
    <form action="" class="standard-form-base">
        <div class="form-group">
            <div class="field-group">
                <label class="standard-label" for="country">
                Country
                </label>
                <select_box :opt="{ variant: '-standard -md' }">
                <option value="es" selected>Germany</option>
                <option value="en">United States of America</option>
                <option value="ma">France</option>
                <option value="de">Spain</option>
                <option value="fr">Italy</option>
                </select_box>
            </div>
        </div>
    </form>
</div>

<!-- Markup -->

{{< highlight html  >}}
<div class="form-group">
    <div class="field-group">
        <label class="standard-label" for="country">
        Country
        </label>
        <select_box :opt="{ variant: '-standard -md' }">
        <option value="es" selected>Germany</option>
        <option value="en">United States of America</option>
        <option value="ma">France</option>
        <option value="de">Spain</option>
        <option value="fr">Italy</option>
        </select_box>
    </div>
</div>
{{< /highlight >}}


