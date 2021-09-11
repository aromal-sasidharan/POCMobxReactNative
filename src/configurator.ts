import { AbstractReactTextFieldPresenter, ReactTextFieldPresenter } from "./presenter/ReactTextFieldPresenter";




class Configurator {

    static configureReactTextFieldPresenter(): AbstractReactTextFieldPresenter{
        return new ReactTextFieldPresenter()
    }

}


const presenters = {
    reactTextFieldPresenter: Configurator.configureReactTextFieldPresenter()
}


export default presenters