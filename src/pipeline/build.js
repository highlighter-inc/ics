import defaultAttributes from "../defaults";

export default function buildEvent(attributes = {}) {
  // fill in default values where necessary
  const withDefaults = {
    ...defaultAttributes,
    ...attributes
  }

  // remove falsey values
  return Object.fromEntries(Object.entries(withDefaults).filter(([_, val]) => !!val))
}
