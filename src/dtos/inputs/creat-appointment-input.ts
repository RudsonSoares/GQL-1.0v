import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmantInput {
    @Field()
    customerId: string;
   
    @Field()
    startsAt: Date;

    @Field()
    endsAt: Date;
}