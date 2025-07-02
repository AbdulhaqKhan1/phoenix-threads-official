import React from 'react'

const Contact = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
      <form className="space-y-4 max-w-md">
        <input type="text" placeholder="Your name" className="w-full border p-2 rounded" />
        <input type="email" placeholder="Your email" className="w-full border p-2 rounded" />
        <textarea placeholder="Message" className="w-full border p-2 rounded"></textarea>
        <button className="bg-black text-white px-4 py-2 rounded">Send</button>
      </form>
    </div>

  )
}

export default Contact