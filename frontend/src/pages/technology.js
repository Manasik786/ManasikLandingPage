import React from 'react'

const technology = () => {
  return (
    <>
     <div class="container">
    <h1>Checkout Form</h1>
    <form class="form cf">
      <section class="plan cf">
        <h2>Choose a plan:</h2>
        <input type="radio" name="radio1" id="free" value="free"/><label class="free-label four col" for="free">Free</label>
        <input type="radio" name="radio1" id="basic" value="basic" checked/><label class="basic-label four col" for="basic">Basic</label>
        <input type="radio" name="radio1" id="premium" value="premium"/><label class="premium-label four col" for="premium">Premium</label>
      </section>

    </form>
  </div>
    </>
  )
}

export default technology