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