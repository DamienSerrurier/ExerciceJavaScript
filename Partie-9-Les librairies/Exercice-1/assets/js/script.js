const Cleave = require("./cleave");

new Cleave('.phoneNumber', {
phone: true,
phoneRegionCode: 'Fr',
delemiters: '.'
})