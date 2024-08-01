import type { App } from 'vue';
import RexAlert from '@/components/Rex/Alert/Alert.vue';
import RexApp from '@/components/Rex/App/App.vue';
import RexButton from '@/components/Rex/Button/Button.vue';
import RexCol from '@/components/Rex/Grid/Col.vue';
import RexContainer from '@/components/Rex/Grid/Container.vue';
import RexFooter from '@/components/Rex/Footer/Footer.vue';
import RexHeader from '@/components/Rex/Header/Header.vue';
import RexInputText from '@/components/Rex/Input/InputText.vue';
import RexIcon from '@/components/Rex/Icon/Icon.vue';
import RexIconClose from '@/components/Rex/Icon/IconClose.vue';
import RexRow from '@/components/Rex/Grid/Row.vue';

/**
 * Create the UI Library
 */
export function createRexUI() {

    return {
        install(app: App) {
            app.component('RexApp', RexApp);
            app.component('RexAlert', RexAlert);
            app.component('RexButton', RexButton);
            app.component('RexCol', RexCol);
            app.component('RexContainer', RexContainer);
            app.component('RexFooter', RexFooter);
            app.component('RexHeader', RexHeader);
            app.component('RexIcon', RexIcon);
            app.component('RexIconClose', RexIconClose);
            app.component('RexInputText', RexInputText);
            app.component('RexRow', RexRow);
        },
    };
}
