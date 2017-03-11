export default {
    "total_pages": 10,
    "per_page": 25,
    "page": 1,
    "total_records": 250,
    "_links": {
        "next": {
            "href": "https://osdi-sample-system.org/api/v1/events?page=2"
        },
        "osdi:events": [
            {
                "href": "https://osdi-sample-system.org/api/v1/events/d91b4b2e-ae0e-4cd3-9ed7-d0ec501b0bc3"
            },
            {
                "href": "https://osdi-sample-system.org/api/v1/events/1efc3644-af25-4253-90b8-a0baf12dbd1e"
            }
        ],
        "curies": [
            {
                "name": "osdi",
                "href": "https://osdi-sample-system.org/docs/v1/{rel}",
                "templated": true
            }
        ],
        "self": {
            "href": "https://osdi-sample-system.org/api/v1/events"
        }
    },
    "_embedded": {
        "osdi:events": [
            {
                "identifiers": [
                    "osdi_sample_system:d91b4b2e-ae0e-4cd3-9ed7-d0ec501b0bc3",
                    "foreign_system:1"
                ],
                "origin_system": "OSDI Sample System",
                "created_date": "2014-03-20T21:04:31Z",
                "modified_date": "2014-03-20T21:04:31Z",
                "name": "March 14th Rally",
                "title": "Rally for Justice",
                "description": "<p>Join us in the park to rally for justice!</p>",
                "summary": "Join us in the park to rally for justice!",
                "instructions": "<p>Bring a friend and a sign.</p>",
                "browser_url": "http://osdi-sample-system.org/events/rally-for-justice",
                "type": "open",
                "featured_image_url": "http://osdi-sample-system.org/images/rally-for-justice-banner.jpg",
                "total_accepted": 14,
                "status": "confirmed",
                "start_date": "2015-03-14T12:00:00Z",
                "end_date": "2015-03-14T14:00:00Z",
                "all_day": false,
                "guests_can_invite_others": true,
                "transparence": "opaque",
                "visibility": "public",
                "location": {
                    "venue": "Lafayette Square",
                    "address_lines": [
                        "1564 H St NW"
                    ],
                    "locality": "Washington",
                    "region": "DC",
                    "postal_code": "20001",
                    "country": "US",
                    "language": "EN",
                    "location": {
                        "latitude": 38.9002101,
                        "longitude": -77.0359252,
                        "accuracy": "Rooftop"
                    }
                },
                "reminders": [
                    {
                        "method": "email",
                        "minutes": 1440
                    },
                    {
                        "method": "sms",
                        "minutes": 60
                    }
                ],
                "share_url": "http://osdi-sample-system.org/events/my-event/",
                "total_shares": 345,
                "share_options": [
                    {
                        "facebook_share": {
                            "title": "Debate watch party!",
                            "description": "Come and watch the debate.",
                            "image": "http://odsi-sample-system.org/images/event-share-image.jpg",
                            "total_shares": 100
                        },
                        "twitter_share": {
                            "message": "Watch the debate with @OSDI! Click here: http://osdi-sample-system.org/events/my-event/",
                            "total_shares": 100
                        },
                        "email_share": {
                            "subject": "Come watch the debate!",
                            "body": "Can you watch the debate with us? Click here: http://osdi-sample-system.org/events/my-event/",
                            "total_shares": 145
                        }
                    }
                ],
                "_links": {
                    "self": {
                        "href": "https://osdi-sample-system.org/api/v1/events/d91b4b2e-ae0e-4cd3-9ed7-d0ec501b0bc3"
                    },
                    "osdi:attendances": {
                        "href": "https://osdi-sample-system.org/api/v1/events/d91b4b2e-ae0e-4cd3-9ed7-d0ec501b0bc3/attendances"
                    },
                    "osdi:creator": {
                        "href": "https://osdi-sample-system.org/api/v1/people/65345d7d-cd24-466a-a698-4a7686ef684f"
                    },
                    "osdi:organizer": {
                        "href": "https://osdi-sample-system.org/api/v1/people/8a625981-67a4-4457-8b55-2e30b267b2c2"
                    },
                    "osdi:modified_by": {
                        "href": "https://osdi-sample-system.org/api/v1/people/c945d6fe-929e-11e3-a2e9-12313d316c29"
                    },
                    "osdi:record_attendance_helper": {
                        "href": "https://osdi-sample-system.org/api/v1/events/d91b4b2e-ae0e-4cd3-9ed7-d0ec501b0bc3/record_attendance_helper"
                    }
                }
            },
            {
                "identifiers": [
                    "osdi_sample_system:1efc3644-af25-4253-90b8-a0baf12dbd1e"
                ],
                "origin_system": "OSDI Sample System",
                "created_date": "2014-03-20T20:44:13Z",
                "modified_date": "2014-03-20T20:44:13Z",
                "title": "House Party for Progress",
                "description": "<p>Come to my small house party. We'll discuss how we can make more progress.</p>",
                "instructions": "<p>This is an invite-only event, but feel free to bring a friend!</p>",
                "browser_url": "http://osdi-sample-system.org/events/party-for-progress",
                "type": "ticketed",
                "ticket_levels": [
                    {
                        "title": "General Admission",
                        "description": "Gets you into the event and all activities.",
                        "amount": 5,
                        "currency": "USD",
                        "limit": 20,
                        "total_tickets": 10,
                        "total_amount": 50
                    },
                    {
                        "title": "VIP",
                        "description": "Gets you into the event and all activities, plus a special meet and greet with the candidate.",
                        "amount": 50,
                        "currency": "USD",
                        "limit": 5,
                        "total_tickets": 2,
                        "total_amount": 100
                    }
                ],
                "total_tickets": 12,
                "total_amount": 150,
                "total_accepted": 3,
                "status": "tentative",
                "start_date": "2015-01-05T19:00:00Z",
                "end_date": "2015-01-05T21:00:00Z",
                "all_day": false,
                "guests_can_invite_others": false,
                "capacity": 10,
                "transparence": "opaque",
                "visibility": "private",
                "location": {
                    "venue": "My House",
                    "address_lines": [
                        "1600 Pennsylvania Ave. NW"
                    ],
                    "locality": "Washington",
                    "region": "DC",
                    "postal_code": "20001",
                    "country": "US",
                    "language": "EN",
                    "location": {
                        "latitude": 38.9002101,
                        "longitude": -77.0359252,
                        "accuracy": "Rooftop"
                    }
                },
                "reminders": [
                    {
                        "method": "email",
                        "minutes": 1440
                    }
                ],
                "_links": {
                    "self": {
                        "href": "https://osdi-sample-system.org/api/v1/events/1efc3644-af25-4253-90b8-a0baf12dbd1e"
                    },
                    "osdi:attendances": {
                        "href": "https://osdi-sample-system.org/api/v1/events/1efc3644-af25-4253-90b8-a0baf12dbd1e/attendances"
                    },
                    "osdi:creator": {
                        "href": "https://osdi-sample-system.org/api/v1/people/65345d7d-cd24-466a-a698-4a7686ef684f"
                    },
                    "osdi:organizer": {
                        "href": "https://osdi-sample-system.org/api/v1/people/8a625981-67a4-4457-8b55-2e30b267b2c2"
                    },
                    "osdi:modified_by": {
                        "href": "https://osdi-sample-system.org/api/v1/people/c945d6fe-929e-11e3-a2e9-12313d316c29"
                    },
                    "osdi:record_attendance_helper": {
                        "href": "https://osdi-sample-system.org/api/v1/events/1efc3644-af25-4253-90b8-a0baf12dbd1e/record_attendance_helper"
                    }
                }
            }
        ]
    }
}
