import './index.css'

const Countries = props => {
  const {initialCountriesListDetails, visitButton} = props
  const {id, name, isVisited} = initialCountriesListDetails

  const onClickVisitButton = () => {
    visitButton(id)
  }

  //   const visitText = isVisited === true ? 'Visited' : 'Visit'
  const buttonStyle = isVisited === true ? 'visited-button' : 'visit-button'

  return (
    <>
      <li className="each-item">
        <p className="country-name">{name}</p>
        {isVisited === true ? (
          <p className="visited-text">Visited</p>
        ) : (
          <button
            type="button"
            className={buttonStyle}
            onClick={onClickVisitButton}
          >
            Visit
          </button>
        )}
      </li>
    </>
  )
}

export default Countries
