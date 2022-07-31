import {IsEmpty, Matches} from 'class-validator';

export class CreateUserDto {
	@IsEmpty()
	@Matches(/^[a-zA-Z]*$/)
	firstName: string;

	@IsEmpty()
	@Matches(/^[a-zA-Z]*$/)
	lastName: string;

	@IsEmpty()
	@Matches(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)
	phone: number;

	@IsEmpty()
	@Matches(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)
	email: string;

	@IsEmpty()
	@Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
	passHash: string;
}
