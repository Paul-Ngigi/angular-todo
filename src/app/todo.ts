export class Todo {
    showTodo!: boolean;
    constructor(public id: number, public name: string, public todoDescription: string, public completeDate: Date){
        this.showTodo = false;
    }
}
