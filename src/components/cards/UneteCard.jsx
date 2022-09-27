import { Link } from 'react-router-dom'

const UneteCard = ({ img, title, description, cta, url}) => {
  return (
    <article className='unete__cards__item'>
        <section className=''>
            <img src={img} alt={title} className="unete__cards__item__image" />
        </section>
        <section className='unete__cards__item__content'>
            <h3 className='unete__cards__item__title'>{title}</h3>
            <p className='unete__cards__item__description'>{description}</p>
            <Link to={url} className='unete__cards__item__button'>{cta}</Link>
        </section>
    </article>
  )
}

export default UneteCard