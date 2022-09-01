import './index.css'

const VisitedCountries = props => {
  const {visitedDetails, removeButton} = props
  const {imageUrl, name, id} = visitedDetails

  const onClickRemoveButton = () => {
    removeButton(id)
  }

  return (
    <>
      <li className="each-country">
        <div className="each-image">
          <img src={imageUrl} alt="thumbnail" className="country-image" />
        </div>
        <div className="country-name-button">
          <p className="country-name-text">{name}</p>
          <button
            type="button"
            className="remove-button"
            onClick={onClickRemoveButton}
          >
            Remove
          </button>
        </div>
      </li>
    </>
  )
}

export default VisitedCountries
