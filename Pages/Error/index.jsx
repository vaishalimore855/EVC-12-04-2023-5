import { useEffect } from 'react';
import ErrorMessage from './ErrorMessage'

const Error = ({ title }) => {

  useEffect(() => {
    document.title = title ? title : '404 | Page Not Found';
  }, [])

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center">
      <ErrorMessage />
    </div>
  )
};

export default Error;