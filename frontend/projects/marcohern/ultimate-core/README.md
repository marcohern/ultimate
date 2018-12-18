#Ultimate Core

Ultimate core contains the core models, services, behaviors and components that are required by all Ultimate dependencies.
Any Ultimate module will very likely have Core as a dependency.

Ultimate Core contains the RequestService, a basic service that facilitates HTTP requests in an organized and flexible manner.

##Installation

Install Ultimate Core with the following command:

`npm i @marcohern/ultimate-core --save`

**Note**: Recent versions of npm will not download dependencies automatically as it used to... because excuses.
The following command includes all dependencies to install and download. Run the following command for
a safer bet.

`npm i @marcohern/ultimate-core rxjs rxjs-compat --save`

##Setup

Include the UltimateCoreModule to you app module.

```
import { UltimateCoreModule } from '@marcohern/ultimate-core';
...
@NgModule({
    imports: [..., UltimateCoreModule]
})
export class AppModule {}
```

At this point, you may use the `RequestService` and the base component behaviors.
