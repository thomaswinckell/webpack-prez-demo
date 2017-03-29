export default {
    locale : "fr",
    name : "Français",
    provider : () => new Promise((resolve) => {

        require.ensure([], () => {

            const locale = "fr";
            const localeData = require('react-intl/locale-data/fr');
            const messages = require('./messages/fr.json');
            const formats = require('./formats/fr.json');

            resolve({
                locale,
                localeData,
                messages,
                formats
            });
        });
    })
}