import { CFooter } from '@coreui/react'
import React from 'react'

const AppFooter = () => {
    return (
        <CFooter>
            <div>
                <a
                    href="https://www.linkedin.com/in/tareqhassan2014/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Movie App
                </a>
                <span className="ms-1">&copy; all right resolved</span>
            </div>
        </CFooter>
    )
}

export default React.memo(AppFooter)
