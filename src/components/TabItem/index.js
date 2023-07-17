import './index.css'

const TabItem = props => {
  const {tabsDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    setActiveTabId(tabId)
  }
  const activeTabClassName = isActive ? 'tab-button active' : 'tab-button'
  return (
    <li className="tab-item">
      <button
        type="button"
        onClick={onClickTabItem}
        className={activeTabClassName}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
