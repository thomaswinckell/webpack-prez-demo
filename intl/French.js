

export default () => new Promise((resolve) => {

    require.ensure([], () => {

        const locale = "fr";
        const localeData = require('react-intl/locale-data/fr');
        const messages = require('./messages/fr.json').default;
        const formats = require('./formats/fr.json').default;

        resolve({
            locale,
            localeData,
            messages,
            formats
        });
    });
});