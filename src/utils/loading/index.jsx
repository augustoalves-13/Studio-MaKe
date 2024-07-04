import './index.scss'

const LoadingView = (props) => {
    return(
        <main className={`main-loading ${props.onVisible ? 'loader-enable' : 'loader-disable'}`}>
            <img src="/images/logo.png" alt='logo'/>
        </main>
    )
}

export default LoadingView