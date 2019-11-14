import Autolinker from 'autolinker'

export const AUTOLINKER_NAME = 'autolinker'

export default {
  bind(el, binding) {
    const options = binding.arg || {}
    el.innerHTML = Autolinker.link(binding.value, options)
  },
}
