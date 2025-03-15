import Extension from "./Antinote/extension.js";
import Command from "./Antinote/command.js"

const ext = new Extension("Text");

const empty_line_remover = new Command("remove_empty_lines", ["noteContent"], ext);
empty_line_remover.execute = content => {
  let lines = content.split("\n");
  let filtered = lines.filter(line => line!=="\n");
  return filtered.join("");
};

const line_appender = new Command("append_lines", ["noteContent", "append"], [], ext);
line_appender.execute = (content, append) => {
  let lines = content.split("\n");
  let appended = lines.map(line => line + append);
  return appended.join("");
};

const line_prepender = new Command("prepend_lines", ["noteContent", "prepend"], [], ext);
line_appender.execute = (content, prepend) => {
  let lines = content.split("\n");
  let prepended = lines.map(line => prepend + line);
  return prepended.join("");
};
