import thankYouLogo from "/images/icon-complete.svg"
import "../scss/thankYou.scss"

function ThankYou() {
  return (
    <div className="complete">
        <img src={thankYouLogo} className='complete__logo' alt="" />
        <h3 className="complete__heading">thank you!</h3>
        <p className="complete__tex">We&apos;ve added your cart details</p>
        <button className="complete__btn">Continue</button>
    </div>
  )
}

export default ThankYou;