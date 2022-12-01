import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} - Classic Photo`
    }, [title])
}

export default useTitle;