export class Customer2{
 
    constructor(private _ime: string,private _prezime: string){
    }
    public get ime(): string{
        return this._ime;
    }
    public set ime(value: string){
        this._ime = value;
    }
    public get prezime(): string{
        return this._prezime;
    }
    public set prezime(value: string){
        this._prezime = value;
    }
}
