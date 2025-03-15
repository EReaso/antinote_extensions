export class Extension {
	constructor(name) {
		this.commands = [];
		this.intents= intents;
		this.extension_name = name;
	};

	register_command(command) {
		this.commands.push(command);
	};
}
