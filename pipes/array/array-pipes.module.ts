import { NgModule } from '@angular/core';

import { RemoveFalsyPipe } from './removeFalsy/removeFalsy.pipe';
import { SumPipe } from './sum/sum.pipe';
import { UniqueByPipe } from './uniqueBy/unique-by.pipe';
import { UniquePipe } from './unique/unique.pipe';

@NgModule({
  declarations: [
    RemoveFalsyPipe,
    SumPipe,
    UniqueByPipe,
    UniquePipe,
  ],
  exports: [
    RemoveFalsyPipe,
    SumPipe,
    UniqueByPipe,
    UniquePipe,
  ]
})
export class ArrayPipesModule {}
