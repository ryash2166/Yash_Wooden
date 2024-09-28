import React from 'react'
import {Link} from 'react-router-dom'
import './PageHeading.css'
function PageHeading({pageTitle="pageTitle",goBackLink="goBackLink"}) {
  return (
    <div className="PageHeading-wrapper">
        {/* background */}
        <div className="sm:container PageHeading-link mx-auto flex flex-col items-start justify-center">
        
          <ul className="Nave-GetLinks flex items-center mb-2.5">

            <li>
              <Link to="/" className="back-Link transition-all  flex items-center justify-center" >{goBackLink}</Link>
            </li>

            <li>
              <p className="PgTitle-text flex items-center justify-center">{pageTitle}</p>
            </li>

          </ul>

          <h1 className="PgTitle" >{pageTitle}</h1>

        </div>

    </div>
  )
}

export default PageHeading
