import PropTypes from 'prop-types'
import clsx from 'clsx'

import stl from './Button.module.scss'

const Button = ({ label, onClick, theme, variant, customClass }) => (
  <button
    onClick={onClick}
    className={clsx(
      stl.btn,
      stl[`${theme}Btn`],
      stl[`${variant}Btn`],
      customClass
    )}
  >
    {label}
  </button>
)

Button.defaultProps = {
  label: 'Button',
  onClick: () => console.log('clicked!'),
  theme: 'primary',
  variant: 'normal',
}

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.oneOf(['primary', 'secondary']),
  variant: PropTypes.oneOf(['normal', 'pill', 'sharp']),
  customClass: PropTypes.string,
}

export default Button
