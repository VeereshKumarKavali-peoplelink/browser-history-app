import './index.css'

const BrowserItem = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, domainUrl, title} = historyDetails

  const onClickDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="browser-item">
      <p className="time">{timeAccessed}</p>
      <div className="logo-title-domain-delete-container">
        <div className="logo-title-domain-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="title-domain-container">
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
        </div>
        <div className="delete-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            data-testid="delete"
            className="delete-icon"
            onClick={onClickDeleteHistory}
          />
        </div>
      </div>
    </li>
  )
}

export default BrowserItem
