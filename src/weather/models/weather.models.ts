interface Weather {
	id: number;
	main: string;
	description: string;
	icon: string; 
}

export class FeelsLike {
	day: number;
	eve: number;
	morn: number;
	night: number;

	constructor(day: number, eve: number, morn: number, night: number) {
		this.day = day;
		this.eve = eve;
		this.morn = morn;
		this.night = night;
	}
}

export class Temperature extends FeelsLike {
	max: number;
	min: number;

	constructor(max: number, min: number) {
		super(max, min, max, min);
		this.max = max;
		this.min = min;
	}
	
}

export class CurrentWeather {
	feels_like: number;
	humidity: number;
	sunrise: number;
	sunset: number;
	temp: number;
	weather: Weather[];
	wind_speed: number;

	constructor(
		feels_like: number,
		humidity: number,
		sunrise: number,
		sunset: number,
		temp: number,
		weather: Weather[],
		wind_speed: number,
	) {
		this.feels_like = feels_like;
		this.humidity = humidity;
		this.sunrise = sunrise;
		this.sunset = sunset;
		this.temp = temp;
		this.weather = weather;
		this.wind_speed = wind_speed;
	}

}

export class DailyWeather {
	dt: number;
	feels_like: FeelsLike;
	humidity: number;
	sunrise: number;
	sunset: number;
	temp: Temperature;
	weather: Weather[];
	wind_speed: number;

	constructor(
		dt: number,
		feels_like: FeelsLike,
		humidity: number,
		sunrise: number,
		sunset: number,
		temp: Temperature,
		weather: Weather[],
		wind_speed: number,
	) {
		this.dt = dt;
		this.feels_like = feels_like;
		this.humidity = humidity;
		this.sunrise = sunrise;
		this.sunset = sunset;
		this.temp = temp;
		this.weather = weather;
		this.wind_speed = wind_speed;
	}
}

export interface OneWeather {
	current: CurrentWeather;
	daily: DailyWeather[];
}



