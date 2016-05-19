import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
  <li className="slds-timeline__item"
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    <span className="slds-assistive-text">Event</span>
    <div className="slds-media">
      <div className="slds-media__body">
        <div className="slds-media slds-media--timeline slds-timeline__media--event">
          <div className="slds-media__figure">
            <svg aria-hidden="true" className="slds-icon slds-icon-standard-event slds-timeline__icon">
              <use xlinkHref="./public/vendor/salesforce-lightning-design-system/assets/icons/standard-sprite/svg/symbols.svg#event"></use>
            </svg>
          </div>
          <div className="slds-media__body">
            <p className="slds-text-heading--small"><a>{text}</a></p>
          </div>
        </div>
      </div>
    </div>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
