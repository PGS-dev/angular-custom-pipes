import { NgModule } from '@angular/core';

import { CalculatePipe } from './calculate/calculate.pipe';

@NgModule({
  declarations: [
    CalculatePipe,
  ],
  exports: [
    CalculatePipe,
  ]
})
export class MathPipesModule {}
