import Stories from 'components/stories'
import Button from 'components/button'

const primary = { arg: 'Primary', label: 'Primary' }
const secondary = { arg: 'Secondary', label: 'Secondary', theme: 'secondary' }
const pill = { arg: 'Pill', label: 'Pill Shaped Button', variant: 'pill' }
const sharp = { arg: 'Sharp', label: 'Sharp Shaped Button', variant: 'sharp' }

const ButtonStory = () => (
  <Stories
    argList={[primary, secondary, pill, sharp]}
    template={args => <Button {...args} />}
  />
)

export default ButtonStory
