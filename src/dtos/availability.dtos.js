const Joi = require('joi');
const { listTimeZones } = require('timezone-support');
Joi.objectId = require('joi-objectid')(Joi);

const date = Joi.date().iso();
// valida la lista de zonas horarias existentes
const timezone = Joi.string().valid(...listTimeZones());
const scheduleId = Joi.objectId();

const checkAvailavilityDto = Joi.object({
  date: date.required(),
  timezone: timezone.required(),
  scheduleId: scheduleId.required(),
});

module.exports = { checkAvailavilityDto };
