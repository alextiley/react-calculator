export const getKeyFromKeypad = (key, wrapper) => (
  wrapper.find('.qa-key').filterWhere(x => x.props().label === key)
);
