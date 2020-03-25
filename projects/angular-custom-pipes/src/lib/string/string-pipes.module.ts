import { NgModule } from '@angular/core';

import { ConcatPipe } from './concat/concat.pipe';
import { IncludesPipe } from './includes/includes.pipe';
import { LowerFirstPipe } from './lowerFirst/lower-first.pipe';
import { ReplacePipe } from './replace/replace.pipe';
import { SplitPipe } from './split/split.pipe';
import { StartsWithPipe } from './startsWith/starts-with.pipe';
import { UpperFirstPipe } from './upperFirst/upper-first.pipe';

@NgModule({
  declarations: [
    ConcatPipe,
    IncludesPipe,
    LowerFirstPipe,
    ReplacePipe,
    SplitPipe,
    StartsWithPipe,
    UpperFirstPipe,
  ],
  exports: [
    ConcatPipe,
    IncludesPipe,
    LowerFirstPipe,
    ReplacePipe,
    SplitPipe,
    StartsWithPipe,
    UpperFirstPipe,
  ]
})
export class StringPipesModule {
}
