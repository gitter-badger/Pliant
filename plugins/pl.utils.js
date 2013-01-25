/*! v1.1 */
(function($) {
	$.pliantPlugin('utils', {
		onReady: function() {
			if (!this.instance.GetFieldRules) {
				var inst = this.instance;
				this.instance.GetFieldRules = function(includeHidden, includeDisabled, includeFunctions, includeObjects) {
					var out = [], _fields = inst._fields;
					for(var i in _fields) {
						if (_fields[i].enabled && !(_fields[i].field.is(':hidden') && !includeHidden || _fields[i].field.is(':disabled') && !includeDisabled)) {
							var invRules = [];
								for(var r in _fields[i].rules) {
									if (_fields[i].rules[r].enabled !== false) {
										var props = [];
										for(var key in _fields[i].rules[r]) {
											var val = _fields[i].rules[r][key];
											if (key == '_' || key == 'valid' || key == 'enabled' || key == 'message' || val === undefined) {
												continue;
											} else if (val instanceof jQuery) {
												val = val.attr('id');
											} else if (typeof(val) === 'function' && !includeFunctions || typeof(val) === 'object' && !includeObjects) {
												continue;
										}
										if (val !== undefined) {
											props.push({ key: key, value: val });
										}
									}
									invRules.push({ name: r, properties: props });
								}
							}
							out.push({ id: _fields[i].field.attr('id'), rules: invRules});
						}
					}
					return out;
				};
			}
		}
    });
})(jQuery);