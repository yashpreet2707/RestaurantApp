
import { useRouteError } from "react-router-dom"

const Error = () => {
    const err = useRouteError() ;
    console.error(err)
    return (
        <div className="error-div">
            <div>
                <h1>{err.status} {err.statusText}</h1>
                <h2>{err.data}</h2>
            </div>
        </div>
    )
}

export default Error ;