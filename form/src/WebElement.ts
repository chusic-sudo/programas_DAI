export abstract class WebElement{
  protected element:HTMLElement;
  public constructor(element:string,id:string){
    this.element=document.createElement(element);
    this.element.id=id;
    document.getElementById('container')?.appendChild(this.element);
    this.element.addEventListener("click", () => this.click());
  }
  protected click():void{
    console.log("click");
  }
}
