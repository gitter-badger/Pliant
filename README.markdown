Pliant - jQuery Validation Plugin
================================

[![Build Status](https://travis-ci.org/PortableSheep/Pliant.png)](https://travis-ci.org/PortableSheep/Pliant)
[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/PortableSheep/Pliant/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

Pliant is a jQuery plugin for form validation, that tries to be very flexible as far as validation rules are concerned. It also allows defining rules via HTML comments.

Check out http://portablesheep.github.com/Pliant/ for some demos, and the WIKI for documentation.

- - -

Pliant Change Log
---------------------
* **2.0.7**
    * Added ability to assign a function to the chain property of a field.
* **2.0.6**
    * Issue #15 by amurf: Allow "field" to contain an array of fields.
    * Added bower.json definition.
    * Fixed rule option inheritance bug due to bad comparison treating 0 as null.
* **2.0.5**
    * Issue #14 by heumann: Added "for" attribute to validation messages if they're label elements.
* **2.0.4**
    * Version bump due to inputmask plugin changes.
* **2.0.3**
    * Refactored the toggle function.
* **2.0.2**
    * Fixed 'valid' rule property being ignored on init.
* **2.0.1**
    * Bumped patch due to changes in jquery plugin manifest.
* **2.0.0**
    * Changed pliant plugin architecture to be similar to UI plugins.
    * Changed all plugins to new architecture.
    * Moved HTML rule parsing to its own plugin.
    * Changed internal logic to be (hopefully) easier to follow, better formatted, and more commented.
    * Changed public function names to be more consistant with jQuery naming conventions.
    * Changed some option names for brevity, and consistancy.
    * Changed overall version history to match new policy
        * Major => Large breaking changes.
        * Minor => Smaller features that don't break older versions on upgrade.
        * Patch => Improvements, or bug fixes.
* **1.13.2**
    * Changed default length rule to replace new lines with carriage returns so that length calculation is the same as server side languages for textareas.
* **1.13.1**
    * Added new events onFieldRemoved, onFieldToggle, and onFieldRuleToggle.
    * Added new pl.decorator.js plugin that makes decorating elements for a field easier. Example: Astrisks for required fields.
* **1.13.0**
    * Changed rule chaining logic to accept the "rules" option as a string as well as an array, for brevity when only chaining one rule.
    * Renamed "validateOnFieldChange" init option to "validateOnChange" for consistency.
    * Changed "validateOnChange" handler context for rules/fields to be the field being processed, instead of the Pliant instance. This does not affect the init option since it doesn't allow for a handler.
    * Fixed "validateSubmitScope" init option so it doesn't error when given a string as the selector, instead of a jQuery object.
* **1.12.2**
    * Fixed rule message containers not being hidden in the same way they are for fields.
* **1.12.1**
    * Fixed a bug where a chained field that cannot be found throws the wrong exception.
* **1.12.0**
    * Converted rules to actual objects.
    * Added "SetMessage" function to the rule object prototype, which immediately changed that rules message content.
    * Changed rule validation to detect if the default message was changed, and restore the original before validation.
* **1.11.2**
    * Added new "expectedResult" option for rules. This allows rules to control the validation result for the rule in custom scenarios.
* **1.11.1**
    * Extended chain feature to allow specific rules for the chained field(s).
    * Fixed some lint errors.
* **1.11.0**
    * Added the ability to pass arguments to Validate, which will be passed to all rules executed.
* **1.10.0**
    * Changed comment rule processing to require the normal format used on plugin init. Allowing comments to be placed anywhere, instead of above the field.
* **1.9.4**
    * Added a missing return to ValidateField function.
* **1.9.3**
    * Modified input change validation to not rely on depricated arguments.callee.caller.name, which was breaking IE in some scenarios.
* **1.9.2**
    * Changed the init fields add function to merge existing fields, in case fields are defines twice, their rules are combined.
* **1.9.1**
    * Fixed a potential bug with processing rule messages that might be blank.
* **1.9.0**
    * Added plugin support, and two example plugins for textbox hinting, and corrected input styling.
* **1.8.0**
    * Modified the rule processing during field add to allow adding of rules without a validate function, as long as they have a message. This allows the user do things such as pass the fields/rules back to a server, do some server validation, and still be able to mark it as invalid on the client side on post back.
    * Modified field option 'validateOnChange' to allow you to assign it an anonymous function to determine if validation of rules should happen. If the function returns false, validation of the rules for that field is skipped.
    * Added 'validateOnChange' option for individual rules, which offers the same functionality as the field option.
* **1.7.1**
    * Modified chaining feature to accept an array, allowing multiple fields to be validated.
* **1.7.0**
    * Added field validation chaining. Adding a 'chain' option to a field definition with selector to another field will cause one to kick off validation of the other.
    * Cleaned up some hide/show usings that could be toggle.
    * Exposed a public ValidateField function that forces validation of a field you specify by selector.
    * Changed public AddField function to accept an array of field objects.
* **1.6.8**
    * Added validateSubmitScope option that lets you specify the DOM scope when binding to the validateSubmitSelector.
* **1.6.7**
    * Added detection of malformed field rules, and init rules. Any malformed rules will throw an error with the rule name that's invalid.
* **1.6.6**
    * Fixed a bug with event triggering not using well formed arguments, causing errors with onMessagePlacement is used.
* **1.6.5**
    * Fixed a bug in field message container support, where the container dom would be lost.
    * Fixed a bug in the AddField method where it would error on an array of field objects being passed in.
* **1.6.4**
    * Fixed a bug in the messageContainer visibility logic that caused the container to never be shown since the visibility of the error message was checked when the parent was hidden.
* **1.6.3**
    * Added "inherit" property support for rules; this allows you to inherit an existing rules object, esentially aliasing it and allowing you to override its properties.
    * Changed Subscribe to throw an exception when the handler isn't a valid function, or when the event name doesn't exist.
    * Changed execution order of onFieldValidate event so the GetInvalidCount method returns accurate results.
    * Changed AddMarkupRules method to take a object for a parameter which allow you to set "target" and "inputSelector". By default the target is the DOM pliant was instantiated against, and inputSelector is what is set on init. This allows for some custom selectors when parsing HTML rules against ASP.NET radio groups for example, since they're rendered as a table.
    * Added message container support for fields, by setting the "container" property on a field.
* **1.6.2**
    * Fixed bug with validateSubmitSelector option where passing in a jQuery object would result in all fields triggering validate on click. Added a check for jQuery object, and pull the selector from it before wiring up to prevent this issue.
* **1.6.1**
    * Changed GetFieldRules to filter out any rule properties that are objects unless its fourth param is True. This and 1.6 changes are added to make the results easier to consume by other languages when stringified since the internal objects are non-standard and don't play well with ASP.NET for example.
* **1.6.0**
    * Changed GetFieldRules to filter out any rule properties that are functions unless its third param is True.
* **1.5.3**
    * Changed focusFirstInvalidField to only apply when Validate is called, or form validation occurs. Having it on field change validation was jarring for the user if they wanted to fix another field before fixing the first invalid field.
* **1.5.2**
    * Fixed bug where some method parameters were named a reserved JS keyword, which busted IE.
* **1.5.1**
    * Fixed bug in custom property merging that made properties with false properties never carry over.
* **1.5.0**
    * Changed HTML comment parsing to parse serialized/well formed JSON instead of my custom contradicting format.
    * Updated the example to use JSON in the HTML comments.
* **1.4.4**
    * Fixed custom properties of defined shared rules not passing to the validate function.
* **1.4.3**
    * Fixed bug where user could call define a field that would be undefined or an empty array. Resulting in validation always failing.
    * Changed the code to only add a field if it's not undefined, and if the field object has an attribute ID. Otherwise it returns an error.
* **1.4.2**
    * Added ignoreDisabled option with a default of true.
    * Added includeDisabled parameter to GetFieldRules function.
* **1.4.1**
    * Added ability to define submit selector (option: validateSubmitSelector) and event (option: validateSubmitOn) to listen on for auto validation.
    * Refactored the built in length rule a bit.
* **1.4.0**
    * Added appendRulesToFieldClass option that appends all field rules to the fields class, and keeps them in sync through rule enable/disable.
* **1.3.1**
    * Fixed possible circular ref exception when stringifying output from GetFieldRules method due to top level properties being a jQuery object. If it's a jQuery object, we just pull the ID attribute for the value outputted. This doesn't solve for values that are arrays of jQuery objects.
* **1.3.0**
    * Added the Subscribe public method to allow more than one event handler after init. Note that using this for onFieldAdded will not work for fields defined in the init fields option since the binding occures after init.
    * Fixed the UI refreshing on AddField from happening too often.
    * Added GetFieldRules function that returns all enabled field ids, all enabled roles names, and all the roles properties as key/value pairs... excluding message, validate, isValid, and isEnabled.
* **1.2.0**
    * Refactored code to remove redundant calls to internal methods, and reduce size a bit.
    * Rmoved fieldIndicator feature, and replaced it with the onFieldAdded event since it can be used to acheive the same, and is more flexible.
* **1.1.0**
    * Added ability to disable/enable validation on field change via 'validateOnChange' option in the field definition.

- - -
Decorator Change Log
---------------------
* **1.2.0**
    * Refactored plugin to use new plugin format.
* **1.1.0**
    * Refactored plugin to require less code per field. Now the key name is the rule name, and it will auto decorate based on that.
    * Changed init to hide decoration if the field isn't visible, and the sync is enabled.
    * Changed logic so that calling show/hide from jQuery on a decorated field, also hides or shows the decoration if sync is enabled.
    * Added ability to ignore all decorator processing for a field, using the "decorate: false" option when declaring the field.
    * Added ability to ignore decorator processing for a fields rule, using the "decorate: false" option when declaring the rule for the field.

Utils Change Log
---------------------
* **1.2.0**
    * Refactored plugin to use new plugin format.
* **1.1.0**
    * Fixed GetFieldRules to properly detect objects and functions.

InputMask Change Log
---------------------
* **1.3.0**
    * Decoupled mask logic into a separate project called "PliantMask", and converted the plugin to wrap it.
* **1.2.1**
    * Added fix for remasking when mask is removed on mouseup. IE10 field clear icon clicks are the reason for this fix.
* **1.2.0**
    * Refactored plugin to use new plugin format.
* **1.1.1**
    * Fixed bug where focus event wasn't setting the cursor position to the first valid placeholder.
* **1.1.0**
    * Added a handler for the change event that removes the mask CSS class if the value of the field isn't the mask string.

HTMLRules Change Log
---------------------
* **1.0**
    * Initial version, based on code moved out of the main plugin.

InputHint Change Log
---------------------
* **1.1.1**
    * Fixed #17: Hint shouldn't be applied to fields that already have a value when loading.
* **1.1.0**
    * Refactored plugin to use new plugin format.
* **1.0.0**
    * Initial version.

InputSuccess Change Log
---------------------
* **1.1.0**
    * Refactored plugin to use new plugin format.
* **1.0.0**
    * Initial version.
