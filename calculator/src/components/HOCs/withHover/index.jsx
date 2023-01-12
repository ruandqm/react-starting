import { useState } from "react"

export default function withHover(Component) {
    const WithHover = (props) => {
        const [status, setStatus] = useState(false)

        const handleHover = () => {
            setStatus(!status)
        }

        return <Component {...props} hover={status} onHover={handleHover} />
    }

    return WithHover
}