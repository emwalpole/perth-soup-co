<!-- HTML structure -->
 <div class="flex flex-nowrap justify-center mx-auto max-w-[400px]">
  <span class="w-[50%] max-w-[125px]">
    <slot name="image"></slot>
  </span>
  <div class="flex flex-col pl-12 justify-between text-left w-[50%] max-w-[275px]">
    <slot name="title"></slot>
    <slot name="description"></slot>
    <slot name="note"></slot>
  </div>
 </div>
