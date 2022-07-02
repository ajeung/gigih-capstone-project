// For CSS
declare module "*.module.css" {
  const classes: { [key: string]: string };
  //@ts-ignore
  export default classes;
}
