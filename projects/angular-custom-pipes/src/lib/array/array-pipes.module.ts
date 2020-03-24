import { NgModule } from '@angular/core';

import { DropPipe } from './drop/drop.pipe';
import { HeadPipe } from './head/head.pipe';
import { IndexOfPipe } from './index-of/index-of.pipe';
import { InitialPipe } from './initial/initial.pipe';
import { IsEmptyPipe } from './is-empty/is-empty.pipe';
import { JoinPipe } from './join/join.pipe';
import { LastPipe } from './last/last.pipe';
import { RemoveFalsyPipe } from './remove-falsy/remove-falsy.pipe';
import { SumPipe } from './sum/sum.pipe';
import { UniqueByPipe } from './unique-by/unique-by.pipe';
import { UniquePipe } from './unique/unique.pipe';

@NgModule({
  declarations: [
    DropPipe,
    HeadPipe,
    IndexOfPipe,
    InitialPipe,
    IsEmptyPipe,
    JoinPipe,
    LastPipe,
    RemoveFalsyPipe,
    SumPipe,
    UniqueByPipe,
    UniquePipe,
  ],
  exports: [
    DropPipe,
    HeadPipe,
    IndexOfPipe,
    InitialPipe,
    IsEmptyPipe,
    JoinPipe,
    LastPipe,
    RemoveFalsyPipe,
    SumPipe,
    UniqueByPipe,
    UniquePipe,
  ]
})
export class ArrayPipesModule {}
