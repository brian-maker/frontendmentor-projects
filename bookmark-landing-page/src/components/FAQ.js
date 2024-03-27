import React from 'react'
import Questions from './Questions'

const questions = [
    {
        id:1,
        question:"What is Bookmark?",
        answers:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
        id:2,
        question:"How can I request a new browser?",
        answers:"Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
    },
    {
        id:3,
        question:"Is there a mobile app?",
        answers:"Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
    },
    {
        id:4,
        question:"What about other Chromium browsers?",
        answers:"Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
    }
]

function FAQ() {
    const [items] = React.useState(questions)
    
  return (
    <>
    <section className=' max-w-7xl p-8 lg:max-w-xl mx-auto items-center'>
        <article className='text-center'>
            <h2 className='text-3xl mb-6 lg:text-4xl'>Frequently Asked Questions</h2>
            <p className='mb-6'>Here are some of our FAQs. If you have any other questions you’d like</p>
        </article>

        <article>
            <div>
                {items.map((item)=>(
                    <Questions 
                    key={item.id} {...item}
                    />
                ))}
            </div>

            <button className='btn-blue text-white p-3 rounded shadow-lg hover:opacity-75 block mx-auto mt-10'>More Info</button>
        </article>
    </section>
    </>
  )
}

export default FAQ