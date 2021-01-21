let template = require("./handlebar-example.handlebars");


export const HbExample = ({message}) => template({ doesWhat: message });
