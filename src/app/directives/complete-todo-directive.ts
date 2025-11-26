import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCompleteTodoDirective]',
})
export class CompleteTodoDirective  implements OnChanges{

  @Input('appCompleteTodoDirective') condition!: boolean;

  constructor( 
    private el: ElementRef, 
    private renderer: Renderer2
  ) { console.log('completed todo directives ') }

  ngOnChanges(): void {
      console.log('the condition of completed => ', this.condition)
      if(this.condition){
        this.renderer.addClass(this.el.nativeElement, 'line-through');
        this.renderer.addClass(this.el.nativeElement, 'text-gray-500')
      }else{
        this.renderer.removeClass(this.el.nativeElement, 'line-through');
        this.renderer.removeClass(this.el.nativeElement, 'text-gray-500')
      }
  }


}
