# Installation

1. Use npm to install the package

        $ npm install angular-custom-pipes
    
2. You can import all Pipes by NGxPipesModule or specific pipes importing one module such as MathPipesModule, for example:

        import { AngularCustomPipesModule } from 'angular-custom-pipes';
        
        @NgModule({
         // ...
         imports: [
           // ...
           AngularCustomPipesModule
         ]
        })
  
3. Now you are able to use imported pipes, for example:

    In template:

        <p>{{ 10 | calculate: 2: CalculateActions.ADD }}</p> <!-- Output: 12 -->
        
    In component:

        import { CalculateActions, CalculatePipe } from 'angular-custom-pipes';
        
        export class AppComponent {
          constructor(private calculatePipe: CalculatePipe) {
            this.calculatePipe.transform(10, 2, CalculateActions.ADD); // Returns: 12
          }
          // ..
        }
