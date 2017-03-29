export default {
    locale : "fr",
    provider : () => new Promise((resolve) => {

        require.ensure([], () => {

            const localeData = require('react-intl/locale-data/fr');
            const messages = require('./messages/fr.json');
            const formats = require('./formats/fr.json');

            resolve({
                locale : "fr",
                localeData,
                messages,
                formats
            });
        });
    })
}