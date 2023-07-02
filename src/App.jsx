import { useState } from "react"
import "./scss/App.scss"
import cardLogo from "/images/card-logo.svg"
import {numberFormatter, emptyCheck, formatCheck} from "./utils"
import ThankYou from "./components/ThankYou"


function App() {

  const [cardForm, setCardForm] = useState({
    name: "",
    number: "",
    monthExp: "",
    yearExp: "",
    cvv: ""
  })

  // For empty inputs
  const [inputError, setInputError] = useState({
    name: false,
    number: false,
    monthExp: false,
    yearExp: false,
    cvv: false
  })

  // For wrong formats
  const [formatError, setFormatError] = useState({
    number: false,
    monthExp: false,
    yearExp: false,
    cvv: false
  })

  const [validInputs, setValidInputs] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const emptyInputs = emptyCheck(cardForm)
    const formatInputs = formatCheck(cardForm)

    if (emptyInputs) {
      emptyInputs.forEach((item) => {
        setInputError(preValue => ({...preValue, [item] : true }))
      })
    } else {
      if (formatInputs) {
        formatInputs.forEach((item) => {
          setFormatError(preValue => ({...preValue, [item] : true}))
        })
      } else {
        setValidInputs(true)
      }
    }
  }

  const handleInput = (e) => {
    const {name, value} = e.target;
    setCardForm(prevDetails => ({...prevDetails, [name]: value}))
    setInputError(preValue => ({...preValue, [name] : false}))
    setFormatError(preValue => ({...preValue, [name] : false}))
  }

  return (
    <div className="App">
      <div className="parent container">
        {/* CARD */}
        <aside className="card">
          <div className="card__front">
            <img src={cardLogo} className="card__logo" alt="" />
            <h3 className="card__number">
              {cardForm.number ? numberFormatter(cardForm.number) : "0000 0000 0000 0000"}
            </h3>
            <div className="card__bio">
              <p className="card__name">{cardForm.name ? cardForm.name : "Julius Emmanuel"}</p>
              <p className="card__expDate">
                {(cardForm.monthExp && cardForm.yearExp) ? (cardForm.monthExp + "/" + cardForm.yearExp) : "00/00"}
              </p>
            </div>
          </div>
          <div className="card__back">
            <h4 className="card__cvv">
              {cardForm.cvv ? cardForm.cvv : "000"}
            </h4>
          </div>
        </aside>

        {/* FORM & THANK YOU*/}
        <main>
          {!validInputs ? (
            <form className={"form"} autoComplete="off" onSubmit={handleSubmit}>

              <div className="form__input-container">
                <label htmlFor="name" className="form__label">cardholder name</label>
                <input
                id="name"
                name="name"
                value={cardForm.name}
                onChange={handleInput}
                placeholder="e.g Jane Appleseed"
                type="text"
                className={"form__input " + (inputError.name && "error")}
                />

                <small className={"error-message " + (inputError.name && "visible")}>
                Can&apos;t be blank
                </small>
              </div>

              <div className="form__input-container">
                <label htmlFor="number" className="form__label">card number</label>
                <input
                id="number"
                name="number"
                value={cardForm.number}
                maxLength="16"
                onChange={handleInput}
                placeholder="e.g. 1234 578 9123 0000"
                type="text"
                className={"form__input " + ((inputError.number || formatError.number) && "error")}
                />

                <small className={"error-message " + ((inputError.number || formatError.number) && "visible")}>
                {formatError.number ? "Wrong format, numbers only" : "Can't be blank"}
                </small>
              </div>

              <div className="form__lastDetail">
                <div className="form__input-container">
                  <label htmlFor="expMonth-year" className="form__label">exp. date (MM/YY)</label>
                  <div className="form__card-exp">
                    <input
                    id="expMonth-Year"
                    name="monthExp"
                    value={cardForm.monthExp}
                    onChange={handleInput}
                    placeholder="MM"
                    type="text"
                    className={"form__input " + ((inputError.monthExp || formatError.monthExp) && "error")}
                    maxLength='2'
                    />

                    <input
                    id="expMonth-year"
                    name="yearExp"
                    value={cardForm.yearExp}
                    onChange={handleInput}
                    placeholder="YY"
                    type="text"
                    className={"form__input " + ((inputError.yearExp || formatError.yearExp) && "error")}
                    maxLength="2"
                    />

                    {/* Fix UI */}

                    <small
                      className={"error-message " + (((inputError.monthExp || inputError.yearExp) || (formatError.yearExp || formatError.monthExp)) && "visible")}>
                        {(formatError.monthExp || formatError.yearExp) ? "Wrong format, numbers only" : "Can't be blank"}
                    </small>
                  </div>
                </div>

                <div className="form__input-container">
                  <label htmlFor="cvv" className="form__label">cvv</label>
                  <input
                  id="cvv"
                  name="cvv"
                  value={cardForm.cvv}
                  onChange={handleInput}
                  placeholder="e.g. 123"
                  type="text"
                  className={"form__input " + ((inputError.cvv || formatError.cvv) && "error")}
                  maxLength="3"
                  />

                  {/* Fix UI */}

                  <small className={"error-message " + ((inputError.cvv || formatError.cvv) && "visible")}>
                  {formatError.cvv ? "Wrong format, numbers only" : "Can't be blank"}
                  </small>

                </div>
              </div>
              <button className="form__btn">Confirm</button>
            </form>
          ) :
          (
            <ThankYou />
          )}

        </main>


      </div>
    </div>
  )
}

export default App
