import { IsNotEmpty, Length, Matches } from 'class-validator';


export class UpdateUserPassDto {
	@IsNotEmpty()
	@Length(8, 8)
	@Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/ )
	readonly oldPass: string;

	@IsNotEmpty()
	@Length(8, 8)
	@Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/ )
	readonly newPass: string;
}
