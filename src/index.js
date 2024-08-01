import RexAlert from '@/components/Rex/Alert/Alert.vue';
import RexButton from '@/components/Rex/Button/Button.vue';
import RexInputText from '@/components/Rex/Input/InputText.vue';
import RexIcon from '@/components/Rex/Icon/Icon.vue';
import RexIconClose from '@/components/Rex/Icon/IconClose.vue';
import RexApp from '@/components/Rex/App/App.vue';

/**
 * Create the UI Library
 */
export function createRexUI() {

    return {
        install(app) {
            // register RexAlert, RexButton, RexInputText, RexApp
            app.component('RexAlert', RexAlert);
            app.component('RexButton', RexButton);
            app.component('RexIcon', RexIcon);
            app.component('RexIconClose', RexIconClose);
            app.component('RexInputText', RexInputText);
            app.component('RexApp', RexApp);
        },
    };
}
