import __ from "lodash";

/**
 * You can extend Lodash with mixins
 * And use it as below
 * import _ from '@lodash'
 */
const _ = __.runInContext();

_.mixin({
  // Add extra logic
});

export default _;
