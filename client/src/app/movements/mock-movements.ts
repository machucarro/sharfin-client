import { Movement } from "./movement";

export const MOVEMENTS: Movement[] = 
[
	{
        "bookingDate": new Date("07.06.1984"),
        "chargedDate": new Date("08.06.1984"),
        "type": "Visa",
        "reference": "cash withdraw",
        "description": "I took cash",
        "value": {
    	    "amount": 50,
    	    "currency": "EUR"
        },
        "mode": "paid_to"
    },
	{
        "bookingDate": new Date("07.06.1984"),
        "chargedDate": new Date("08.06.1984"),
        "type": "Visa",
        "reference": "cash withdraw",
        "description": "I took cash",
        "value": {
    	    "amount": 50,
    	    "currency": "EUR"
        },
        "mode": "shared"
    },
    {
        "bookingDate": new Date("07.06.1984"),
        "chargedDate": new Date("08.06.1984"),
        "type": "Visa",
        "reference": "cash withdraw",
        "description": "I took cash",
        "value": {
    	    "amount": 50,
    	    "currency": "EUR"
        },
        "mode": "none"
    }
];