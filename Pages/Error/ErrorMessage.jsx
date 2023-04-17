import React from 'react'
import { Link } from 'react-router-dom'

const ErrorMessage = () => {
  return (
    <div className="text-center">
        <div className="display-1">404</div>
        <h4 className="fw-light">Page Not Found</h4>
        <p className="mt-4">Go back to <Link to="/">Home</Link></p>
    </div>
  )
}

export default ErrorMessage