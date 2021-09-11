import { action, makeObservable, observable } from "mobx"


interface AbstractReactTextFieldPresenter {
    text: String
    setText(val:String): void
}

class ReactTextFieldPresenter implements AbstractReactTextFieldPresenter {

    @observable text:String
    constructor() {
        this.text = ""
        makeObservable(this)
    }

    @action setText(val: String) {
        this.text = val
    }
}

export  {ReactTextFieldPresenter,AbstractReactTextFieldPresenter}