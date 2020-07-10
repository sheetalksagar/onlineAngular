import { Directive, ElementRef , Renderer2,HostListener,HostBinding,} from '@angular/core';

@Directive({
  selector: '[appHost]',
})
export class HostDirective {
  constructor(private elementRef: ElementRef,private renderer2:Renderer2 ) {
    //elementRef.nativeElement.style.backgroundColor = 'yellow';
    this.changeColor("red");
  }
  
  @HostBinding('style.textShadow') textShadow: string;

  @HostListener('mouseover') onMouseOver() {
    this.textShadow = '2px 2px 3px green';
  }

  @HostListener('click') onClick() {
    window.alert('Host Element Clicked');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('black');
    this.textShadow = '2px 2px 4px red';
  }

  changeColor(color: string) {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'color', color);
  }

}