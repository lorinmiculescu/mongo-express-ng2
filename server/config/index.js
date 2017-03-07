'use strict';

import * as path from "path";

export const config = {

    env: process.env.NODE_ENV,

    root: path.normalize(`${__dirname}/../../..`),

    port: process.env.PORT || 9000,

    ip: process.env.IP || '0.0.0.0',

    mongo: {
        uri: 'mongodb://localhost/autodice',
        options: {
            db: {
                safe: false
            }
        }
    },

    seedDB: true,

    secrets: {
        session: 'autodice2-secret'
    },

    facebook: {
        clientID: process.env.FACEBOOK_ID || 'id',
        clientSecret: process.env.FACEBOOK_SECRET || 'secret',
        callbackURL: `${process.env.DOMAIN || ''}/auth/facebook/callback`
    },

    twitter: {
        clientID: process.env.TWITTER_ID || 'id',
        clientSecret: process.env.TWITTER_SECRET || 'secret',
        callbackURL: `${process.env.DOMAIN || ''}/auth/twitter/callback`
    },

    google: {
        clientID: process.env.GOOGLE_ID || 'id',
        clientSecret: process.env.GOOGLE_SECRET || 'secret',
        callbackURL: `${process.env.DOMAIN || ''}/auth/google/callback`
    },

};