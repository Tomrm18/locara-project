import { FC } from "react"


const Error:FC = ({}) => {

  return (
    <div className="error-container fade-out">
      <div className="error-triangle"></div>
        <div className="error-box">
          <span className="error-text">
            Search Term Cannot be Empty
          </span>
        </div>
    </div>
  )
}

export default Error;
