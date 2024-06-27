import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

interface RedirectToProps {
    goto: string
}

const RedirectTo = ({ goto }: RedirectToProps) => {

    const navigate = useNavigate()

    useEffect(() => {

        if (goto != "") {
            console.log(goto, "sdf");

            navigate(goto)
        }
    }, [])

    return <></>
}

export default RedirectTo