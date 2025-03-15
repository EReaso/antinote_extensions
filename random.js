import Extension from "./Antinote/extension.js";
import Command from "./Antinote/command.js";
import {Parameter as Param} from "./Antinote/parameter.js";

const ext = new Extension("Random");

const random_number = new Command("random_number", [new Param("float", "min"), new Param("float", "max"), new Param("bool", "int")], ext);
random_number.execute = (min, max, int = false) => {
  let result = Math.random(min, max);
  if (int) {
    result = Math.floor(result);
  }
  return result;
}
