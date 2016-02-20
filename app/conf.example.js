/**
 * The contents of this file are subject to the OpenMRS Public License
 * Version 1.1 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at
 * http://license.openmrs.org
 *
 * Software distributed under the License is distributed on an "AS IS"
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See the
 * License for the specific language governing rights and limitations
 * under the License.
 *
 * Copyright (C) OpenMRS, LLC.  All Rights Reserved.
 */

// valid JSON, except for RegExp's
module.exports = {
    "site": {
        // use full url, like http://localhost:3000/
        "url": "https://id.openmrs.org/",
        "title": "OpenMRS ID"
    },
    "ldap": {
        // LDAP Settings

        "server": {
            "uri": "ldap://localhost",
            "baseDn": "ou=systemacct,dc=example",
            "rdn": "uid",
            "loginUser": "system_acct",
            "password": "secret"
        },
        "user": {
            "baseDn": "ou=users,dc=example",
            "rdn": "uid",

            // corresponds with form input names
            "username": "uid",
            "firstname": "cn",
            "lastname": "sn",
            "displayname": "displayName",
            "email": "mail",
            "password": "userPassword",
            "secondaryemail": "otherMailbox",
            "defaultObjectClass": [
                "inetOrgPerson",
                "extensibleObject"
            ],
          "usernameRegex": /^[a-z][.]?[a-z0-9]{2,18}$/,
            "defaultGroups": [
                "bamboo-user",
                "confluence-users",
                "dashboard-users",
                "jira-chg-requester",
                "jira-icm-assignee",
                "jira-icm-reporter",
                "jira-trunk-developer",
                "jira-users",
                "modrepo-users",
                "osqa-users"
            ],
            "passwordResetPolicy": "cn=reset,ou=policy,dc=example",
            "passwordResetTimeout": 7200000
        },
        "group": {
            "baseDn": "ou=groups,dc=example",
            "member": "member",
            "rdn": "cn",
            "objectClass": "groupOfNames"
        }
    },
    "mongo": {
        "uri": "mongodb://mongo_user:secret@localhost/id_dashboard",
        "username": "mongo_user",
        "password": "secret",
        "commonExpireTime": "2d"
    },
    "session": {
        "__comment3": "session storage DB",

        "__comment1": "session secret, used to secure session data",
        "secret": "secret",
        "__comment2": "how long until session terminates (24hr)",
        "duration": 86400000
    },
    "logger": {
        // Log settings

        "relativePath": "/../logs/openmrsid.log"
    },
    "validation": {
        // validation settings
        "recaptchaPublic": "public_key",
        "recaptchaPrivate": "private_key",
        "allowPlusInEmail": false,
    },
    "email": {
        // Email settings

        "validation": {
            "emailRegex": /^[A-Za-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        },
        "smtp": {
            "host": "localhost",
            "port": 25,
            "use_authentication": false,
            "user": "postfix_user",
            "pass": "secret"
        }
    },

    "defaultSidebar": [
        "needhelp"
    ],

    // displays at bottom of sidebar
    "aboutHTML": "<a href=\"/\">OpenMRS ID Dashboard</a>, v" + require("../package").version,

    // user-configured modules
    "userModules": [
        // "openmrs-contrib-globalnavbar",
    ],

    // a exceptionlists of session middlware, use regular expressions
    "sessionExceptions": [
        /^\/globalnav($|\/.*$)/,
        /^\/resource\/.*$/,
        /^\/panel($|\/.*$)/, // session will contradict with formage's
    ],

    "signup": {
        "signupFieldNames": [
            "username",
            "firstName",
            "lastName",
            "primaryEmail",
            "password",
            "timestamp"
        ],
        "requiredSubmitTimeSec": 5,
        "signupFormMaxAgeHours": 12,
        "honeypotFieldName": "country",
        "disableHoneypot": true,
        "disableBlacklist": true, // disable blacklist by default.

        "dnsSpamLists": {
            "bl.spamcop.net": {
                "returnCodes": ["127.0.0.2"]
            },
            "zen.spamhaus.org": {
                "returnCodes": ["127.0.0.2", "127.0.0.3", "127.0.0.4", "127.0.0.5",
                    "127.0.0.6", "127.0.0.7"
                ]
            }
        }
    }
};

// expose shorthand method used by view renderers
module.exports.user = module.exports.ldap.user;
