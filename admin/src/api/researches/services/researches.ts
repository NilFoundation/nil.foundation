'use strict'

/**
 * researches service
 */

import { factories } from '@strapi/strapi'
const { createCoreService } = factories
module.exports = createCoreService('api::researches.researches')
