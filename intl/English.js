

export default {
    locale : "en",
    provider : () => new Promise((resolve) => {

        require.ensure([], () => {

            const locale = "en";
            const localeData = require('react-intl/locale-data/en');
            const messages = require('./messages/en.json');
            const formats = require('./formats/en.json');

            resolve({
                locale,
                localeData,
                messages,
                formats
            });
        });
    })
}