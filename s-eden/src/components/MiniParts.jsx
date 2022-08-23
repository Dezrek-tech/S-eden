import AppConfig from './AppConfig.jsx'

export const AppLogo = () => {
   return (
        <div className="app__logo flat-centered">
            <img className="image" src="" alt="" />
            <span className="text">
                {AppConfig.app_name}
            </span>
        </div>
   )
}

export const AppButton = (props) => {
    return (
        <button className="app__button flat-centered" onClick={props.onclick}>
            {props.children}
        </button>
    )
}