class Todo {
  constructor(
    public id: string,
    public title: string,
    public active: boolean = true,
    public done: boolean = false,
  ) {}
}

export default Todo
