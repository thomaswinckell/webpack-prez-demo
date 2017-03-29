export default {
    locale : "fr",
    provider : () => new Promise((resolve) => {

        require.ensure([], () => {

            const locale = "fr";
            const name = "Français";
            const localeData = require('react-intl/locale-data/fr');
            const messages = require('./messages/fr.json');
            const formats = require('./formats/fr.json');

            resolve({
                name,
                locale,
                localeData,
                messages,
                formats
            });
        });
    })
}