// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`${className} card-container`}>
      <div>
        <h1 className="developer">{title}</h1>
        <p className="role-descritption">{description}</p>
        <img src={`${imgUrl}`} className="image" alt={title} />
      </div>
    </li>
  )
}
export default CardItem
