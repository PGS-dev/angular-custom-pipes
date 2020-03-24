import { NgModule } from '@angular/core';

import { ArrayPipesModule } from './array/array-pipes.module';
import { MathPipesModule } from './math/math-pipes.module';
import { ObjectPipesModule } from './object/object-pipes.module';
import { StringPipesModule } from './string/string-pipes.module';

@NgModule({
  exports: [
    ArrayPipesModule,
    MathPipesModule,
    ObjectPipesModule,
    StringPipesModule,
  ],
})
export class AngularCustomPipesModule {}
