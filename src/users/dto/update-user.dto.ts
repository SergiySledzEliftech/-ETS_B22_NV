export class UpdateUserDto {
	readonly firstName: string;
	readonly lastName: string;
	readonly nickname: string;
	readonly about: string;
	readonly avatar: string;
	readonly email: string;
	readonly phone: string;
	readonly optionalPhone: string;
	readonly location: string;
	readonly rating: number;
	// readonly passHash: string;
}
