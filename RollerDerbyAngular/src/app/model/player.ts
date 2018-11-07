export class Player {
    id: number;
    derbyName: string;
    position?: string;
    isOnJam: boolean;

    constructor(id,derbyName){
        this.id = id;
        this.derbyName = derbyName;
        // this.position = position;
    }
}