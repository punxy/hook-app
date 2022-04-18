import { useEffect, useRef, useState } from "react"

export const useFetch = (url) => {

    const isMounted = useRef(true);

    useEffect(()=>{
        return () => {
            isMounted.current = false;
        }
    }, [])
  
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    });

    useEffect( () => {
        setState({
            data: null,
            loading: true,
            error: null
        });

        fetch(url)
            .then( resp => resp.json() )
            .then( data => {
                if( isMounted.current ){
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            })
            .catch(e => {
                setState({
                    loading: false,
                    data: null,
                    error: 'data could not be loaded'
                });
            })
            ;

    }, [url]);

    return state;
}
