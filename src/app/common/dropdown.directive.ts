import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.open') isOpen = false;
  constructor(private  elRef: ElementRef, private renderer: Renderer2) { }

  toggleOpen = (e) => {
    this.isOpen = this.elRef.nativeElement.contains(e.target) ?
      !this.isOpen : false;
  }
  // @HostListener('document:click', ['$event']) toggleMenu() {
  //   this.isOpen = this.elRef.nativeElement.contains(event.target) ?
  //     !this.isOpen : false;
  // }
  ngOnInit() {
    this.renderer.listen('document', 'click', this.toggleOpen)
  }
}
