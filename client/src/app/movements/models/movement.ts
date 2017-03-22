export interface Movement 
{
    bookingDate: Date;
    chargedDate: Date;
    type: string;
    reference: string;
    description: string;
    value: MovementValue;
    mode: string;
}

export interface MovementValue
{
    amount: number;
    currency: string;
}
