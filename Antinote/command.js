export class Command {
  constructor(name, parameters = [], aliases = [], extension) {
    this.name = name;
    this.parameters = parameters;
    this.aliases = aliases;
    this.extension = extension;
    extension.register_command(this);
  }


  execute = () => {
    return "Hello, World!"
  };
}
