import {makeAutoObservable} from 'mobx'

export default class DeviceStore{
    constructor(){
        this._types =[
            {id: 1, name: 'types 1'},
            {id: 2, name: 'types 2'},
            {id: 3, name: 'types 3'},
            {id: 4, name: 'types 4'},
            {id: 5, name: 'types 5'},
            {id: 6, name: 'types 6'}
        ]
        this._brands = [
            {id: 1, name: 'brands 1'},
            {id: 2, name: 'brands 2'},
            {id: 3, name: 'brands 3'},
            {id: 4, name: 'brands 4'},
            {id: 5, name: 'brands 5'}
        ]
        this._devices = [
            {id: 2, name: 'devices 2', rating: 5},
            {id: 3, name: 'devices 3', rating: 5},
            {id: 4, name: 'devices 4', rating: 5},
            {id: 5, name: 'devices 5', rating: 5},
            {id: 6, name: 'devices 6', rating: 5}
        ]

        this._selectedType = {}
        this._selectedBrand = {}

        makeAutoObservable(this)
    }

    setTypes(types){
        this._types = types
    }

    setBrands(brands){
        this._brands = brands
    }

    setDevices(devices){
        this._devices = devices
    }

    setSelectedType(type){
        this._selectedType = type
    }

    setSelectedBrand(brand){
        this._selectedBrand = brand
    }

    get types(){
        return this._types
    }

    get brands(){
        return this._brands
    }

    get devices(){
        return this._devices
    }

    get selectedType(){
        return this._selectedType
    }

    get selectedBrand(){
        return this._selectedBrand
    }

}

    