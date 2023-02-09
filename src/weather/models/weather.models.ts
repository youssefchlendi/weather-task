interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string; 
}

interface FeelsLike {
	day: number;
	eve: number;
	morn: number;
	night: number;
}

interface Temperature extends FeelsLike {
	max: number;
	min: number;
}

interface CurrentWeather {
	feels_like: number;
	humidity: number;
	sunrise: number;
	sunset: number;
	temp: number;
	weather: Weather[];
	wind_speed: number;
}

interface DailyWeather {
	feels_like: FeelsLike;
	humidity: number;
	sunrise: number;
	sunset: number;
	temp: Temperature;
	weather: Weather[];
	wind_speed: number;
}

export interface OneWeather {
	current: CurrentWeather;
	daily: DailyWeather[];
}



