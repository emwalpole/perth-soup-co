<!-- HTML structure -->
 <div class="flex flex-nowrap justify-center mx-auto max-w-[425px]">
  <span class="w-[35%] max-w-[150px]">
    <slot name="image"></slot>
  </span>
  <div class="flex flex-col pl-8 justify-between text-left w-[65%] max-w-[325px]">
    <slot name="title"></slot>
    <slot name="description"></slot>
    <slot name="note"></slot>
  </div>
 </div>
