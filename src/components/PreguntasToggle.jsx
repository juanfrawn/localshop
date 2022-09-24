import { useState } from 'react'
import arrow from '../assets/arrow_black.svg'

const PreguntasToggle = ({ title, questions }) => {
    const [show, setShow] = useState(false)

  return (
    <article className='px-5 mb-3 max-w-2xl sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto'>
        <div>
            <div className='mb-4 shadow-[0_0px_5px_4px_rgba(0,0,0,0.1)] px-2 py-3 hover:bg-stone-300/50 transition-colors duration-300' onClick={() => setShow(!show)}>
                <h2 className='flex items-center justify-between text-xl cursor-pointer'>
                    {title}
                    <span><img src={arrow} alt="Más opciones" className={`w-5 transition-transform duration-500 ${show ? 'rotate-180' : 'rotate-0'}`} /></span>
                </h2>
            </div>
            <div className={`overflow-hidden ${show ? '' : 'h-0'} transition-all duration-500`}>
                {questions.map((question, index) => (
                    <div key={index} className="mb-10">
                        <h3 className='text-xl font-extrabold mb-3'>{question.question}</h3>
                        <p>{question.answer}</p>
                    </div>
                ))}
            </div>
        </div>
    </article>
  )
}

export default PreguntasToggle