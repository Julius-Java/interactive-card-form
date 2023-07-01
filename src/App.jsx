import { useState } from "react"
import "./scss/App.scss"
import cardLogo from "/images/card-logo.svg"
import {numberFormatter, cardValidator} from "./utils"


function App() {

  const [cardForm, setCardForm] = useState({
    name: "",
    number: "",
    monthExp: "",
    yearExp: "",
    cvv: ""
  })

  const [inputError, setInputError] = useState({
    name: false,
    number: false,
    monthExp: false,
    yearExp: false,
    cvv: false
  })

  // const [error, setError] = useState({
  //   typeOneError: "Can't be blank",
  //   typeTwoError: "Wrong format, can't be blank"
  // })

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationResult = cardValidator(cardForm)

    if (validationResult) {
      validationResult.forEach((item) => {
        setInputError(preValue => ({...preValue, [item] : true }))
      })
    }
  }

  const handleInput = (e) => {
    const {name, value} = e.target;
    setCardForm(prevDetails => ({...prevDetails, [name]: value}))
    setInputError(preValue => ({...preValue, [name] : false}))
  }

  return (
    <div className="App">
      <div className="parent container">
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
        <main>
          <form className={"form"} autoCorrect="off" autoComplete="off" onSubmit={handleSubmit}>
            <div className="form__input-container">
              <label htmlFor="" className="form__label">cardholder name</label>
              <input
                name="name"
                value={cardForm.name}
                onChange={handleInput}
                placeholder="e.g Jane Appleseed"
                type="text"
                className={"form__input " + (inputError.name && "error")}
              />
              <small className={"error-message " + (inputError.name && "visible")}>Can&apos;t be blank</small>
            </div>
            <div className="form__input-container">
              <label htmlFor="" className="form__label">card number</label>
              <input
                name="number"
                value={cardForm.number}
                maxLength="16"
                onChange={handleInput}
                placeholder="e.g. 1234 578 9123 0000"
                type="text"
                className={"form__input " + (inputError.number && "error")}
              />
              <small className={"error-message " + (inputError.number && "visible")}>Can&apos;t be blank</small>
            </div>
            <div className="form__lastDetail">
              <div className="form__input-container">
                <label htmlFor="" className="form__label">exp. date (MM/YY)</label>
                <div className="form__card-exp">
                  <input
                    name="monthExp"
                    value={cardForm.monthExp}
                    onChange={handleInput}
                    placeholder="MM"
                    type="text"
                    className={"form__input " + (inputError.monthExp && "error")}
                    maxLength='2'
                  />

                  <input
                    name="yearExp"
                    value={cardForm.yearExp}
                    onChange={handleInput}
                    placeholder="YY"
                    type="text"
                    className={"form__input " + (inputError.yearExp && "error")}
                    maxLength="2"
                  />
                </div>
              </div>
              <div className="form__input-container">
                <label htmlFor="" className="form__label">cvv</label>
                <input
                  name="cvv"
                  value={cardForm.cvv}
                  onChange={handleInput}
                  placeholder="e.g. 123"
                  type="text"
                  className={"form__input " + (inputError.cvv && "error")}
                  maxLength="3"
                />
              </div>
            </div>
            <button className="form__btn">Confirm</button>
          </form>
        </main>
      </div>
    </div>
  )
}

export default App
