import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const handDeleteItem = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div className="main-container">
        <p className="para">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="image" />
        <p className="para">{title}</p>
        <p className="para">{domainUrl}</p>
      </div>
      <div>
        <button
          data-testid="delete"
          onClick={handDeleteItem}
          className="btn"
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default HistoryItem
