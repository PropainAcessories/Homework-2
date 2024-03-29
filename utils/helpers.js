module.exports = {
    format_date: () => {
        const dayjs = require('dayjs');
        let now = dayjs().format('MMMM-DD-YYYY hh:mm A').toString();

        const date = new Date(now);
        console.log(date);

        const dateStamp = dayjs(date);
        console.log(dateStamp);

        return dayjs(dateStamp).format('MMMM-DD-YYYY hh:mm A');
    },
};