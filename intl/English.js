

export default () => new Promise((resolve) => {

    require.ensure([], () => {

        const locale = "en";
        const localeData = require('react-intl/locale-data/en');
        const messages = require('./messages/en.json').default;
        const formats = require('./formats/en.json').default;

        resolve({
            locale,
            localeData,
            messages,
            formats
        });
    });
});