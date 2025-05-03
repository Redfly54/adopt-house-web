import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className="text-3xl font-family font-bold">
        Hello world!
      </h1>
      <i class="ri-arrow-up-line"></i>
    </div>
  )
}

export default App
