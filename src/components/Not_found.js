import React from 'react'
import icon from './images/error.svg'

function Notfound() {
  return (

    <body className='bdy'> 
          <div>
              <div className="not-found">
                    <img className='error' src={icon} alt='error.svg'/>
                    <img className='error' src={icon} alt='error.svg'/>
                    <img className='error' src={icon} alt='error.svg'/>
                    <h1> Oops: Error 404!</h1>
                    <h2>Page not found</h2>
                          <p><br></br>
                            If you came upon this page by mistake, 
                            try checking the URL in your web browser.
                          </p>
                </div>
            </div>
    </body>
    
          )
}

export default Notfound;