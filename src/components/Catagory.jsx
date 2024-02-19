import React from 'react'

const Catagory = () => {
  return <nav aria-label="breadcrumb">
   <ol className="breadcrumb breadcrumb-custom overflow-hidden text-center bg-body-tertiary border rounded-3">
    <li className="breadcrumb-item">
      <a className="link-body-emphasis fw-bold text-decoration-none hover:bg-green-500 hover:text-white" href="#">
        <svg className="bi" width="65" height="16"><use xlinkHref="#house-door-fill"></use></svg>
        All
      </a>
    </li>
    <li className="breadcrumb-item">
      <a className="link-body-emphasis fw-bold text-decoration-none" href="#">Breakfast</a>
    </li>

    <li className="breadcrumb-item">
      <a className="link-body-emphasis fw-bold text-decoration-none" href="#">Lunch</a>
    </li>

    <li className="breadcrumb-item">
      <a className="link-body-emphasis fw-bold text-decoration-none" href="#">Snacks</a>
    </li>
    
    <li className="breadcrumb-item">
      <a className="link-body-emphasis fw-bold text-decoration-none" href="#">Dinner</a>
    </li>

  </ol>
</nav> 
}



export default Catagory
