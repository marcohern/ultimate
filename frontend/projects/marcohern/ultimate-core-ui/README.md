#Ultimate Core UI

Ultimate Core UI contains UI elements that use Core funtionality.

##Installation

Install Ultimate Core UI with the following command:

`npm i @marcohern/ultimate-core-ui --save`

**Note**: Recent versions of npm will not download dependencies automatically as it used to... because excuses.
The following command includes all dependencies to install and download. Run the following command for
a safer bet.

`npm i @marcohern/ultimate-core-ui @marcohern/ultimate-core rxjs rxjs-compat --save`

##Setup

Include the `UltimateCoreUiModule` to you app module.

```
import { UltimateCoreUiModule } from '@marcohern/ultimate-core';
...
@NgModule({
    imports: [..., UltimateCoreUiModule]
})
export class AppModule {}
```

At this point, you may include any of the availabel components.
