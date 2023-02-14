// Defines tests to test that each table's attributes can be fetched and viewed

const request = require('supertest')
const {response} = require("express");

describe('Show all AB_ATTRIBUTE', () => {
    it('shows all attributes', async () => {
        await request('/api/ab_attribute', function (response) {
            expect(response.statusCode).toEqual(200)
            expect(response.body).toHaveProperty('AB_IDGASY_ID')
            expect(response.body).toHaveProperty('AB_NAME')
            expect(response.body).toHaveProperty('AB_DETAIL')
            expect(response.body).toHaveProperty('AB_DISPLAY_NAME')
            expect(response.body).toHaveProperty('AB_VALUE')
            expect(response.body).toHaveProperty('AB_BONUS_VALUE')
            expect(response.body).toHaveProperty('AB_ORDER_VALUE')
            expect(response.body).toHaveProperty('ST_CODE')
        })
    })
})

describe('Show all AB_TEMP', () => {
    it('shows all ab temp', async () => {
        await request('/api/ab_temp_save', function (response) {
            expect(response.statusCode).toEqual(200)
            expect(response.body).toHaveProperty('AB_ID')
            expect(response.body).toHaveProperty('AB_NAME')
            expect(response.body).toHaveProperty('AB_DETAIL')
            expect(response.body).toHaveProperty('AB_DISPLAY_NAME')
            expect(response.body).toHaveProperty('AB_VALUE')
            expect(response.body).toHaveProperty('AB_BONUS_VALUE')
            expect(response.body).toHaveProperty('AB_ORDER_VALUE')
            expect(response.body).toHaveProperty('ST_CODE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_DATE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_BY')
            expect(response.body).toHaveProperty('ABCA_ID')
        })
    })
})
describe('Show all ABCA_ATTRIBUTE_CATEGORY', () => {
    it('shows all abca attribute', async () => {
        await request('/api/ABCA_ATTRIBUTE_CATEGORY', function (response) {
            expect(response.statusCode).toEqual(200)

            expect(response.body).toHaveProperty('ABCA_ID')
            expect(response.body).toHaveProperty('ABCA_NAME')
            expect(response.body).toHaveProperty('ABCA_SHORT_NAME')
            expect(response.body).toHaveProperty('ABCA_DETAIL')
            expect(response.body).toHaveProperty('ABCA_DISPLAY_NAME')
            expect(response.body).toHaveProperty('ST_CODE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_DATE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_BY')
            expect(response.body).toHaveProperty('GASY_ID')

        })
    })
})


describe('Shows all ak_attack', () => {
    it('should show all users', async () => {
        await request('/api/ak_attack', function (response) {
            expect(response.statusCode).toEqual(200)

            expect(response.body).toHaveProperty('AK_ID')
            expect(response.body).toHaveProperty('AT_ID')
            expect(response.body).toHaveProperty('AKTY_ID')
            expect(response.body).toHaveProperty('AKCA_ID')
            expect(response.body).toHaveProperty('PRIMARY_DATY_ID')
            expect(response.body).toHaveProperty('AK_RELATED_ABCA_ID')
            expect(response.body).toHaveProperty('AK_ORDER_VALUE')
            expect(response.body).toHaveProperty('ST_CODE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_DATE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_BY')
            expect(response.body).toHaveProperty('GASY_ID')

        })
    })
})
//
describe('Shows all akca-attack-category', () => {
    it('should show akca attack', async () => {
        await request('/api/akca_attack_category', function (response) {
            expect(response.statusCode).toEqual(200)

            expect(response.body).toHaveProperty('AKCA_ID')
            expect(response.body).toHaveProperty('AKCA_NAME')
            expect(response.body).toHaveProperty('AKCA_DETAIL')
            expect(response.body).toHaveProperty('AKCA_DISPLAY_NAME')
            expect(response.body).toHaveProperty('ST_CODE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_DATE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_BY')
            expect(response.body).toHaveProperty('AKCA_GASY_ID')

        })
    })
})

