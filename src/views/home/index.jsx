import { useEffect, useState } from 'react';
import LoadingView from '../../utils/loading';
import './index.scss';

const MakeStudioView = () => {
    const [loaderVisibility, setLoaderVisibility] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoaderVisibility(false)
        },3000)
    },[])

    return(
        <main className='main-app-container'>

                <LoadingView
                    onVisible={loaderVisibility}
                />

        </main>
    )
}

export default MakeStudioView