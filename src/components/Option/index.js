import {ChoiceImage, ChoiceButton} from './styledComponents'

const Option = props => {
  const {optionItem, onSelecting} = props
  const {id, imageUrl} = optionItem
  const onClickingBtn = () => {
    onSelecting(id)
  }
  return (
    <li>
      <ChoiceButton
        type="button"
        data-testid={`${id.toLowerCase()}Button`}
        onClick={onClickingBtn}
      >
        <ChoiceImage src={imageUrl} alt={id} />
      </ChoiceButton>
    </li>
  )
}

export default Option