describe('Shows all akty-attack-type', () => {
    it('should show akty-attack-type', async () => {
        await request('/api/akty_attack_type', function (response) {
            expect(response.statusCode).toEqual(200)

            expect(response.body).toHaveProperty('AKTY_ID')
            expect(response.body).toHaveProperty('GASY_ID')
            expect(response.body).toHaveProperty('AKTY_NAME')
            expect(response.body).toHaveProperty('AKTY_DETAIL')
            expect(response.body).toHaveProperty('AKTY_DISPLAY_NAME')
            expect(response.body).toHaveProperty('ST_CODE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_DATE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_BY')
            expect(response.body).toHaveProperty('AKTY_ORDER_VALUE')
        })
    })
})

describe('Shows all al_alignment', () => {
    it('should show al_alignment', async () => {
        await request('/api/al_alignment', function (response) {
            expect(response.statusCode).toEqual(200)
            expect(response.body).toHaveProperty('AL_ID')
            expect(response.body).toHaveProperty('GASY_ID')
            expect(response.body).toHaveProperty('AL_NAME')
            expect(response.body).toHaveProperty('AL_DETAIL')
            expect(response.body).toHaveProperty('AL_DISPLAY_NAME')
            expect(response.body).toHaveProperty('AL_DOMAIN_VALUE')
            expect(response.body).toHaveProperty('ST_CODE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_DATE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_BY')
            expect(response.body).toHaveProperty('AL_SUBDOMAIN_VALUE')
        })
    })
})

describe('Shows all at_action', () => {
    it('should show at_action', async () => {
        await request('/api/at_action', function (response) {
            expect(response.statusCode).toEqual(200)
            expect(response.body).toHaveProperty('AT_ID')
            expect(response.body).toHaveProperty('ATCL_ID')
            expect(response.body).toHaveProperty('GASY_ID')
            expect(response.body).toHaveProperty('AT_NAME')
            expect(response.body).toHaveProperty('AT_DETAIL')
            expect(response.body).toHaveProperty('AT_DISPLAY_NAME')
            expect(response.body).toHaveProperty('AT_DYNAMIC_TEXT')
            expect(response.body).toHaveProperty('ST_CODE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_DATE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_BY')
            expect(response.body).toHaveProperty('AT_EXPECTED_DETAIL_COLUMNS')
            expect(response.body).toHaveProperty('AT_ORDER_VALUE')
            expect(response.body).toHaveProperty('GACO_ID')
        })
    })
})

describe('Shows all atcl_action_class', () => {
    it('should show atcl_action_class', async () => {
        await request('/api/atcl_action_class', function (response) {
            expect(response.statusCode).toEqual(200)

            expect(response.body).toHaveProperty('ATCL_ID')
            expect(response.body).toHaveProperty('GASY_ID')
            expect(response.body).toHaveProperty('ATCL_NAME')
            expect(response.body).toHaveProperty('ATCL_DETAIL')
            expect(response.body).toHaveProperty('ATCL_DISPLAY_NAME')
            expect(response.body).toHaveProperty('ATCL_ORDER_VALUE')
            expect(response.body).toHaveProperty('ST_CODE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_DATE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_BY')
        })
    })
})

describe('Shows all ATDE_ACTION_DETAIL', () => {
    it('should show ATDE_ACTION_DETAIL', async () => {
        await request('/api/ATDE_ACTION_DETAIL', function (response) {
            expect(response.statusCode).toEqual(200)

            expect(response.body).toHaveProperty('ATDE_ID')
            expect(response.body).toHaveProperty('AT_ID')
            expect(response.body).toHaveProperty('ATCL_ID')
            expect(response.body).toHaveProperty('GASY_ID')
            expect(response.body).toHaveProperty('ATDE_NAME')
            expect(response.body).toHaveProperty('ATDE_DETAIL')
            expect(response.body).toHaveProperty('ATDE_ORDER_VALUE')
            expect(response.body).toHaveProperty('ATDE_DYNAMIC_TEXT')
            expect(response.body).toHaveProperty('ST_CODE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_DATE')
            expect(response.body).toHaveProperty('LAST_MODIFIED_BY')
        })
    })
})