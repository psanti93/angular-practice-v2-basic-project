import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropDown]'
})
export class DropdownDirective{
 // open is a css class
@HostBinding('class.open') isOpen = false;
@HostListener('click') toggleOpen(){
  this.isOpen = !this.isOpen;
}

}
