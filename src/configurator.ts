import { AbstractReactTextFieldPresenter, ReactTextFieldPresenter } from "@presenters/ReactTextFieldPresenter"




class Configurator {

    static configureReactTextFieldPresenter(): AbstractReactTextFieldPresenter{
        return new ReactTextFieldPresenter()
    }

}


const presenters = {
    reactTextFieldPresenter: Configurator.configureReactTextFieldPresenter()
}


export default presenters