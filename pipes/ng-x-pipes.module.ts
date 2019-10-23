import { NgModule } from '@angular/core';

import { MathPipesModule } from './math/math-pipes.module';

@NgModule({
  exports: [
    MathPipesModule,
  ],
})
export class NGxPipesModule {}
