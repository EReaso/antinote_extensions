class Parameter {
  constructor(parameter_type,name, max=null, min=null,default_value=null) {
    this.parameter_type = parameter_type;
    this.default_value = default_value;
    this.max= max;
    this.min = min;
  }
}
